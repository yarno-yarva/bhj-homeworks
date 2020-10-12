const tootlip = Array.from(document.getElementsByClassName('has-tooltip'));


for (let i = 0; i < tootlip.length; i++) {
	tootlip[i].onclick = function(){
	if (tootlip[i].classList.contains('has-tooltip_active')) {
		document.getElementsByClassName('tooltip_active')[0].remove()
		document.getElementsByClassName('has-tooltip_active')[0].classList.toggle('has-tooltip_active')
	    return false
	} else if (document.getElementsByClassName('tooltip_active').length == 1) {
		document.getElementsByClassName('has-tooltip_active')[0].classList.toggle('has-tooltip_active')
		document.getElementsByClassName('tooltip_active')[0].remove()}
	tootlip[i].classList.add('has-tooltip_active');
    let coords = tootlip[i].getBoundingClientRect();
    tootlip[i].insertAdjacentHTML("afterEnd",
	`<div class="tooltip tooltip_active" style="left: ${coords.left}px; top: ${coords.top+20}px">${tootlip[i].getAttribute('title')}</div>`);
     return false
    }
   
}
