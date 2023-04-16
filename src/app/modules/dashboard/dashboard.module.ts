import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { NftComponent } from './pages/nft/nft.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NftChartCardComponent } from './components/nft/nft-chart-card/nft-chart-card.component';
import { NftAuctionsTableComponent } from './components/nft/nft-auctions-table/nft-auctions-table.component';
import { NftAuctionsTableItemComponent } from './components/nft/nft-auctions-table-item/nft-auctions-table-item.component';

@NgModule({
  declarations: [
    DashboardComponent,
    NftComponent,
    NftAuctionsTableComponent,
    NftChartCardComponent,
    NftAuctionsTableItemComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    HttpClientModule,
    NgApexchartsModule,
    AngularSvgIconModule.forRoot(),
  ],
})
export class DashboardModule {}
