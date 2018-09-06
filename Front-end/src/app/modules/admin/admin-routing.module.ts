import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../../components/admin/admin.component';
import { UserComponent } from '../../components/admin/user/user.component';
import { EventComponent } from '../../components/admin/event/event.component';

const adminRoutes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            { path: '', redirectTo: 'events', pathMatch: 'full' },
            { path: 'users', component: UserComponent },
            { path: 'events', component: EventComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
