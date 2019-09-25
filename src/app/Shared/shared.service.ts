import { Injectable } from '@angular/core';

import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../model/login.interface';
import { BranchInformation } from '../model/BranchInformation.interface';
import { map } from 'rxjs/operators';

export class User{
  constructor(
    public status:string,
  ){}
}

const headerOption={
  headers: new HttpHeaders({"Conetent-Type":"application/json"})
};

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http :HttpClient) { }

  url='http://localhost:8082/getMasterService/masteradmin';
  url1='http://localhost:8082/api/getAdminService/Admincontroller/here';
  
  public loginAuthentication(username:string,password:string): Observable<Login>{
    return this.http.post<Login>
    (this.url+'/userAuthentication?username='+username+'&password='+password, headerOption);
  }
  
  public getBranchObject(login:Login): Observable<BranchInformation>{
    return this.http.post<BranchInformation>
    (this.url+'/findBranchByLogin',login, headerOption);
  }

  public  authenticate(username,password){
    const headers=new HttpHeaders({Authorization:'Basic' +btoa(username+':'+password)});
    return this.http.get<User>('http://localhost:8082/api/getUserService/homecontroller/here',{headers})
    .pipe(map(userdata =>{
      sessionStorage.setItem('username',username);
    }))    
  }
}