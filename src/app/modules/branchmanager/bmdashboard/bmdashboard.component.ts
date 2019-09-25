import { Component, OnInit } from '@angular/core';


import { MatTableDataSource } from '@angular/material';

import { BranchmanagerService } from '../../../Shared/branchmanager.service';
import { BranchProductStock } from 'src/app/model/BranchProductStock.interface';
import { BranchProductTarget } from 'src/app/model/BranchProductTarget.interface';
import { ProductPriceMapping } from 'src/app/model/ProductPriceMapping.interface';
import { ProductInformation } from 'src/app/model/ProductInformation.interface';
import { BranchProductStockWiseQuantity } from 'src/app/model/BranchProductStockWiseQuantity.interface';
import { BranchProductTargetQuantity } from 'src/app/model/BranchProductTargetQuantity.interface';

@Component({
  selector: 'app-bmdashboard',
  templateUrl: './bmdashboard.component.html',
  styleUrls: ['./bmdashboard.component.scss']
})
export class BmdashboardComponent implements OnInit {

  listAllBranchProductStock : BranchProductStock[] = [];
  listAllBranchProductTarget: BranchProductTarget[] = [];

  displayBranchColumns: string[] = ['productCode', 'productName','productStock'];
  dataSource = new MatTableDataSource<BranchProductStock>(this.listAllBranchProductStock);

  displayBranchPTColumns: string[] = ['productName'];
  dataSource1 = new MatTableDataSource<BranchProductTarget>(this.listAllBranchProductTarget);

  constructor(private bmservice: BranchmanagerService) { }

  ngOnInit() {
    this.getBranchProductStock();
    this.getBranchProductTarget();
  }

  localBPS :BranchProductStock=
  {
    purchaseOrderRequestId:null,
    branchInformation:null,
    pmap:null,
    date:''
}
productpricemapping:ProductPriceMapping=
{
    pricemappingid: null,
    buyingPrice: null,
    sellingPrice: null,
    tax: null,
    productInformation: null,
    venderInformation: null
}
productinfo :ProductInformation =
{
    productCode: '',
    productName: '',
    hsnCode: '',
    productDescription: '',
    productCategory:null

}

branchproductstockwisequan: BranchProductStockWiseQuantity =
 {
  qid: null,
  branchTotalStockQuantity: null,
  damageStockQuantity: null,
  receivingStockQuantity: null
  
}

localBPT :BranchProductTarget=
{
  productTargetId:null,	
  targetDate:'',
  pmap: null,
  branchInformation: null
}

// Map<ProductPriceMapping,BranchProductStockWiseQuantity>
pmapp:Map<ProductPriceMapping,BranchProductStockWiseQuantity>;

  pmap = new Map<ProductPriceMapping,BranchProductStockWiseQuantity>();

  getBranchProductStock() {
    this.bmservice.getAllBranchProductStockSer().subscribe
    (
      (data: BranchProductStock[]) => {

        console.log('in ts')
        console.table(data);
        this.listAllBranchProductStock = data;
        console.table(this.listAllBranchProductStock);
        console.log("listallbranch" + JSON.stringify(this.listAllBranchProductStock));
        this.listAllBranchProductStock.forEach(element => {
          var brr = this.localBPS;
          brr.purchaseOrderRequestId = element.purchaseOrderRequestId;

          console.log(element.pmap);
          this.pmapp = element.pmap;
          console.log(this.pmapp);

          this.pmapp = element.pmap;
          var json_data = this.pmapp;
          var result = [];
          for (var i in json_data) {
            console.log('1111' + i);

            result.push([i, json_data[i]]);

            this.pmapp = new Map<ProductPriceMapping, BranchProductStockWiseQuantity>();
            console.log('1111' + result.length);
            for (let index = 0; index < result.length; index++) {
              console.log('1111');
              console.log(result[index][0]);
              console.log(result[index][1]);

              this.bmservice.getByidProductPriceMappingObse(result[index][0]).subscribe(
                (data: ProductPriceMapping) => {
                  console.log(data);
                  element.pmap = new Map().set(data, result[index][1]);
                  // console.log("sdfasdfvasdvadsvasdvadsadsvsadvadsvasddsfs");
                  console.log(this.pmap);
                }
              );
            }
          }

        });
        this.dataSource = new MatTableDataSource<BranchProductStock>(this.listAllBranchProductStock);
      }
    );
  }

  // getProductInfo() {
  //   this.bmservice.getAllProductInfoSer().subscribe
  //     (
  //       (data: any[]) => {
  //         this.listAllProductInfo = data;
  //         console.log(this.listAllProductInfo);
         
  //       }
  //     );
  // }

  ptmapp:Map<ProductPriceMapping,BranchProductTargetQuantity>;

  ptmap = new Map<ProductPriceMapping,BranchProductTargetQuantity>();

  getBranchProductTarget(){
    this.bmservice.getAllBranchProductTargetSer().subscribe
    (
      (data: BranchProductTarget[]) => {

        console.log('in ts')
        console.table(data);
        this.listAllBranchProductTarget = data;
        console.table(this.listAllBranchProductTarget);
        console.log("listallbranch" + JSON.stringify(this.listAllBranchProductTarget));
        this.listAllBranchProductTarget.forEach(element => {
          var brr = this.localBPT;
          brr.productTargetId = element.productTargetId;

          console.log(element.pmap);
          this.ptmapp = element.pmap;
          console.log(this.ptmapp);

          this.ptmapp = element.pmap;
          var json_data = this.ptmapp;
          var result = [];
          for (var i in json_data) {
            console.log('1111' + i);

            result.push([i, json_data[i]]);

            this.ptmapp = new Map<ProductPriceMapping, BranchProductTargetQuantity>();
            console.log('1111' + result.length);
            for (let index = 0; index < result.length; index++) {
              console.log('1111');
              console.log(result[index][0]);
              console.log(result[index][1]);

              this.bmservice.getByidProductPriceMappingObse(result[index][0]).subscribe(
                (data: ProductPriceMapping) => {
                  console.log(data);
                  element.pmap = new Map().set(data, result[index][1]);
                  // console.log("sdfasdfvasdvadsvasdvadsadsvsadvadsvasddsfs");
                  console.log(this.ptmap);
                }
              );
            }
          }

        });
        this.dataSource1 = new MatTableDataSource<BranchProductTarget>(this.listAllBranchProductTarget);
      }
    );
  }

}
