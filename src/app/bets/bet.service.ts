import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Game} from '../_models/Game';
import {Bet} from '../_models/Bet';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BetService {
  private baseUrl = 'http://127.0.0.1:8000/bets/';


  constructor(private http: HttpClient) { }

  getBets(token: string): Observable<Bet[]> {
    const url = this.baseUrl;
    const httpOptions2 = {
      headers: new HttpHeaders({
        Authorization: 'Token ' + '1ddcb5d81f64d154c5241600a37b9a3b46bcdf7d'
      })
    };
    const bets = this.http.get <Bet[]>(url, httpOptions2);
    console.log(bets);
    return bets;
  }

  getGame(gameid: string): Observable<Game> {
    const url = this.baseUrl + '/game/' + gameid;
    return this.http.get <Game> (url);
  }
}
