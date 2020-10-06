const checkbox =Array.from(document.getElementsByClassName("interest__check"));


for (let i = 0; i < checkbox.length; i++) { 
	checkbox[i].addEventListener('change', function() {
	   if (checkbox[i].closest('li').getElementsByClassName('interest__check').length > 1) {
           let checks = Array.from(checkbox[i].closest('li').getElementsByClassName('interest__check'));
           for (let j = 1; j < checks.length; j++) {
              if (checkbox[i].checked == true) {
                checks[j].checked = true;
              } else {
                checks[j].checked = false;
              }
           }
       
       }
    });
}