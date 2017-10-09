import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Form1Component} from "./views/form-1/form-1.component";
import {SignupComponent} from "./views/signup/signup.component";
import {RoutingComponent} from "./views/routing/routing.component";
import {UsersComponent} from "./views/routing/users/users.component";
import {ServersComponent} from "./views/routing/servers/servers.component";
import {UserComponent} from "./views/routing/user/user.component";
import {PageNotFoundComponent} from "./views/page-not-found/page-not-found.component";


const routes: Routes = [
    {path: '', redirectTo: '/', pathMatch: 'full'},
    {path: 'form-1', component: Form1Component},
    {path: 'signup', component: SignupComponent},
    {path: 'routing', component: RoutingComponent, children: [
        {path: 'users', component: UsersComponent},
        {path: 'users/:id/:name', component: UserComponent},
        {path: 'servers', component: ServersComponent}
    ]},
    {path: 'page-not-found', component: PageNotFoundComponent},
    {path: '**', redirectTo: 'page-not-found'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
