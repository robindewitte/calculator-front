import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Restdata } from './helper/restdata';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    Restdata
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
