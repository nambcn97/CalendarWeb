import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../components/home/home.component';
import { AdminComponent } from '../../components/admin/admin.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'admin',
        loadChildren: '../admin/admin.module#AdminModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
