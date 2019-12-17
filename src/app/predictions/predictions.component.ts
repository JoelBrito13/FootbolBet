import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-predictions',
  templateUrl: './predictions.component.html',
  styleUrls: ['./predictions.component.css']
})
export class PredictionsComponent implements OnInit {
  games = [];
  page = 10;
  pageSize = 10;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  onSubmitEng() {
    this.apiService.getPredEng().subscribe((data: any[]) => {
      console.log(data);
      this.games = data;
    });
  }

  onSubmitBr() {
    this.apiService.getPredBr().subscribe((data: any[]) => {
      console.log(data);
      this.games = data;
    });
  }

  onSubmitPt() {
    this.apiService.getPredPt().subscribe((data: any[]) => {
      console.log(data);
      this.games = data;
    });
  }
}
