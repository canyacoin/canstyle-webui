import { Component, OnInit } from '@angular/core'; 
declare var createCardsRandomly: any;  

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor() { }

  ngOnInit() {  
         createCardsRandomly(8,""); 
  }
  
  
  ngAfterViewInit() {   
  
    $( document ).ready(function() { 

        $('#top-nav .nav-item a').css('color','#919d9d');
        $('#cards-link').css('color','#535353');
    });
  }

}
