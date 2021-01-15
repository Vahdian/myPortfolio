import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioPageRoutingModule } from './portfolio-page-routing.module';
import { PortfolioPageComponent } from './portfolio-page.component';


@NgModule({
  declarations: [PortfolioPageComponent],
  imports: [
    CommonModule,
    PortfolioPageRoutingModule
  ]
})
export class PortfolioPageModule { }
