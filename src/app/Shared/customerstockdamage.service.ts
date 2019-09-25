import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Invoice } from '../model/Invoice.interface';

const headerOption ={
  headers : new HttpHeaders({ 'Content-Type' : 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class CustomerstockdamageService {

  constructor(private http : HttpClient) { }

  url:string = 'http://localhost:8082/getStockService';

  // customerstock : DamageStockComplain={
  //   complainNo: '',
  //   invoice: null,
	//   pmap:null,
	//   complainType: '',
	//   complainDate: '',
  //   remarks: ''	
  // }
  // productpricemapping : ProductPriceMapping={
  //                                 pricemappingid:null,
	//                                 buyingPrice:null,
	//                                 sellingPrice:null,
	//                                 tax: null,
  //                         productInformation:{
  //                                             productCode: '',
  //                                             productName: '',
  //                                             hsnCode: '',
  //                                             productDescription: '',
  //                                             productCategory: null,
  //                                           },
	//                         venderInformation: null
  // }
  // damagestockcomplainproductwisequantity: DamageStockComplainProductWiseQuantity={
  //   qid: null,complainProductwiseQuantity: null
  // }

  getInvoiceInfo(invoiceno:string):Observable<Invoice>{
    console.log(invoiceno);
    return this.http.get<Invoice>(this.url +'/'+'stockbm'+'/'+'getInvoiceNo'+'/'+invoiceno,headerOption);   
  }
  
  customerDamagedStock(customerstock:any[]){
    console.log(customerstock);
    return this.http.post(this.url+'/'+'stockbm'+'/'+'getdamagestockData/',customerstock,headerOption);
  }
  
}
