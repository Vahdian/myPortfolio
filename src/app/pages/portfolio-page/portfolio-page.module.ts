import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioPageRoutingModule } from './portfolio-page-routing.module';
import { PortfolioPageComponent } from './portfolio-page.component';
import { WebDevPageComponent } from './pages/web-dev-page/web-dev-page.component';


@NgModule({
  declarations: [PortfolioPageComponent, WebDevPageComponent],
  imports: [
    CommonModule,
    PortfolioPageRoutingModule
  ]
})
export class PortfolioPageModule { }
