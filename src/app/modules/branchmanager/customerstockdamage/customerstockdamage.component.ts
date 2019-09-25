import { DamageStockComplainProductWiseQuantity } from './../../../model/DamageStockComplainProductWiseQuantity.interface';
import { InvoiceProductWiseQuantity } from './../../../model/InvoiceProductWiseQuantity.interface';
import { Invoice } from './../../../model/Invoice.interface';
import { DamageStockComplain } from './../../../model/DamageStockComplain.interface';
import { CustomerInformation } from './../../../model/CustomerInformation.interface';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { CustomerstockdamageService } from '../../../Shared/customerstockdamage.service';
import { ProductService } from '../../../Shared/product.service';
import { ProductPriceMapping } from 'src/app/model/ProductPriceMapping.interface';




@Component({
  selector: 'app-customerstockdamage',
  templateUrl: './customerstockdamage.component.html',
  styleUrls: ['./customerstockdamage.component.scss']
})
export class CustomerstockdamageComponent implements OnInit {

  damagedform : FormGroup;
  constructor(public customerstockdamageService : CustomerstockdamageService,
              public productservice : ProductService,
            public fb:FormBuilder) { }

  customerinfo : CustomerInformation[];
  damagestockcomplaininfo: DamageStockComplain={complainNo:'',invoice:null,pmap:null,complainType:'',complainDate:'',remarks:''};
  invoiceinfo : Invoice={invoiceNo:'',totalAmount:null,invoiceGenerationDate:'',branchInformation:null,executiveInformation:null,
                customerInformation:{customerId:'',customerName:'',customerType:'',customerMobileNo:'',customerMailId:'',
                customerPanCardNo:'',customerAadhaarNo:''},productQuantity:null};
  productpricemapping : ProductPriceMapping={
                  pricemappingid:null,
                  buyingPrice:null,
                  sellingPrice:null,
                  tax: null,
          productInformation:null,
          // {
          //                     productCode: '',
          //                     productName: '',
          //                     hsnCode: '',
          //                     productDescription: '',
          //                     productCategory:null
          //                     },
          venderInformation: null
}
   invoiceno : string;
   quantity : number;
   remarkval : string;
   date: string;
   productPrice :ProductPriceMapping;

  ngOnInit() {
    this.allFormValidation();
  }

  localInvoice : Invoice={
    invoiceNo: '',
	  totalAmount: null,
	  invoiceGenerationDate: '',
    branchInformation: null,
	  executiveInformation: null,
	  customerInformation: null,
	  productQuantity: null
  }

  ppquantity: Map<ProductPriceMapping, InvoiceProductWiseQuantity>; 

  productQuantity = new Map<ProductPriceMapping, InvoiceProductWiseQuantity>(); 

  getInvoiceInfo(invoiceno:string){
   console.log(invoiceno);
    this.customerstockdamageService.getInvoiceInfo(invoiceno).subscribe(
      (data:Invoice)=>{
        console.log(data);
        this.invoiceinfo=data;
        console.log(this.invoiceinfo);
        this.ppquantity=data.productQuantity;
        console.log(this.ppquantity);
      }
    )
    setTimeout(()=>{
      var json_data =this.ppquantity;
      console.log(this.ppquantity);
      var result = [];
      for(var i in this.ppquantity)
      result.push([i, json_data[i]]);
      this.productQuantity= new Map<ProductPriceMapping, InvoiceProductWiseQuantity>(); 
      for(let index = 0; index < result.length; index++){
        console.log(result[index][0]);
        console.log(result[index][1]);
        this.productservice.getByidProductPriceMappingObse(result[index][0]).subscribe(
          (data : ProductPriceMapping)=>{
            console.log(data);
            this.productQuantity.set(data, result[index][1]);
            console.log(this.productQuantity);  
          }
        );
      } 
    },4000);
    setTimeout(() => {
      this.invoiceinfo.productQuantity=this.productQuantity;
      console.log(this.productQuantity);
     },3000);
    
  }

  
  getProduct(productprice:ProductPriceMapping)
  {
    this.productPrice = productprice;
    console.log(this.productPrice);
  }
  

  piMap=new Map<ProductPriceMapping,DamageStockComplainProductWiseQuantity>();
  q:Array<number>=[];


  getProductPriceMap(quantity:number)
  { 
      this.q.push(quantity);
      const obj:DamageStockComplainProductWiseQuantity = {qid:null, complainProductwiseQuantity:null};
      obj.complainProductwiseQuantity = quantity;
      console.log(this.productPrice);
     
      this.piMap.set(this.productPrice,obj);
        //return this.productPr;
  }

  

  customerDamagedStock(invoicedata:Invoice)
  {
    console.log(invoicedata);
    this.damagestockcomplaininfo.invoice = invoicedata; 
    this.damagestockcomplaininfo.complainDate = new Date().toDateString();
    this.damagestockcomplaininfo.remarks = this.remarkval;
    this.damagestockcomplaininfo.pmap = this.piMap;

    let i:any[]=[];
     i.push(this.damagestockcomplaininfo);
        this.damagestockcomplaininfo.pmap.forEach((value:DamageStockComplainProductWiseQuantity ,key:ProductPriceMapping)=>{
        i.push(key);
        i.push(value);
      })
     return this.customerstockdamageService.customerDamagedStock(i).subscribe();
  }
  
  allFormValidation()
  {
      this.damagedform = this.fb.group({
     customerno: ['', [Validators.required]],
      customername: ['', [Validators.required]],
      invoiceno: ['', [Validators.required]],
      date: ['', [Validators.required]],
      product:['', [Validators.required]],//new FormControl(''),
      quantity:['', [Validators.required, Validators.pattern('[1-9]*')]],
      remark: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]]
     }); 
  }
  
  
}
