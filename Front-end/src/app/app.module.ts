import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md'
import { AppComponent } from './app.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CalendarModule } from 'angular-calendar';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SampleComponent } from './components/sample/sample.component';
<<<<<<< HEAD

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    NavbarComponent,
    SampleComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,    
    CalendarModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
=======
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AdminModule } from './modules/admin/admin.module';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        CalendarComponent,
        SampleComponent,
        HomeComponent,
        NavbarComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        CalendarModule.forRoot(),
        MDBBootstrapModule.forRoot(),
        BrowserAnimationsModule,
        AppRoutingModule
    ],
    schemas: [NO_ERRORS_SCHEMA],
    providers: [],
    bootstrap: [AppComponent]
>>>>>>> admin
})
export class AppModule { }
