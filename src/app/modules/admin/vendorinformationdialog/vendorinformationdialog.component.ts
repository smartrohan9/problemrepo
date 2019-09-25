
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';
import { VenderInformation } from '../../../model/VenderInformation.interface';

@Component({
  selector: 'app-vendorinformationdialog',
  templateUrl: './vendorinformationdialog.component.html',
  styleUrls: ['./vendorinformationdialog.component.scss']
})
export class VendorinformationdialogComponent  {

  vendorinfo: VenderInformation[]=[];

  constructor(public dialogRef: MatDialogRef<VendorinformationdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: VenderInformation) { 
      this.vendorinfo.push(data);
  }
  ngOnInit() {
    console.log(this.vendorinfo);
    this.dataSource = new MatTableDataSource<VenderInformation>(this.vendorinfo);
  }
  
  displayedColumns: string[] = ['vendorId','vendorName','state','district','vendorAddress','vendorContactNumber','vendorEmail','vendorStatus','vendorPincode'];
  //dataSource = new MatTableDataSource(ELEMENT_DATA);

  dataSource : MatTableDataSource<VenderInformation>;
}
