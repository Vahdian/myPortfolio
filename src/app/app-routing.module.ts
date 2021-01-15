import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', loadChildren: ()=>
  import('./pages/home-page/home-page.module').then(m => m.HomePageModule)},
  {path:'portfolio', loadChildren: ()=>
  import('./pages/portfolio-page/portfolio-page.module').then(m => m.PortfolioPageModule)},
  {path:'about-me', loadChildren: ()=>
  import('./pages/about-me-page/about-me-page.module').then(m => m.AboutMePageModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
