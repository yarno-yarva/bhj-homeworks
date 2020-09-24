const sliderPrew = document.getElementsByClassName('slider__arrow_prev');
const sliderNext = document.getElementsByClassName('slider__arrow_next');
const sliderDot = document.getElementsByClassName('slider__dot');
const slider = document.getElementsByClassName('slider__item');
let slidersDots = Array.from(sliderDot);
let sliders = Array.from(slider);
let click = 0;

slidersDots[click].classList.add('slider__dot_active');

sliderNext.item(0).onclick = function() {
	clickSlider(click + 1);
}

sliderPrew.item(0).onclick = function() {
	clickSlider(click - 1);
}

for (let d = 0; d <= slidersDots.length - 1 ; d++) {
    const dots = slidersDots[d];
    dots.onclick = function() {
  	clear();
  	nextSlider(d);
  	return click = d;
  }
}

function clickSlider(i){
   if (i > slidersDots.length - 1) {
      i = 0;
   } if (i < 0) {
      i = slidersDots.length - 1;
   }  
   clear();
   nextSlider(i);
   return click = i;
 }


function nextSlider(i) {
   	slidersDots[i].classList.add('slider__dot_active');
  	sliders[i].classList.add('slider__item_active');
}

 function clear() {
    document.getElementsByClassName('slider__item_active').item(0).classList.toggle('slider__item_active');
    document.getElementsByClassName('slider__dot_active').item(0).classList.toggle('slider__dot_active');
 }

