//Assign the BSSIDs
var mcdonalds_wifi = "38:60:77:7d:39:0b" 
var burgerking_wifi = "38:60:77:7d:39:0b" 
var sober_wifi = "80:c6:ab:3a:a6:5d"


var moveMe = function(e) {
  e.preventDefault();
  
  var orig = e.originalEvent;
  var myTouches = orig.targetTouches.length;
  var cooX = orig.changedTouches[0].screenX;
  var cooY = orig.changedTouches[0].screenY;
  var x = 4;
  var f = cooY / 2.7
  

  $(this).css({
    top: cooY - 60,
    
  });

  if(cooY < 580){
    document.getElementById('arrow-down').style.height = f;
  }



if(cooY < 530){
    x = 10; 
    
}

if(cooY > 500){
    $(this).css({
    bottom: 40,
    left: (50 + '%')
  });
    
}

if(x == 10 && myTouches == 0){
    $(this).css({
    top: 48,
    left: (50 + '%'),
    width: 130,
    height: 130,
    marginLeft: -65

  }); 
    navigator.notification.vibrate(100);
    var scan = true;
    scanner(scan);  
}

};



function scanner(scan){
         $('#scan').css({'display':'block'})
         $('#scan2').css({'display':'block'})
         $('#arrow-down').css({'display':'none'})
         $('#searching-for').css({'display':'block'})


       

    
    setTimeout(function(){

        
         $('#scan').toggleClass('fade')
         $('#scan2').toggleClass('fade')}, 500)

   
     setTimeout(function(){

         $('#static-ball').css({'display':'block'});
         
         $('#test').css({'display':'none'});
         $('#socket').css({'display':'none'});
         $('#alert-message').css({'display':'block'});
         $('#pulse').css({'display':'block'});
         $('#hb2').css({'display':'block'});
         findWifi();  
                       
        

       }, 4000)
         
    
    }
 

    function findWifi(x){
      window.plugins.WifiInfo.get(function(wifis){ 
        for(i=0;i<wifis.available.length; i++){
         x = wifis.available[i].BSSID; 
         
         if((x === mcdonalds_wifi)||(x === burgerking_wifi)){
          Pulse();
         $('#scan').css({'display':'none'});
         $('#scan2').css({'display':'none'});

    }
    

       }  
     
      
         });
    
  };

  /*function findWifi2(){
     window.plugins.WifiInfo.get(function(wifis){ 
            for(i=0;i<wifis.available.length; i++){
                 p = wifis.available[i].BSSID;
            
            if(p === sober_wifi){
             successView = new SuccessView({el:$('#app')});
              clearInterval(searchInterval);
            }   
      }
         });
  };*/

     function Pulse(){ 

      setTimeout(function(){
         ringInterval = window.setInterval(function(){ 
        navigator.notification.vibrate(200);
  }, 1000);
         
         $('#static-ball').toggleClass('descend');
         $('#offer-ball').css({'display':'block'});
         $('#pointer').css({'border-bottom':'7px solid #A00707'});
         $('#alert-message').css({'display':'block'});        
         $('#searching-for').css({'display':'none'});         
         $('#pulse').toggleClass('flash');
         $('#hb2').toggleClass('flash');

          }, 100);
   };

   function myOffers(){
    window.location.href = "offers.html"
   }
    
   function goTime(){
    $('#timer').toggleClass('start')
   } 
       
       
    



 
    
