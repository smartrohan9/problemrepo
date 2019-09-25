import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRippleModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatTooltipModule, MatButtonModule, MatTableDataSource, MatPaginatorModule, MatTableModule, MatSortModule, MatCheckboxModule, MatToolbarModule, MatGridListModule, MatRadioModule, MatDatepickerModule, MatIconModule, MatNativeDateModule, MatCardModule } from '@angular/material';

import { BmdashboardComponent } from './bmdashboard/bmdashboard.component';
import { BranchStockDamagedComponent } from './branch-stock-damaged/branch-stock-damaged.component';
import { CustomerstockdamageComponent } from './customerstockdamage/customerstockdamage.component';
import { CustomerstockdamageService } from '../../Shared/customerstockdamage.service';
import { ProductService } from '../../Shared/product.service';


const branchrouting: Routes = [
  { path: 'dashboard', component: BmdashboardComponent },
  { path: 'branchstockdamaged', component: BranchStockDamagedComponent },
  { path: 'customerstockdamaged', component: CustomerstockdamageComponent }
 
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(branchrouting),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    MatCardModule,
    MatToolbarModule,
    MatGridListModule,
    MatRadioModule,
    MatDatepickerModule,
    MatIconModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  declarations: [BmdashboardComponent, BranchStockDamagedComponent, CustomerstockdamageComponent],
  exports:[
    CustomerstockdamageComponent,
    ReactiveFormsModule,
    FormsModule
  ],
  providers:[CustomerstockdamageService, ProductService]
})
export class BranchmanagerModule { }
