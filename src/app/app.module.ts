import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { UserComponent } from './modules/user-module/components/user/user.component';
import { NavbarComponent } from './modules/navbar-module/components/navbar/navbar.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { HomeComponent } from './modules/home-module/components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavbarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
