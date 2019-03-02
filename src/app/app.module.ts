import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonTitledComponent } from './elements/ButtonTitled/ButtonTitled';
import { PerfomanceComponent } from './perfomance/perfomance.component';
import { NgProgressModule } from 'ngx-progressbar';


@NgModule({
  declarations: [
    AppComponent,
    ButtonTitledComponent,
    PerfomanceComponent
  ],
  imports: [
    BrowserModule,
    NgProgressModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [ButtonTitledComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
