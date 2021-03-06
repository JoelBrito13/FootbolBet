import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BetsComponent } from './bets/bets.component';
import { GamesComponent} from './games/games.component';
import { UsersComponent } from './users/users.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { PredictionsComponent } from './predictions/predictions.component';

import { CommonModule } from '@angular/common';

import {
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatExpansionModule,
  MatGridListModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatInputModule,
  MatNativeDateModule, MatProgressBarModule
} from '@angular/material';
import {MatDialogModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AboutComponent } from './about/about.component';




@NgModule({
  declarations: [
    AppComponent,
    BetsComponent,
    GamesComponent,
    UsersComponent,
    DashboardComponent,
    PredictionsComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressBarModule,
    NgbModule,
    MatPaginatorModule,
    ReactiveFormsModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
