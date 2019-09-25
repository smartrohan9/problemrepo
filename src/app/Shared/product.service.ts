import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { ProductPriceMapping } from '../model/ProductPriceMapping.interface';

const headerOption={
  headers: new HttpHeaders({"Conetent-Type":"application/json"})
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  serviceProductPriceMapping: ProductPriceMapping;
  constructor(private http: HttpClient) { }

  url = 'http://localhost:8082/getProductService';

  public getByidProductPriceMappingObse(pricemappingid: number): Observable<ProductPriceMapping>{
    return this.http.get<ProductPriceMapping>(this.url+'/'+'productadmin'+'/'+'getByIdProductPriceMapp'+'/'+pricemappingid, headerOption);
  }
}
