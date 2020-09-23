
const modalMain = document.getElementById("modal_main");
const modalSuccess = document.getElementById("modal_success");
let close = document.getElementsByClassName('modal__close_times');
let show = document.getElementsByClassName('show-success');

modalMain.classList.add('modal_active');

close.item(0).onclick = function() {
	modalMain.classList.remove('modal_active');
}

close.item(1).onclick = function() {
	modalSuccess.classList.remove('modal_active');
}

show.item(0).onclick = function() {
	modalMain.classList.remove('modal_active');
	modalSuccess.classList.add('modal_active');
}


