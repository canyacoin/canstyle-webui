import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  
    $( document ).ready(function() { 
        $('#top-nav .nav-item a').css('color','#919d9d');
        $('#typo-link').css('color','#535353');
    });
  }

}
