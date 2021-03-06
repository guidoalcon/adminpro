import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

//import { DashboardComponent } from './pages/dashboard/dashboard.component';
//import { ProgressComponent } from './pages/progress/progress.component';
//import { Graficas1Component } from './pages/graficas1/graficas1.component';
//import { HeaderComponent } from './shared/header/header.component';
//import { SidebarComponent } from './shared/sidebar/sidebar.component';
//import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
//import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
//import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';

//modulos

import { PagesModule } from './pages/pages.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceModule } from './services/service.module';
import { PagesComponent } from './pages/pages.component';
import { SharedModule } from './shared/shared.module';

//import { ImagenPipe } from './pipes/imagen.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    //NopagefoundComponent,
    //DashboardComponent,
    //ProgressComponent,
    //Graficas1Component,
    //HeaderComponent,
    //SidebarComponent,
    //BreadcrumbsComponent,
    //PagesComponent,
    RegisterComponent,
    PagesComponent
    //ImagenPipe
  ],
  imports: [
    SharedModule,

    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    //PagesModule,
    ServiceModule,
    AppRoutingModule //siempre al final
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
