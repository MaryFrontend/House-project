"use strict"

let sliderAutomatic = function(){ 
    
 let slides = document.querySelectorAll(".slide");
 let sliders = [];

 for (let i = 0; i<slides.length; i++){
     sliders[i]=slides[i].querySelector('img');
 }

}

sliderAutomatic();
