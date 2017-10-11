import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MaterializeModule} from 'ng2-materialize';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { Form1Component } from './views/form-1/form-1.component';
import { SigninComponent } from './views/signin/signin.component';
import { SignupComponent } from './views/signup/signup.component';
import { RoutingComponent } from './views/routing/routing.component';
import { UsersComponent } from './views/routing/users/users.component';
import { ServersComponent } from './views/routing/servers/servers.component';
import { UserComponent } from './views/routing/user/user.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import {AuthGuard} from "./auth-guard.service";
import {AuthService} from "./auth.service";

@NgModule({
    declarations: [
        AppComponent,
        Form1Component,
        SigninComponent,
        SignupComponent,
        RoutingComponent,
        UsersComponent,
        ServersComponent,
        UserComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        MaterializeModule,
         AppRoutingModule,
        BrowserAnimationsModule,
        MaterializeModule.forRoot(),
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [AuthGuard, AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
