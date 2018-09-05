import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from '../../components/admin/admin.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from '../../app.component';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from '../../components/admin/user/user.component';
import { EventComponent } from '../../components/admin/event/event.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SideBarComponent } from '../../components/admin/side-bar/side-bar.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@NgModule({
    imports: [
        CommonModule,
        MDBBootstrapModule.forRoot(),
        AdminRoutingModule
    ],
    declarations: [
        AdminComponent,
        UserComponent,
        EventComponent,
        SideBarComponent
    ],
    schemas: [NO_ERRORS_SCHEMA],
    bootstrap: [AdminComponent]
})
export class AdminModule { }
