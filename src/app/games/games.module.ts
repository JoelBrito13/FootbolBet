import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GamesComponent } from './games.component';

@NgModule({
  declarations: [
    GamesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [GamesComponent]
})
export class GamesModule { }
