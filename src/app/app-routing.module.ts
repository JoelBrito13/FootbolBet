import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {BetsComponent} from './bets/bets.component';
import {GamesComponent} from './games/games.component';
import {UsersComponent} from './users/users.component';
import {PredictionsComponent} from './predictions/predictions.component';



const routes: Routes = [

  {path: '', component: DashboardComponent},
  {path: 'bets', component: BetsComponent},
  {path: 'games', component: GamesComponent},
  {path: 'users', component: UsersComponent},
  {path: 'predictions', component: PredictionsComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
