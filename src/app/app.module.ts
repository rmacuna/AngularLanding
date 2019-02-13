import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ButtonTitledComponent } from './elements/ButtonTitled/ButtonTitled';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ButtonTitledComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [ButtonTitledComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
