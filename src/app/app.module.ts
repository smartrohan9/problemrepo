import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';

 
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { LoginComponent } from './login/login.component';
import { SharedService } from './Shared/shared.service';
import { BranchmanagerModule } from './modules/branchmanager/branchmanager.module';
import { AdminModule } from './modules/admin/admin.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [
    BrowserAnimationsModule,
    BranchmanagerModule,
    AdminModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    
 
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
