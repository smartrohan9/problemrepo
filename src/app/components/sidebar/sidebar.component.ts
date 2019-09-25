import { Component, OnInit, ViewChild } from '@angular/core';

import { MatMenuTrigger } from '@angular/material';
import { SharedService } from 'src/app/Shared/shared.service';
import { Menu } from 'src/app/Menu';


declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
  { path: '/user-profile', title: 'User Profile', icon: 'person', class: '' },
  { path: '/table-list', title: 'Table List', icon: 'content_paste', class: '' },
  { path: '/typography', title: 'Typography', icon: 'library_books', class: '' },
  { path: '/icons', title: 'Icons', icon: 'bubble_chart', class: '' },
  { path: '/maps', title: 'Maps', icon: 'location_on', class: '' },
  { path: '/notifications', title: 'Notifications', icon: 'notifications', class: '' },
  { path: '/upgrade', title: 'Upgrade to PRO', icon: 'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @ViewChild(MatMenuTrigger,{static: true}) trigger: MatMenuTrigger;
  menuItems: any[];
  rolename: string;
  constructor(private shardservice: SharedService) { }

  ngOnInit() {
    // this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.menuItems = Menu.getallmenus();
    console.log(this.menuItems);
 this.rolename = sessionStorage.getItem('rolename'); 
 console.log('sidebar'+this.rolename);
    //this.rolename = 'admin';
  }
  
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };
}
