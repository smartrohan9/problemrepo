import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';
import { branchstockdamaged } from '../../../model/branchstockdamaged.interface';
import { DamageStockBranchComplain } from '../../../model/DamageStockBranchComplain.interface';
import { BranchServiceService } from '../../../Shared/branch-service.service';
import { ProductPriceMapping } from '../../../model/ProductPriceMapping.interface';
import { DamageStockBranchComplainQuantity } from '../../../model/DamageStockBranchComplainQuantity.interface';
import { Router } from '@angular/router';
import { BranchInformation } from '../../../model/BranchInformation.interface';
import { productquantity } from '../../../model/productquantity';


// const ELEMENT_DATA: branchstockdamaged[] = [
//   {
//     DamageStockBranchComplainid :'',
// 	  branchInformation:'',
//     pmap:'',
//     dateComplain:'',
//    remarks:''}
  

@Component({
  selector: 'app-branch-stock-damaged',
  templateUrl: './branch-stock-damaged.component.html',
  styleUrls: ['./branch-stock-damaged.component.scss']
})
export class BranchStockDamagedComponent implements OnInit
 {
  qty:number;
  productNm:string;
  currentStock:number;
  form:FormGroup;


  damageStockBranchComplainQuantity: DamageStockBranchComplainQuantity=
{
    id:null,
    damageStockBranch:null
}
  singleProduct:branchstockdamaged[];
  
  constructor(public branchcomplainservice:BranchServiceService,private router: Router,private fb:FormBuilder) { }

  ngOnInit() {
      this.branchcomplainservice.productpricemapping;
      this.getallproductpricemapping();
      this.currentStock=null;
    this.initform();
      
  }
 
 
  ppm:ProductPriceMapping={
    pricemappingid:null,
    buyingPrice:null,
    sellingPrice:null,
    tax:{
      taxId:null,
      cGst:null,
      sGst:null,
      iGst:null,
    },
    productInformation:{
      productCode:'',
      productName:'',
      hsnCode:'',
      productDescription:'',
      productCategory:null
    },
    venderInformation:
    {
        vendorId:'',
        vendorName:'',
        state:'',
        district:'',
        vendorAddress:'',
        vendorContactNumber:null,
        vendorEmail:'',
        vendorStatus:'',
        vendorPincode:null,
    }
	
  }
  m1(product:ProductPriceMapping,productName:string) {
    console.log("enter in m1 method");
    console.log(product);
    console.log(productName);
    this.productNm=productName;
    console.log(this.productNm);
    this.branchcomplainservice.getcurrentstock(this.productNm).subscribe((data:number)=>{
      console.log(data);
      this.currentStock=data;});
    console.log(this.currentStock);
    this.ppm=product;

  }

  branchinfo:BranchInformation={
    branchCode:"1",
    branchName:"crosssale",
      state:
      {
        stateId:101,
    stateCode:"60",
	stateName:"Maharashtra",
      },
      district:{
        districtId:1,
  districtName:"Pune",
  state:null
      },
    branchAddress:"karvenagar",
    branchPincode:475841,
    branchContactNumber:800748586,
      branchEmailId:"prit@mail.com",
           branchStatus:"enable",
      branchType:"normal",
    openingDate:"23/4/2019",
  }
  map=new Map<ProductPriceMapping,DamageStockBranchComplainQuantity>();
  
  getallproductpricemapping()
  {
    this.branchcomplainservice.getallproductpricemapping();
  }

  

  branchcomplain:DamageStockBranchComplain={
      damageStockBranchComplainid:'',
      branchInformation:null,
      pmap:null,
      dateComplain:'',
      remarks:'',
  } 

  savedata(branchcomplain:DamageStockBranchComplain,qty:number)
  {
    console.log(qty);
    this.damageStockBranchComplainQuantity.damageStockBranch=qty;
    let dat=new Date();
    this.branchcomplain.dateComplain=dat.toDateString();

    alert("successfully add");
    console.log("savedata method before ppm");
    console.log(this.ppm);
    this.map.set(this.ppm,this.damageStockBranchComplainQuantity);
    this.branchcomplain.pmap=this.map;
    console.log(this.branchcomplain.pmap);
    console.log(this.branchcomplain);
    this.branchcomplain.branchInformation=this.branchinfo;
    this.branchcomplainservice.createData(this.branchcomplain).subscribe(
      (data: DamageStockBranchComplain)=>{
        console.log(data);
        this.router.navigateByUrl('/role'+'/branchmanager'+'/dashboard');
      }
      )
  }
  // reset()
  // {

  // }
  
    initform(){
      this.form=this.fb.group({
      productName:['',[Validators.required]],
      currentStock:[''],
      quantity:['',[Validators.required,Validators.pattern('[0-9]*'),productquantity]],
      remarks:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]]

    })
    this.form.controls['currentStock'].disable();
  }

    public hasError=(controlName:string,errorName:string)=>{
      return this.form.controls[controlName].hasError(errorName);
    }

     
  
  // nestedform:FormGroup = new FormGroup({
  //     $key:new FormControl('null'),
  //     productName:new FormControl(''),
  //    quantity:new FormControl(''),
  // //    //email:new FormControl(''),
  // // //  complainno:new FormControl(''),
  // // //   //city:new FormControl(''),
  // // //  // gender:new FormControl('1'),
  //    dateComplain:new FormControl(''),
  //   remarks:new FormControl(''),
  // // //hireDate: new FormControl(''),
  //   }); 
  
}
