import { Component, OnInit } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';





export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[NgbCarouselConfig]
})





export class HomeComponent implements OnInit {

  constructor(config:NgbCarouselConfig) {
    config.interval=2000;
    config.wrap=true;
    config.keyboard=true;
    config.pauseOnHover=false;
   }

  ngOnInit(): void {
  }

  images = ["../../assets/images/home1.jpg","../../assets/images/home2.jpg","../../assets/images/home4.jpg","../../assets/images/foodhome.jpg"];
  
  // tiles: Tile[] = [
  //   {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
  //   {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
  //   {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
  //   {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  // ];
  
}
