
const fonts = Array.from(document.getElementsByClassName('font-size'));
const colors = Array.from(document.getElementsByClassName('color'));


for (let i = 0; i < fonts.length; i++) {
	fonts[i].onclick = function(){
		document.getElementsByClassName('font-size_active').item(0).classList.toggle('font-size_active');
		fonts[i].classList.add('font-size_active')
	    if (document.getElementById('book').classList.contains('book_fs-big')) {
        	document.getElementById('book').classList.toggle('book_fs-big')
        } else if (document.getElementById('book').classList.contains('book_fs-small')) {
        	document.getElementById('book').classList.toggle('book_fs-small')
        }
		if (fonts[i].getAttribute('data-size') != null) {
		document.getElementById('book').classList.add(`book_fs-${fonts[i].getAttribute('data-size')}`);
	    }
	 	return false
    }
}

for (let j = 0; j < colors.length; j++) {
	colors[j].onclick = function(){
		if (colors[j].closest('div').classList.contains('book__control_background')) {
			document.getElementsByClassName('color_active').item(1).classList.toggle('color_active');
			colors[j].classList.add('color_active')
            if (document.getElementById('book').classList.contains('book_bg-gray')) {
        	   document.getElementById('book').classList.toggle('book_bg-gray')
               } else if (document.getElementById('book').classList.contains('book_bg-black')) {
        	   document.getElementById('book').classList.toggle('book_bg-black')
               } else if (document.getElementById('book').classList.contains('book_bg-white')) {
        	   document.getElementById('book').classList.toggle('book_bg-white')
        }
		document.getElementById('book').classList.add(`book_bg-${colors[j].getAttribute('data-bg-color')}`);
		} else {
			document.getElementsByClassName('color_active').item(0).classList.toggle('color_active');
			colors[j].classList.add('color_active')
			if (document.getElementById('book').classList.contains('book_color-gray')) {
        	   document.getElementById('book').classList.toggle('book_color-gray')
               } else if (document.getElementById('book').classList.contains('book_color-whitesmoke')) {
        	   document.getElementById('book').classList.toggle('book_color-whitesmoke')
               } else if (document.getElementById('book').classList.contains('book_color-black')) {
        	   document.getElementById('book').classList.toggle('book_color-black')
        }
		document.getElementById('book').classList.add(`book_color-${colors[j].getAttribute('data-text-color')}`);
		}
	    return false
	}
}