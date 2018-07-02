import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  
            $('#assets-link').css('color','#535353'); 
  }

}
