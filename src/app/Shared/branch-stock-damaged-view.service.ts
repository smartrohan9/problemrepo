import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ProductPriceMapping } from '../model/ProductPriceMapping.interface';
import { DamageStockBranchComplain } from '../model/DamageStockBranchComplain.interface';


// allBranchStockDamageData : DamageStockBranchComplain ;
const headerOption= {
  headers: new HttpHeaders({"Content-Type" : "application/JSON"})
};

@Injectable({
  providedIn: 'root'
})
export class BranchStockDamagedViewService {

  serviceProductPriceMapping: ProductPriceMapping;
  
  constructor(private http : HttpClient) { }

  url= 'http://localhost:8082';

 public getAllBranchStockDamaged() : Observable<DamageStockBranchComplain[]>
  {
    return this.http.get<DamageStockBranchComplain[]>(this.url+'/'+'getStockService'+'/'+'stockadmin/adminGetAllDamageStockBranchData', headerOption);
  }

  public getByidProductPriceMappingObse(pricemappingid: number): Observable<ProductPriceMapping>{
    return this.http.get<ProductPriceMapping>(this.url+'/'+'getProductService'+'/'+'productadmin/getByIdProductPriceMapp?pricemappingid='+pricemappingid, headerOption);
  }
}