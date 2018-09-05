import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule  } from "@angular/router";
import { Sample1Component  } from "./sample1/sample1.component";
import { Sample2Component } from "./sample2/sample2.component";

const routes :Routes =[
  {path:'sample1',component:Sample1Component},
  {path:'sample2',component:Sample2Component}
] ; 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
 
})
export class AppRoutingModule { }
