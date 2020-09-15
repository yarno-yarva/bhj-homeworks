function countdown() {
     const output = document.getElementById("timer");
     let id = setInterval(count, 1000);
     function count(){
     	if (output.textContent == 0) {
	 alert('Вы победили в конкурсе!');
	 clearInterval(id);
     } else {
     	output.textContent -=1;
     }
    
 }
}

countdown();

