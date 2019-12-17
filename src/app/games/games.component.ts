import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  page = 10;
  pageSize = 10;
  public games = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  onSubmitEng() {
    this.apiService.getGamesEng().subscribe((data: any[]) => {
      console.log(data);
      this.games = data;
    });
  }

  onSubmitBr() {
    this.apiService.getGamesBr().subscribe((data: any[]) => {
      console.log(data);
      this.games = data;
    });
  }

  onSubmitPt() {
    this.apiService.getGamesPt().subscribe((data: any[]) => {
      console.log(data);
      this.games = data;
    });
  }
}
