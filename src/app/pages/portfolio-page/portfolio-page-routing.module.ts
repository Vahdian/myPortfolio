import { PortfolioPageComponent } from './portfolio-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebDevPageComponent } from './pages/web-dev-page/web-dev-page.component';

const routes: Routes = [
  {path:'', component: WebDevPageComponent},
  {path:'other', component: PortfolioPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioPageRoutingModule { }
