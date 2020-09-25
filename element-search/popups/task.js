
const modalMain = document.getElementById("modal_main");
const modalSuccess = document.getElementById("modal_success");
let modalClose = document.getElementsByClassName('modal__close_times');
let modal = document.getElementsByClassName('modal');
let show = document.getElementsByClassName('show-success');
let arrClose = Array.from(modalClose);

modalMain.classList.add('modal_active');

for ( i = 0 ; i < arrClose.length; i++) {
   let close = arrClose[i]
    close.onclick = function() {
   	close.closest('.modal').classList.remove('modal_active')
   } 
}

show.item(0).onclick = function() {
	modalMain.classList.remove('modal_active');
	modalSuccess.classList.add('modal_active');
}


