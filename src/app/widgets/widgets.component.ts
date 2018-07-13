import { Component, OnInit } from '@angular/core';
declare var BancorConvertWidget:any;
@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $( document ).ready(function() { 

       $('#top-nav .nav-item a').css('color','#919d9d');
        $('#widgets-link').css('color','#535353');
    });
  }
  ngAfterViewInit() {   
        BancorConvertWidget.init({
                'type': '1',
                'baseCurrencyId': '5a6f61ece3de16000123763a',
                'pairCurrencyId': '5937d635231e97001f744267',
                'primaryColor': '#00BFFF',
                'primaryColorHover': '55DAFB'
        });   
  }

}
