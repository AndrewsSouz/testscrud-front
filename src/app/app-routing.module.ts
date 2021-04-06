import { HomeComponent } from './modules/home-module/components/home/home.component';
import { UserComponent } from './modules/user-module/components/user/user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path:'home',component:HomeComponent},
  {path:'users',component:UserComponent},
  { path: '',   redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
