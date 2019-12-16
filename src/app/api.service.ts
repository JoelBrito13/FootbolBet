import { Injectable } from '@angular/core';

import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private GAMES_URL_ENG = 'https://apiv2.apifootball.com/?action=get_events&' +
    'from=2019-11-01&to=2019-12-15&' +
    'league_id=148&' +
    'APIkey=2460239a218e22dd4c13f692c3caedafd1ef37cfc2fcbe58e645065c1fefd9d3';

  private PRED_URL_ENG = 'https://apiv2.apifootball.com/?action=get_predictions&' +
                         'from=2019-12-16&to=2019-12-29' +
                         '&league_id=148' +
                         '&APIkey=2460239a218e22dd4c13f692c3caedafd1ef37cfc2fcbe58e645065c1fefd9d3';

  private GAMES_URL_BR = 'https://apiv2.apifootball.com/?action=get_events&' +
    'from=2019-11-01&to=2020-01-29&' +
    'league_id=68&' +
    'APIkey=2460239a218e22dd4c13f692c3caedafd1ef37cfc2fcbe58e645065c1fefd9d3';

  private PRED_URL_BR = 'https://apiv2.apifootball.com/?action=get_predictions&' +
    'from=2019-12-15&to=2020-01-29&' +
    'league_id=688&' +
    'APIkey=2460239a218e22dd4c13f692c3caedafd1ef37cfc2fcbe58e645065c1fefd9d3';

  private GAMES_URL_PT = 'https://apiv2.apifootball.com/?action=get_events&' +
    'from=2019-11-01&to=2019-12-15&' +
    'league_id=391&' +
    'APIkey=2460239a218e22dd4c13f692c3caedafd1ef37cfc2fcbe58e645065c1fefd9d3';

  private PRED_URL_PT = 'https://apiv2.apifootball.com/?action=get_predictions&' +
    'from=2019-12-15&to=2020-01-29&' +
    'league_id=391&' +
    'APIkey=2460239a218e22dd4c13f692c3caedafd1ef37cfc2fcbe58e645065c1fefd9d3';

  constructor(private httpClient: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  public getGamesEng() {
    return this.httpClient.get(this.GAMES_URL_ENG).pipe(catchError(this.handleError));
  }
  public getGamesBr() {
    return this.httpClient.get(this.GAMES_URL_BR).pipe(catchError(this.handleError));
  }
  public getGamesPt() {
    return this.httpClient.get(this.GAMES_URL_PT).pipe(catchError(this.handleError));
  }
  public getPredEng() {
    return this.httpClient.get(this.PRED_URL_ENG).pipe(catchError(this.handleError));
  }
  public getPredBr() {
    return this.httpClient.get(this.PRED_URL_BR).pipe(catchError(this.handleError));
  }
  public getPredPt() {
    return this.httpClient.get(this.PRED_URL_PT).pipe(catchError(this.handleError));
  }
}
