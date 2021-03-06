import { Component, OnInit } from '@angular/core';
import { Bet } from '../_models/Bet';
import { BetService } from './bet.service';
import {LoginService} from '../login.service';
import { User } from '../_models/User';
import {Game} from '../_models/Game';

@Component({
  selector: 'app-root',
  templateUrl: './bets.component.html',
  styleUrls: ['./bets.component.css']
})
export class BetsComponent implements OnInit {
  title = 'FootbolBet';
  bets: Bet[];
  token = null;
  game: Game;

  constructor(private betService: BetService, private loginService: LoginService) {}

  ngOnInit(): void {
    this.token = localStorage.getItem('token')
    console.log(this.token)
    this.getUser();
    this.getBets();
  }

  getBets(): void {
    if (this.token != null) {
      console.log(this.betService.getBets(this.token));
      this.betService.getBets(this.token).subscribe( bets => this.bets = bets);
    }
  }

  getUser(): void {
    this.loginService.getUser(this.token).subscribe(token => this.token = token);
  }

  getGame(gameid): void {
    this.betService.getGame(gameid).subscribe(game => this.game = game);
  }


}
