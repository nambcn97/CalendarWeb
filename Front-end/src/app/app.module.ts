import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md'
import { AppComponent } from './app.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CalendarModule } from 'angular-calendar';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SampleComponent } from './components/sample/sample.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    NavbarComponent,
    SampleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CalendarModule.forRoot(),
    MDBBootstrapModule.forRoot()
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
