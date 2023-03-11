//snare
document.getElementsByClassName('btn')[0].addEventListener('click', function(){
   document.getElementsByClassName('audio')[0].currentTime = 0;
   document.getElementsByClassName('audio')[0].play();
   
})
//kick
document.getElementsByClassName('btn')[1].addEventListener('click', function(){
   document.getElementsByClassName('audio')[1].currentTime = 0;
   document.getElementsByClassName('audio')[1].play();
})
//crash
document.getElementsByClassName('btn')[2].addEventListener('click', function(){
   document.getElementsByClassName('audio')[2].currentTime = 0;
   document.getElementsByClassName('audio')[2].play();
})
//snare
document.getElementsByClassName('btn')[3].addEventListener('click', function(){
   document.getElementsByClassName('audio')[3].currentTime = 0;
   document.getElementsByClassName('audio')[3].play();
})
//only one window event listener

window.addEventListener('keydown', function(event){
   if(event.key =='s' || event.key =='S'){
      document.getElementsByClassName('audio')[0].currentTime = 0;
      document.getElementsByClassName('audio')[0].play();
      document.getElementsByClassName('btn')[0].style.backgroundSize = '120%';
      this.setTimeout(function(){
         document.getElementsByClassName('btn')[0].style.backgroundSize = '100%';
      }, 150);
   }
   else if(event.key =='k' || event.key =='K'){
      document.getElementsByClassName('audio')[1].currentTime = 0;
      document.getElementsByClassName('audio')[1].play();
      document.getElementsByClassName('btn')[1].style.backgroundSize = '90%';
      this.setTimeout(function(){
         document.getElementsByClassName('btn')[1].style.backgroundSize = 'contain';
      }, 150);
   }
   else if(event.key =='c' || event.key =='C'){
      document.getElementsByClassName('audio')[2].currentTime = 0;
      document.getElementsByClassName('audio')[2].play();
      document.getElementsByClassName('btn')[2].style.backgroundSize = '130%';
      this.setTimeout(function(){
         document.getElementsByClassName('btn')[2].style.backgroundSize = '100%';
      }, 150);
   }
   else if(event.key =='t' || event.key == 'T'){
      document.getElementsByClassName('audio')[3].currentTime = 0;
      document.getElementsByClassName('audio')[3].play();
      document.getElementsByClassName('btn')[3].style.backgroundSize = '90%';
      this.setTimeout(function(){
         document.getElementsByClassName('btn')[3].style.backgroundSize = 'contain';
      }, 150);
   }
})
