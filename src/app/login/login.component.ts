import { Component, OnInit } from '@angular/core';

import { RouterModule, Routes, Router } from '@angular/router';

import { SharedService } from '../Shared/shared.service';
import { Login } from '../model/login.interface';
import { BranchInformation } from '../model/BranchInformation.interface';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //login: Login = {
    //loginId: null,
    //username: '',
    //password: '',
    //role : null
  //};
  //rolename: string;

  username=''
  password=''
  invalidlogin=false

  // branchInformation : BranchInformation = {
  //   branchCode: "b11",
  //   branchName : "pune",
  //   state:{stateId:1, stateCode:"MH", stateName:"maharashtra"},
  //   district:{districtId:1, districtName:"pune",
  //   state:{stateId:1, stateCode:"MH", stateName:"maharashtra"} },
  //   branchAddress:"pune",
  //   branchPincode:115246,
  //   branchContactNumber:7984563120,
  //   branchEmailId:"branch@gmail.com",
  //   branchStatus:"enable",
  //   branchType:"headoffice",
  //   openingDate: "3/1/19",
  //   // login:null,

  // }
  constructor(private router: Router,private sharedservice:SharedService) { }

  ngOnInit() {
  }


  checklogin(){

    (this.sharedservice.authenticate(this.username,this.password).subscribe(
      data=>{
        this.router.navigate([''])
        this.invalidlogin=false
      },
      error=>{this.invalidlogin=true}
      
    ))
  }





  loginAuthontication(login:Login){
    console.log(login);
    this.sharedservice.loginAuthentication(login.username,login.password).subscribe(
      (datalogin:Login)=>{
        if(datalogin!=null){
          console.log("hi");
          console.log(datalogin);
          if (datalogin.role.roleName === 'admin') {
            console.log(' in admin');
            sessionStorage.setItem('rolename','admin');
            this.router.navigateByUrl('/' + 'role' + '/' + 'admin' + '/dashboard');
          }
          if (datalogin.role.roleName === 'user') {
            console.log(' in user');
            this.sharedservice.getBranchObject(datalogin).subscribe(
              (data:BranchInformation)=>{
                sessionStorage.setItem('rolename','user');
                console.log(JSON.stringify(data));
                sessionStorage.setItem('branchInformation',JSON.stringify(data));
                console.log(sessionStorage.getItem('branchInformation'))
                this.router.navigateByUrl('/' + 'role' + '/' + 'branchmanager' + '/dashboard');
              }
            )
      
          }
        }      
      }
    )
  }
}
