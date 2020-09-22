


let hours = 0;
let minutes = 1;
let seconds = 15;

const timer = document.getElementById("timer");

timer.textContent = `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;

function countdown() {
     let id = setInterval(count, 1000);
     
     function count(){
  	if (seconds == 0 && minutes == 0 && hours == 0)  {
	 alert('Вы победили в конкурсе!');
	 clearInterval(id);
     } else {
     	seconds -=1;
     	if (seconds == 0 && minutes > 0) {
       	minutes -= 1;
     	seconds = 59;
      } if (minutes == 0 &&  hours > 0) {
      	hours -= 1;
      	minutes = 59;
      } 
      timer.textContent = `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
   	 }
    }
  }

countdown();


