import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';

import { BranchStockDamagedViewService } from '../../../Shared/branch-stock-damaged-view.service';
import { DamageStockBranchComplain } from 'src/app/model/DamageStockBranchComplain.interface';
import { ProductPriceMapping } from 'src/app/model/ProductPriceMapping.interface';
import { DamageStockBranchComplainQuantity } from 'src/app/model/DamageStockBranchComplainQuantity.interface';



@Component({
  selector: 'app-branch-stock-damaged-product-view',
  templateUrl: './branch-stock-damaged-product-view.component.html',
  styleUrls: ['./branch-stock-damaged-product-view.component.scss']
})
export class BranchStockDamagedProductViewComponent implements OnInit {


  constructor(public dialogRef : MatDialogRef<BranchStockDamagedProductViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DamageStockBranchComplain, public branchstockdamagedviewservice : BranchStockDamagedViewService) {
    console.log(data);   
     }

    //  displayedbranchStockDamagedColumns: string[] = ['productName','DamageStockBranchComplainQuantity'];
    // //  dataSource = ELEMENT_DATA;
    // dataSource : MatTableDataSource<DamageStockBranchComplain>;

  ngOnInit() {
    this.dataINLocalVer();
    console.log(this.localDamageStockBranch);
  }

  localDamageStockBranch : DamageStockBranchComplain={
    damageStockBranchComplainid : null,
    dateComplain : null,
    branchInformation : null,
    pmap : null,
    remarks : null
  }

  mappd= new Map<ProductPriceMapping, DamageStockBranchComplainQuantity>();

  dataINLocalVer(){
    this.mappd=this.data.pmap;
    this.localDamageStockBranch.damageStockBranchComplainid=this.data.damageStockBranchComplainid;
    this.localDamageStockBranch.dateComplain=this.data.dateComplain;
    this.localDamageStockBranch.branchInformation=this.data.branchInformation;
    this.localDamageStockBranch.remarks=this.data.remarks;

    console.log(this.mappd)
    
  }

}
// 'DamageStockBranchComplainQuantity','remarks','action'
