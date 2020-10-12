
let taskList = document.getElementById('tasks__list')

document.forms['tasks__form'].addEventListener('submit', regEvent)

function regEvent(event){
   if (document.getElementById('task__input').value.length > 0 ) {
      //console.log(document.getElementById('task__input').value)
      let div = document.createElement('div');
      div.className = "task";
      div.innerHTML =`<div class="task__title">
          ${document.getElementById('task__input').value}
           </div>
           <a href="#" class="task__remove">&times;</a>`;
      taskList.appendChild(div);
      div.lastElementChild.addEventListener('click', function(){
  	      div.remove();
      });
      document.getElementById('task__input').value = "";
    }
    event.preventDefault();
}

	
