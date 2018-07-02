import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
declare var createCards: any; 
declare var BancorConvertWidget:any;

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, AfterViewInit { 
    // Current user?
    currentUser: any = JSON.parse( localStorage.getItem('credentials') );
    // List
    pitches = [
    { username: 'Juan', title: 'Title', description: 'Short pitch', image: 'https://canyacoin.files.wordpress.com/2018/01/canya_featured-images-out-and-about.jpg', timestamp: '1520219384' },
    { username: 'Juan', title: 'Title', description: 'Short pitch', image: 'https://canyacoin.files.wordpress.com/2018/01/canya_featured-images-out-and-about.jpg', timestamp: '1520219384' },
    { username: 'Juan', title: 'Title', description: 'Short pitch', image: 'https://canyacoin.files.wordpress.com/2018/01/canya_featured-images-out-and-about.jpg', timestamp: '1520219384' },
    { username: 'Juan', title: 'Title', description: 'Short pitch', image: 'https://canyacoin.files.wordpress.com/2018/01/canya_featured-images-out-and-about.jpg', timestamp: '1520219384' },
    { username: 'Juan', title: 'Title', description: 'Short pitch', image: 'https://canyacoin.files.wordpress.com/2018/01/canya_featured-images-out-and-about.jpg', timestamp: '1520219384' },
    { username: 'Juan', title: 'Title', description: 'Short pitch', image: 'https://canyacoin.files.wordpress.com/2018/01/canya_featured-images-out-and-about.jpg', timestamp: '1520219384' },
    { username: 'Juan', title: 'Title', description: 'Short pitch', image: 'https://canyacoin.files.wordpress.com/2018/01/canya_featured-images-out-and-about.jpg', timestamp: '1520219384' }
    ]; 
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
    canApps = [
        { name:'CanShare', desc:'Transfer your files around the world using decentralized technology!', url:'https://canshare.io' },
        { name:'CanInvoice', desc:'Easily create your own clean, professional and accurate invoices.', url:'https://caninvoice.io' },
        { name:'CanYa25', desc:'Shoot your pitch, vote, contribute and raise funds!', url:'https://CanYa25.io' },
        { name:'CanSend', desc:'Send ERC20 tokens to multiple addresses at once!', url:'https://CanSend.io' },
        { name:'CanStation', desc:'Find out the ideal amount of gas to allocate to your ETH transaction!', url:'https://CanStation.io' },
        { name:'CanTrack', desc:'A crisp and easy to use task tracker to help you with your project', url:'https://CanTrack.io' },
    ];
  
  // Flags
  loading = true;
  
  constructor(private router: Router,private activatedRoute:  ActivatedRoute) {}
  
  ngOnInit() {
        
        setTimeout( () => {
            this.loading = false;
            }, 2000 
        );  
        
        // jQuery for the pages
        
        $( document ).ready(function() { 
            // hide everything....
            hideAll(); 
            // and show the intro!
            $('#introduction').fadeIn();     
            //topnav navigation
            $('ul.topbar-nav li a').click(function(e) 
            {   
                $('.topbar-nav li a').css('color','#9b9b9b');
                $(this).css('color','#535353');
                console.log($(this).attr('value'));
                if($($(this).attr('value')) != "#introduction"){ 
                    hideAll();
                    $('.site-footer').hide();
                    $($(this).attr('value')).fadeIn();
                    $('.site-footer').fadeIn();  
                }
            });  
            $('.topbar-brand').click(function(e) 
            {   
                $('.topbar-nav li a').css('color','#9b9b9b');
                hideAll();  
                $('.site-footer').hide();
                $("#introduction").fadeIn();  
                $('.site-footer').fadeIn();  
            });    
            });   
            function hideAll(){  
                $('#introduction').hide();
                $('#typography').hide();
                $('#colors').hide();
                $('#buttons').hide();
                $('#cards').hide(); 
                $('#widgets').hide(); 
                }  
         createCards();
         $("#github-btn").click(function(){ 
         window.open('https://github.com/canyaio/CanYa-Styleguide', '_blank');
         })
         $("#io-btn").click(function(){ 
         window.open('http://canya.io/', '_blank');
         })
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