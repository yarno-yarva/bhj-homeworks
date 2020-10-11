
document.addEventListener( 'scroll', scrolling);


function scrolling() {

let divs = Array.from(document.getElementsByClassName('reveal'))
for (let i = 0; i < divs.length; i++ ) {
	let div = divs[i];

	if (div.getBoundingClientRect().top > 0 && div.getBoundingClientRect().top < window.innerHeight) {
		div.classList.add('reveal_active');	
	} else {
		div.classList.remove('reveal_active');
	    }
    }
}
