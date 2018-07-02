import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colours',
  templateUrl: './colours.component.html',
  styleUrls: ['./colours.component.css']
})
export class ColoursComponent implements OnInit {
 
  elementColors = [
    { code: '#33ccff', name: 'CanYa Blue' },
    { code: '#f0fbff', name: 'UI Blue' },
    { code: '#4decca', name: 'CanYa Green' },
    { code: '#d4eddb', name: 'UI Green' },
    { code: '#185927', name: 'Dark Green Text' },
    { code: '#D1ECF1', name: 'UI Dark Teal' },
    { code: '#0B5460', name: 'Dark Teal Text' },
    { code: '#eceeef', name: 'UI Field Entry' },    
    { code: '#ffffff', name: 'UI 01' },
    { code: '#f8f8f8', name: 'UI 02' },
    { code: '#dce0ec', name: 'UI 03' },
    { code: '#757575', name: 'UI 04' },   
    { code: '#323c47', name: 'Text 01' },
    { code: '#535353', name: 'Text 02' },
    { code: '#9b9b9b', name: 'Text 03' },
    { code: '#b7bbbd', name: 'Text 04' },
    { code: '#ff4954', name: 'Danger UI'},
    { code: '#30D7A9', name: 'Success UI'},
    { code: '#00ADEE', name: 'Info UI'}
    ];  
    supplementColors = [
       { code: '#ff6666', name: 'Support 01' },
       { code: '#f9a4d8', name: 'Support 02' },
       { code: '#ffc600', name: 'Support 03' },
       { code: '#00aca0', name: 'Support 04' },
       { code: '#0078bf', name: 'Support 05' }, 
    ]; 
    gradientColors = [
        { leftCode: '#33ccff', rightCode: '#4decca', leftName: 'CanYa Blue', rightName: 'CanYa Green'  },
        { leftCode: '#33ccff', rightCode: '#0078bf', leftName: 'CanYa Blue', rightName: 'Cerulean'  },
        { leftCode: '#ff6666', rightCode: '#ffc600', leftName: 'CanYa Red', rightName: 'Marigold'  },
        { leftCode: '#ff6666', rightCode: '#f9a4d8', leftName: 'CanYa Red', rightName: 'Rose Pink'  }
    ]; 
  constructor() { }

  ngOnInit() {
    $( document ).ready(function() { 
        $('#colours-link').css('color','#535353');
    });
 
  }

}
