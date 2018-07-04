import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent implements OnInit {

  illustrations = ["CanSend","CanShare","CanFund","CanStation","CanInvoice","CanSign","CanTrack","CanSeek"]

  constructor() { }

  ngOnInit() {   
            $('#top-nav .nav-item a').css('color','#919d9d');
            $('#assets-link').css('color','#535353');   
  }

}
