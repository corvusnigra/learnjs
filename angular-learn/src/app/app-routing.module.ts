import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Form1Component} from "./views/form-1/form-1.component";


const routes: Routes = [
    {path: '', redirectTo: '/', pathMatch: 'full'},
    {path: 'form-1', component: Form1Component}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
