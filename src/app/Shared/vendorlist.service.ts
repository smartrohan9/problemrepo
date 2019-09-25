
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { VenderInformation } from '../model/VenderInformation.interface';
import { State } from '../model/State.interface';
import { District } from '../model/District.interface';


const headerOption ={
    headers : new HttpHeaders({ 'Content-Type' : 'application/json' })
  }
@Injectable()
export class VendorlistService {

    constructor(private http : HttpClient){}
    
    url:string = 'http://localhost:8082/getMasterService';

    vendorinfo : VenderInformation={vendorId:null,vendorName:'',vendorContactNumber:null,state:'',district:'',vendorAddress:'',vendorEmail:'',vendorStatus:'',vendorPincode:null}
    statename : State ={stateId:null,stateCode: '',stateName:''}
    districtinfo: District={districtId: null, districtName: '',state:{stateId:null,stateCode: '',stateName:''}}
    

    getAllVendornamelist() :Observable<VenderInformation[]>{
        return this.http.get<VenderInformation[]>(this.url +'/'+ 'masteradmin'+'/'+'getvendorlist',headerOption);   
    }

    getStateName() :Observable<State[]>{
        return this.http.get<State[]>(this.url +'/'+ 'masteradmin'+'/'+'getStateInfo',headerOption);   
    }

    getStateById(stateid:number) :Observable<District[]>{
        return this.http.get<District[]>(this.url +'/'+ 'masteradmin'+'/'+'getDistrictInfo/'+stateid ,headerOption);   
    }
    getVendorByDistrict(districtName:string):Observable<VenderInformation[]>{
        return this.http.get<VenderInformation[]>(this.url +'/'+ 'masteradmin'+'/'+'getVendorByDistrict/'+districtName ,headerOption);   
    }
    getPerticularVendor(vendorname:string):Observable<VenderInformation>{
        return this.http.get<VenderInformation>(this.url +'/'+ 'masteradmin'+'/'+'getSingleVendor/'+vendorname ,headerOption);   
    }
    onSerach(stateval:string, districtval:string, vendorval:string): Observable<VenderInformation[]>{
        console.log(stateval);
        return this.http.get<VenderInformation[]>(this.url +'/'+ 'masteradmin'+'/'+'searchlist'+'/'+stateval+'/'+districtval+'/'+vendorval+'/',headerOption);   
    } 

}
