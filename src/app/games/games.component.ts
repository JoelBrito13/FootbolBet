import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {MatDialog, MatDialogConfig} from '@angular/material';


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  todayDate = new Date();
  minDate = new Date(2019, 10, 1);
  maxDate = new Date(this.todayDate);
  games = [];
  panelOpenState = false;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    // this.apiService.getGames().subscribe((data: any[]) => {
    //   console.log(data);
    //   this.games = data;
    // });
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
