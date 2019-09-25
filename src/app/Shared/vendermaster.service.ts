import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { VenderInformation } from '../model/VenderInformation.interface';
const headeroption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}
@Injectable({
  providedIn: 'root'
})
export class VendermasterService {
  constructor(private http:HttpClient) { }

  url:string='http://localhost:8082/getMasterService';
        
  allvenderinfo: VenderInformation = { vendorId:'', vendorName: '', state: '',district:'',vendorAddress:'',vendorContactNumber:null,vendorEmail:'',vendorStatus:'',vendorPincode:null};
  // statename : State ={stateId:null,stateCode: '',stateName:''}
  // districtinfo: District={districtId: null, districtName: '',state:{stateId:null,stateCode: '',stateName:''}}
 
  savedata(allvenderinfo: VenderInformation ) {

    console.log('in service method');
    console.log(allvenderinfo);
    return this.http.post(this.url+'/'+'masteradmin'+'/'+'save',allvenderinfo, headeroption);

    
  }
//   getStateName() :Observable<State[]>{
//     return this.http.get<State[]>(this.url +'/'+'masteradmin'+'/'+'getStateInfo',headeroption);
      
// }

// getStateById(stateid:number) :Observable<District[]>{
//   return this.http.get<District[]>(this.url +'/'+'masteradmin'+'/'+'getDistrictInfo/'+ stateid,headeroption);
     
// }

  }
