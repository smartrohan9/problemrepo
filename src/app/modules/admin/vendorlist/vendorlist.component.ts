import { District } from './../../../model/District.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { State } from './../../../model/State.interface';
import { VendorinformationdialogComponent } from './../vendorinformationdialog/vendorinformationdialog.component';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { VendorlistService } from '../../../Shared/vendorlist.service';
import { VenderInformation } from '../../../model/VenderInformation.interface';


@Component({
  selector: 'app-vendorlist',
  templateUrl: './vendorlist.component.html',
  styleUrls: ['./vendorlist.component.scss']
})

export class VendorlistComponent implements OnInit {

  vendorId: string;
	vendorName: string;
	state: string;
	district: string;
  vendorAddress: string;
	vendorContactNumber: number;
	vendorEmail: string;
	vendorStatus: string;
  vendorPincode: number;
  
  constructor(public dialog: MatDialog, public vendorservice:VendorlistService) {}
  
  allVandorinfo : VenderInformation[];
  allStateName : State[];
  allDistrictName : District[];
  vendorNameByDistrict :VenderInformation[];
  singleVendor :VenderInformation;
  selectedoption : VenderInformation[];
  stateval : string;
  
  districtval:string;
  vendorval: string;
  vendordata:VenderInformation[];

  ngOnInit() {
    this.getAllVendorname();
    this.getAllStateName();
    this.dataSource = new MatTableDataSource(this.allVandorinfo);
    
  }
  
  getAllVendorname(){
    this.vendorservice.getAllVendornamelist().subscribe(
      (data:VenderInformation[])=>{
        console.log(data);
        this.allVandorinfo=data;
        console.log(this.allVandorinfo);
        this.dataSource = new MatTableDataSource(this.allVandorinfo);
      }
    )
  }

  getAllStateName(){
    this.vendorservice.getStateName().subscribe(
      (data:State[])=>{
        console.log(data);
        this.allStateName=data;
        console.log(this.allStateName);
      }
    )
  }

  getStateById(state: State)
  {
    //this.allDistrictName=null;
    this.stateval = state.stateName;
    //console.log(this.stateval);
    this.vendorservice.getStateById(state.stateId).subscribe(
      (data:District[])=>{
        console.log("district get"); 
        console.log(data);
        this.allDistrictName=data;
        console.log(this.allDistrictName);
      }
    )
  }
    
  getVendorByDistrict(district: District)
  {
    this.districtval = district.districtName;
    console.log(this.districtval);
    this.vendorservice.getVendorByDistrict(district.districtName).subscribe(
      (data:VenderInformation[])=>{
        console.log("district get"); 
        console.log(data);
        this.vendorNameByDistrict=data;
        console.log(this.vendorNameByDistrict);
      }
    )
  }
    
  getPerticularVendor(vendor:VenderInformation)
  {
    this.vendorval = vendor.vendorName;
    console.log(this.vendorval);
    this.vendorservice.getPerticularVendor(vendor.vendorName).subscribe(
      (data:VenderInformation)=>{
        console.log("single vendor get"); 
        console.log(data);
        this.singleVendor=data;
        console.log(this.singleVendor);
      }
    )
  }

  onSerach()
  {
    console.log(this.stateval);
    console.log(this.districtval);
    
    this.vendorservice.onSerach(this.stateval,this.districtval,this.vendorval).subscribe(
      (data:VenderInformation[])=>{
        
        console.log(data);
        this.vendordata=data;
        console.log(this.vendordata);
        this.dataSource = new MatTableDataSource(this.vendordata);
      }
    )
  }

  displayedVendorColumns: string[] = ['vendorId', 'vendorName','details'];
  dataSource = new MatTableDataSource(this.allVandorinfo);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(singleVendor: VenderInformation){
    console.log('in opend'); 
    const dialogRef = this.dialog.open(VendorinformationdialogComponent, {
      width: '800px',
      height:'300px',
      data:singleVendor
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  
}

