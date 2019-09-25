import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BranchProductStock } from '../model/BranchProductStock.interface';
import { BranchProductTarget } from '../model/BranchProductTarget.interface';
import { ProductPriceMapping } from '../model/ProductPriceMapping.interface';


const headerOption= {
  headers: new HttpHeaders({"Content-Type" : "application/JSON"})
};

@Injectable({
  providedIn: 'root'
})
export class BranchmanagerService {

  constructor(private http : HttpClient) { }

  url= 'http://localhost:8082';

   getAllBranchProductStockSer() : Observable<BranchProductStock[]>
  {
    return this.http.get<BranchProductStock[]>(this.url+'/'+'getSalesService'+'/'+'salebm/getBranchProductStock', headerOption);
  }

  public getAllBranchProductTargetSer() : Observable<BranchProductTarget[]>
  {
    return this.http.get<BranchProductTarget[]>(this.url+'/'+'getSalesService'+'/'+'salebm/getBranchProductTarget', headerOption);
  }

  public getByidProductPriceMappingObse(pricemappingid: number): Observable<ProductPriceMapping>{
    return this.http.get<ProductPriceMapping>(this.url+'/'+'getProductService'+'/'+'productadmin/getByIdProductPriceMapp?pricemappingid='+pricemappingid, headerOption);
  }

  // public getAllProductInfoSer() : Observable<any[]>
  //  {
  //    return this.http.get<any[]>(this.url+'/'+'getSalesService'+'/'+'salebm/getallinvoiceproductstock', headerOption);
  //  }
   
}
