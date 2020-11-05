import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';

export interface HomeButtons {
	text: string,
	link: string,
	icon: string
}

const homeButtons: HomeButtons[] = [
	{ text: 'Breakfast', link: '/breakfast', icon: 'free_breakfast'},
	{ text: 'Lunch', link: '/lunch', icon: 'wb_sunny'},
	{ text: 'Dinner', link: '/dinner', icon: 'nights_stay'},
	{ text: 'A snack', link: '/snack', icon: 'tapas'}
];


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	homeButtons = homeButtons;

  constructor() { }

  ngOnInit(): void {
  }

}
