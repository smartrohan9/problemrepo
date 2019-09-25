import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { LoginComponent } from './login/login.component';
import { AdminLayoutModule } from './layouts/admin-layout/admin-layout.module';
import { AdminModule } from './modules/admin/admin.module';
import { BranchmanagerModule } from './modules/branchmanager/branchmanager.module';

const routes: Routes = [
 {
    path: '',
    component: LoginComponent
  },
  {
    path: 'role',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'admin',
        loadChildren: () => AdminModule
      },
      {
        path: 'branchmanager',
        loadChildren: () => BranchmanagerModule
      }
    
    ]
  }
  
  // { path: 'dashboard',      component: DashboardComponent },
  // { path: 'user-profile',   component: UserProfileComponent },
  // { path: 'table-list',     component: TableListComponent },
  // { path: 'typography',     component: TypographyComponent },
  // { path: 'icons',          component: IconsComponent },
  // { path: 'maps',           component: MapsComponent },
  // { path: 'notifications',  component: NotificationsComponent },
  // { path: 'upgrade',        component: UpgradeComponent },
  // { path: '',               redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
