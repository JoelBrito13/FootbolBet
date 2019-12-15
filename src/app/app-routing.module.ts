import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {BetsComponent} from './bets/bets.component';
import {GamesComponent} from './games/games.component';
import {UsersComponent} from './users/users.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [

  {path: '', component: DashboardComponent},
  {path: 'bets', component: BetsComponent},
  {path: 'games', component: GamesComponent},
  {path: 'users', component: UsersComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
