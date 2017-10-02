import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MaterializeModule} from 'ng2-materialize';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import { Form1Component } from './views/form-1/form-1.component';

@NgModule({
    declarations: [
        AppComponent,
        Form1Component
    ],
    imports: [
        BrowserModule,
        MaterializeModule,
         AppRoutingModule,
        BrowserAnimationsModule,
        MaterializeModule.forRoot(),
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
