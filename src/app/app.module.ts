import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './modules/app-routing.module'
import { AppLayoutModel } from './models/app-layout.model'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    Title,
    AppLayoutModel,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
