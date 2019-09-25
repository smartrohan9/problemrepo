import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductPriceMapping } from '../model/ProductPriceMapping.interface';

import { DamageStockBranchComplain } from '../model/DamageStockBranchComplain.interface';
import { DamageStockBranchComplainQuantity } from '../model/DamageStockBranchComplainQuantity.interface';
import{Observable} from 'rxjs';
import { BranchProductStockWiseQuantity } from '../model/BranchProductStockWiseQuantity.interface';
const headerOption={
  headers:new HttpHeaders({"Content-Type":"application/json"})
};
@Injectable({
  providedIn: 'root'
})
export class BranchServiceService {

  constructor(private http:HttpClient) { }

  url='http://localhost:8082/getStockService';
 // branchcomplain:DamageStockBranchComplain
 listofproduct:ProductPriceMapping[];
 

 branchcomplain:DamageStockBranchComplain =
 {
     damageStockBranchComplainid:'',
     branchInformation:null,
     pmap:null,
     dateComplain:'',
     remarks:'',
 }

 productpricemapping:ProductPriceMapping={
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
  },

 }
 productAndQuantity:any[]=[];
 
 public createData(branchcomplain:DamageStockBranchComplain): Observable<DamageStockBranchComplain>{
   console.log("in service");
   console.log(branchcomplain);
  
   console.log(this.productAndQuantity);
  this.productAndQuantity=new Array<any>();
  console.log(this.productAndQuantity);
  
  this.productAndQuantity.push(branchcomplain);
   branchcomplain.pmap.forEach(
     (value:DamageStockBranchComplainQuantity,key:ProductPriceMapping)=>{
       this.productAndQuantity.push(key);
       this.productAndQuantity.push(value);
     }
   );
  return this.http.post<DamageStockBranchComplain>(this.url+'/'+'stockbm/branchcomplain',this.productAndQuantity,headerOption);
  //return this.http.post(this.url+'/stockBm',null,headerOption);
 }

 public getallproductpricemapping()
 {
   console.log('in getallproductpricemapping');
   console.log(this.url+'/'+'stockbm/getproduct',headerOption)
   return this.http.get(this.url+'/'+'stockbm/getproduct',headerOption).subscribe(
     (data:ProductPriceMapping[])=>{
       this.listofproduct=data;
       console.log('in this method');
       console.table(this.listofproduct);
     },
     
     (error)=>{
       console.log('error occured',error);
     },
     ()=>{
       console.log('get all category completed');
     }
   );
 }

 public getcurrentstock(productNm:string):Observable<number>
 {
    return this.http.get<number>(this.url+'/'+'stockbm/getbranchCurrentStrock'+'/'+productNm);
 }

 
}
