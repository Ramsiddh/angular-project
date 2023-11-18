import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyListComponent } from './mylist/mylist.component';
import { MySeriesComponent } from './myseries/myseries.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'mylist',component:MyListComponent},
  {path:'myseries',component:MySeriesComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }