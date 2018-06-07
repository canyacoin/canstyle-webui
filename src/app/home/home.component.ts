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
    { code: '#185927', name: 'UI Green' },
    { code: '#eceeef', name: 'UI Field Entry' },    
    { code: '#ffffff', name: 'UI 01' },
    { code: '#f8f8f8', name: 'UI 02' },
    { code: '#dce0ec', name: 'UI 03' },
    { code: '#757575', name: 'UI 04' }, 
    { code: '#323c47', name: 'Text 01' },
    { code: '#535353', name: 'Text 02' },
    { code: '#9b9b9b', name: 'Text 03' },
    { code: '#b7bbbd', name: 'Text 04' },
    { code: '#ff4954', name: 'Notice UI'}
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
        
            hideAll(); 
             
            $('#introduction').fadeIn();  
            $('ul.side-nav li').click(function(e) 
            { 
                console.log($(this).attr('id'));
                
                if(($(this).attr('id')) != "#introduction"){ 
                    hideAll();
                    var id = ($(this).attr('id')); 
                    var topNavId = 'ul.topbar-nav li.' +  id.substring(1);
                    console.log(topNavId);
                    $(id).fadeIn();  
                    $('ul.topbar-nav li').css('color','#919d9d');
                    $('#top-nav').removeAttr("hidden"); 
                    $(topNavId).css('color','#535353');
                    $('#top-nav').fadeIn(); 
                    
                } 
            });     
            
            $('ul.topbar-nav li').click(function(e) 
            {  
                $('ul.topbar-nav li').css('color','#919d9d');
                $(this).css('color','#535353');
                if($($(this).attr('id')) != "#introduction"){ 
                    hideAll();
                    $('.site-footer').hide();
                    $($(this).attr('id')).fadeIn();
                    $('.site-footer').fadeIn();  
                }
            });   
            
            $('.topbar-brand').click(function(e) 
            {  
                hideAll(); 
                $('#top-nav').fadeOut("fast"); 
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
  }

  ngAfterViewInit() {  
        function showMe(){
            console.log("test!");
        }
        BancorConvertWidget.init({
                'type': '1',
                'baseCurrencyId': '5a6f61ece3de16000123763a',
                'pairCurrencyId': '5937d635231e97001f744267',
                'primaryColor': '#00BFFF',
                'primaryColorHover': '55DAFB'
        });  
        this.activatedRoute.params.subscribe( (params) => {
            // PARAM? = params['query'] ? params['query'] : '';
        });
  }
  
}
