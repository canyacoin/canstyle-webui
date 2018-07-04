import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $( document ).ready(function() { 

        $('#top-nav .nav-item a').css('color','#919d9d');
        $('#buttons-link').css('color','#535353');
    });
  }

}
