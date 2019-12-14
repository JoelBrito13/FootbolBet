import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BetsComponent } from './bets.component';

@NgModule({
  declarations: [
    BetsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [BetsComponent]
})
export class BetsModule { }
