const sliderPrew = document.getElementsByClassName('slider__arrow_prev');
const sliderNext = document.getElementsByClassName('slider__arrow_next');
let slidersDots = Array.from(document.getElementsByClassName('slider__dot'));
let sliders = Array.from(document.getElementsByClassName('slider__item'));

slidersDots[0].classList.add('slider__dot_active');

sliderNext.item(0).onclick = function() {
	clickSlider(slidersDots.indexOf(document.getElementsByClassName('slider__dot_active').item(0)) + 1);
}

sliderPrew.item(0).onclick = function() {
	clickSlider(slidersDots.indexOf(document.getElementsByClassName('slider__dot_active').item(0)) - 1);
}

for (let d = 0; d <= slidersDots.length - 1 ; d++) {
    slidersDots[d].onclick = function() {
  	clear();
  	nextSlider(d);
  }
}

function clickSlider(i){
   if (i > slidersDots.length - 1) {
      i = 0;
   } else if (i < 0) {
      i = slidersDots.length - 1;
   }  
   clear();
   nextSlider(i);
  }


function nextSlider(i) {
   	slidersDots[i].classList.add('slider__dot_active');
  	sliders[i].classList.add('slider__item_active');
}

 function clear() {
    document.getElementsByClassName('slider__item_active').item(0).classList.toggle('slider__item_active');
    document.getElementsByClassName('slider__dot_active').item(0).classList.toggle('slider__dot_active');
 }

