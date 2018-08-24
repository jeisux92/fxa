import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { FnaComponent } from './fna.component';

import { FnRoutingModule } from './fna-routing.module';

@NgModule({
  declarations: [
    FnaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FnRoutingModule
  ],
  providers: [],
  bootstrap: [FnaComponent]
})
export class FnaModule { }
