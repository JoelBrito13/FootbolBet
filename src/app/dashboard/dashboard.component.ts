import { Component } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  images = ['https://www.fpf.pt/Portals/0/FPF_Noticias/Sele%C3%A7%C3%B5es%20Masculinas/CS9I3248_1.JPG',
    'https://www.fpf.pt/Portals/0/FPF_Noticias/Sele%C3%A7%C3%B5es%20Masculinas/CS9I4374.JPG',
    'https://www.fpf.pt/Portals/0/FPF_Noticias/Sele%C3%A7%C3%B5es%20Masculinas/CS9I4085.JPG'].map((n) => `${n}`);
  title = 'Football Bets';

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
}
