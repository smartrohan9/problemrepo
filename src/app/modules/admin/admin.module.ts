import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatRippleModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatTooltipModule, MatListModule, MatToolbarModule, MatGridListModule, MatRadioModule, MatDatepickerModule, MatCheckboxModule, MatIconModule, MatNativeDateModule, MatTableModule, MatDialogModule } from '@angular/material';

import { VendermasterComponent } from './vendermaster/vendermaster.component';

import { VendorinformationdialogComponent } from './vendorinformationdialog/vendorinformationdialog.component';
import { VendorlistComponent } from './vendorlist/vendorlist.component';
import { VendorlistService } from '../../Shared/vendorlist.service';
import { BranchStockDamagedViewComponent } from './branch-stock-damaged-view/branch-stock-damaged-view.component';
import { BranchStockDamagedProductViewComponent } from './branch-stock-damaged-product-view/branch-stock-damaged-product-view.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
const adminrouting: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    {path: 'vendormaster', component: VendermasterComponent},
    {path: 'vendorlist', component: VendorlistComponent},
    { path: 'branchstockdamaged', component: BranchStockDamagedViewComponent },
    //{ path: 'customerstockdamaged', component: CustomerStockDamagedViewComponent },
]

@NgModule({
  imports: [  CommonModule,
    RouterModule.forChild(adminrouting),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatTooltipModule,
    MatToolbarModule,
    MatGridListModule,
    MatRadioModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatIconModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatTableModule,
    MatDialogModule

  ],
  declarations: [DashboardComponent,VendermasterComponent, VendorinformationdialogComponent, VendorlistComponent, BranchStockDamagedViewComponent, BranchStockDamagedProductViewComponent],
 
  exports: [
    VendorlistComponent,VendorinformationdialogComponent
  ],

  entryComponents: [VendorinformationdialogComponent,BranchStockDamagedProductViewComponent],
  providers: [VendorlistService]
})
export class AdminModule { }
