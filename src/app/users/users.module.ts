import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UsersComponent } from './users.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [UsersComponent]
})
export class UsersModule { }
