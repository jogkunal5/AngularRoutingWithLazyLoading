import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { NoPageComponent } from './no-page/no-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'index', component: IndexComponent },
  { path: '**', component: NoPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
