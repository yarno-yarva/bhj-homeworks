
getHole = index => document.getElementById(`hole${index}`);

const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

function reset(){
	lost.textContent = 0;
    dead.textContent = 0;
}

for (let i = 1; i <= 9; i++) {
  const hole = getHole(i);
  hole.onclick = function() {
   if (hole.classList.contains( 'hole_has-mole' )) {
   dead.textContent = Number(dead.textContent) + 1
        if (Number(dead.textContent) == 10) {
     	alert(`Вы выйграли`);
     	reset();
     }
   } else {
   	lost.textContent = Number(lost.textContent) + 1
   	    if (Number(lost.textContent) == 5) {
   		alert(`Вы проиграли`);
   	    reset();
   	}
   }
 }
}



