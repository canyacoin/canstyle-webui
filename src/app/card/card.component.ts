import { Component, OnInit } from '@angular/core';
declare var createCardsRandomly: any;  
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit() { 
         createCardsRandomly(8,"");
  }

}
