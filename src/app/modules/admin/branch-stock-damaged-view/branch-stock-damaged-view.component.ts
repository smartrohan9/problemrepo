import { Component, OnInit } from '@angular/core';

import { MatTableDataSource, MatDialog } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';

// import { MatTableModule } from '@angular/material'
import { DataSource } from '@angular/cdk/table';
import { BranchStockDamagedProductViewComponent } from '../branch-stock-damaged-product-view/branch-stock-damaged-product-view.component';

import { BranchStockDamagedViewService } from '../../../Shared/branch-stock-damaged-view.service';
import { DamageStockBranchComplain } from 'src/app/model/DamageStockBranchComplain.interface';
import { ProductPriceMapping } from 'src/app/model/ProductPriceMapping.interface';
import { DamageStockBranchComplainQuantity } from 'src/app/model/DamageStockBranchComplainQuantity.interface';
// import 'rxjs/add/operator/map';


// const ELEMENT_DATA: DamageStockBranchComplain[] = [
//   { DamageStockBranchComplainid : 'c101', dateComplain : '22', branchName : 'pune',productName : 'fan', DamageStockBranchComplainQuantity : 2},
//   { DamageStockBranchComplainid : '102',dateComplain : '25',branchName : 'amt',productName : 'tv', DamageStockBranchComplainQuantity : 3}
//  ];

@Component({
  selector: 'app-branch-stock-damaged-view',
  templateUrl: './branch-stock-damaged-view.component.html',
  styleUrls: ['./branch-stock-damaged-view.component.scss']
})

export class BranchStockDamagedViewComponent implements OnInit {

  listallBranchStockDamageData: DamageStockBranchComplain[] = [];

  

  displayedbranchStockDamagedColumns: string[] = ['DamageStockBranchComplainid', 'dateComplain', 'branchName', 'productName', 'remarks'];
  // dataSource = ELEMENT_DATA;
  dataSource: MatTableDataSource<DamageStockBranchComplain>;
  // dialog: any;

  constructor(private CurrentBranchStockDamagedService: BranchStockDamagedViewService,
    public dialog: MatDialog, public branchstockdamagedviewservice: BranchStockDamagedViewService) { }

  ngOnInit() {
    this.getBranchStockDamaged();
  }

  getBranchStockDamaged() {
    this.CurrentBranchStockDamagedService.getAllBranchStockDamaged().subscribe
      (
        (data: DamageStockBranchComplain[]) => {
          console.table(data);
          this.listallBranchStockDamageData = data;
          console.table(this.listallBranchStockDamageData);
          this.dataSource = new MatTableDataSource<DamageStockBranchComplain>(this.listallBranchStockDamageData);
        }
      );
  }

  localDSBC: DamageStockBranchComplain = {
    damageStockBranchComplainid: '',
    dateComplain: '',
    branchInformation: null,
    pmap: null,
    remarks: ''
  }

  pmapp: Map<ProductPriceMapping, DamageStockBranchComplainQuantity>;

  pmap = new Map<ProductPriceMapping, DamageStockBranchComplainQuantity>();

  public openDialog(singleDamageStockBranchComplain: DamageStockBranchComplain) {
    console.log('in product dialog');
    console.log(singleDamageStockBranchComplain);

    this.pmapp = singleDamageStockBranchComplain.pmap;
    // var jsonmap=  JSON.stringify(singleDamageStockBranchComplain.mappd);
    // console.log(jsonmap);   
    // this.pmapp=JSON.parse(jsonmap);
    // console.log(this.pmapp);

    this.localDSBC.damageStockBranchComplainid = singleDamageStockBranchComplain.damageStockBranchComplainid;
    this.localDSBC.dateComplain = singleDamageStockBranchComplain.dateComplain;
    this.localDSBC.branchInformation = singleDamageStockBranchComplain.branchInformation;
    this.localDSBC.remarks = singleDamageStockBranchComplain.remarks;

    var json_data = this.pmapp;
    var result = [];
    for (var i in json_data)
      result.push([i, json_data[i]]);
    this.pmap = new Map<ProductPriceMapping, DamageStockBranchComplainQuantity>();
    for (let index = 0; index < result.length; index++) {
      console.log(result[index][0]);
      console.log(result[index][1]);
      this.branchstockdamagedviewservice.getByidProductPriceMappingObse(result[index][0]).subscribe(
        (data: ProductPriceMapping) => {
          console.log(data);
          this.pmap.set(data, result[index][1]);
        }
      );
    }

    setTimeout(() => {
      this.localDSBC.pmap = this.pmap;
      console.log(this.pmap);
      this.Dialogfil(this.localDSBC);
    }, 1000);

  }
  public Dialogfil(singleDamageStockBranchComplain: DamageStockBranchComplain) {
    console.log("new function");
    console.log(singleDamageStockBranchComplain);
    const dialogRef = this.dialog.open(BranchStockDamagedProductViewComponent, {
      width: '800px',
      height: '300px',
      data: singleDamageStockBranchComplain
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('the dialog was closed');
    })
  }

}



