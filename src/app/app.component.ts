import { Component } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { NgModule, Injector } from '@angular/core';
import { ButtonTitledComponent } from './elements/ButtonTitled/ButtonTitled';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {


  ngDoBootstrap() {
  }
}
