import {Injectable} from '@angular/core';
import {Game} from '../_models/Game';
import {Observable} from 'rxjs/internal/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root',
})

export class GamesService {
  private baseUrl = environment.url.gamesAPI;
  token = null;

  constructor(private http: HttpClient) {
  }

  getGames(country?: string, from?: string, to?: string): Observable<Game[]> {
    let countryId;
    let leagueId;
    if (country === 'Brazil') {
      countryId = '19';
      leagueId = '68';
    } else if (country === 'England') {
      countryId = '41';
      leagueId = '148';
    } else {
      countryId = '115';
      leagueId = '391';
    }
    if (from === null) {
      from = new Date().getDate().toString();
    }
    if (to === null) {
      to = new Date().getDate().toString();
    }
    const url = this.baseUrl + '&country_id=' + countryId + '&league_id=' + leagueId + '&from=' + from + '&to=' + to ;
    return this.http.get<Game[]>(url);
  }

  getGame(gameid): Observable<any> {
    const url = 'http://127.0.0.1:8000/games/'
    // var header = {
    //   headers: new HttpHeaders()
    //     .set('Authorization', this.token)
    // }
    return this.http.get(url, gameid);
  }
}


