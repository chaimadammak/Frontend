import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontOfficeComponent } from './front-office.component';
import { FrontOfficeRoutingModule } from './front-office-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NavbarComponentComponent } from './components/navbar-component/navbar-component.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { NavbarMenuComponent } from './components/navbar-component/navbar-menu/navbar-menu.component';
import { NavbarSubmenuComponent } from './components/navbar-component/navbar-submenu/navbar-submenu.component';



@NgModule({
  declarations: [FrontOfficeComponent, NavbarComponentComponent, NavbarMenuComponent, NavbarSubmenuComponent, FooterComponentComponent],
  imports: [
    CommonModule,
    FrontOfficeRoutingModule,
    HttpClientModule,
    NgApexchartsModule,
    AngularSvgIconModule.forRoot(),
  ]
})
export class FrontOfficeModule { }
