
import { ContentChild } from '@angular/core';

export class Menu {
  public  static menu: Array<any> = [
        {
            admin: [

                { path: 'dashboard', title: 'Dashboard' },
              {
                title: 'Sales',
                submenu:
                [ {
                     path: 'sale', title: 'Sale'
                 },
                 {
                     path: 'salesdisplay', title: 'DisplaySalesData'
                 }
             ]

            },
            {
                title: 'Target',
                submenu:
                [ {
                     path: 'uploadtarget', title: 'UploadTarget'
                 },
                 {
                     path: 'uploadtargetview', title: 'UploadTargetView'
                 }
             ]

            },
            {
                title: 'Report',
                submenu:
                [ {
                     path: 'salereport', title: 'SaleReport'
                 },
                 {
                     path: 'purchaseorder', title: 'PurchaseReport'
                 }
             ]

            },
            {
                title: 'DamagedStock',
                submenu:
                [ {
                     path: 'branchstockdamaged', title: 'BranchStockDamaged'
                 },
                 {
                     path: 'customerstockdamaged', title: 'CustomerStockDamaged'
                 }
             ]

            },
            {
                title: 'Purchase Order',
                submenu:
                [ {
                     path: 'editreceivingorder', title: 'EditReceivingOrder'
                 },
                 {
                     path: 'branchtransfer', title: 'BranchTransfer'
                 },
                 {
                     path: 'branchorder', title: 'BranchOrder'
                 },
                 {
                     path: 'purchaseorder', title: 'PurchaseOrder'
                 }
             ]

            },

            {
                title: 'Master',
                submenu:
                [ {
                     path: 'branchlist', title: 'BranchList'
                 },
                 {
                     path: 'branchmaster', title: 'branchmaster'
                 },
                 {
                     path: 'vendorlist', title: 'vendorlist'
                 },
                 {
                    path: 'vendormaster', title: 'vendormaster'
                 },
               
                 {
                     path: 'productmaster', title: 'productmaster'
                 },
                 {
                    path: 'productmapping', title: 'productmapping'
                },
                {
                    path: 'productmappinglist', title: 'productmappinglist'
                }
             ]

            }
            ],
            branchmanager:
                [
             { path: 'dashboard', title: 'Dashboard' },
                {
                  title: 'Sales',
                  submenu:
                  [ {
                       path: 'sale', title: 'Sale'
                   },
                   {
                       path: 'salesdisplay', title: 'DisplaySalesData'
                   }
               ]
              },
              {
                title: 'Order',
                submenu:
                [ {
                     path: 'requestproduct', title: 'RequestProduct'
                 },
                 {
                     path: 'branchstockrecieve', title: 'BranchStockRecieve'
                 },
                 {
                     path: 'recievingproduct', title: 'RecievingProduct'
                 }

             ]
            },
            {
                title: 'Report',
                submenu:
                [ {
                     path: 'salereport', title: 'SaleReport'
                 }
             ]

            },
            {
                title: 'DamagedStock',
                submenu:
                [ {
                     path: 'branchstockdamaged', title: 'BranchStockDamaged'
                 },
                 {
                     path: 'customerstockdamaged', title: 'CustomerStockDamaged'
                 }
             ]

            },

           
                ]
        }
    ];
    public static getallmenus() {
        return this.menu;
    }
}
