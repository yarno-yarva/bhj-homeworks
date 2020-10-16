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
       
    } else  {
         
         verife(i);
    }
  
     });

function verife(i){
          let checks2 = Array.from(checkbox[i].closest('ul').closest('li').getElementsByClassName('interest__check'));
           let count = 0;
          for (let j = 0; j < checks2.length; j++) {
          if (checks2[j].checked == true) {
                 count = count + 1
           } 
           
           if (count == checkbox[i].closest('ul').closest('li').getElementsByClassName('interest__check').length -1) {
               if (checkbox[i].checked == true) {
                checkbox[i].closest('ul').closest('li').getElementsByClassName('interest__check')[0].indeterminate = false;
                checkbox[i].closest('ul').closest('li').getElementsByClassName('interest__check')[0].checked = true;
               } else {
                checkbox[i].closest('ul').closest('li').getElementsByClassName('interest__check')[0].checked = false;
                checkbox[i].closest('ul').closest('li').getElementsByClassName('interest__check')[0].indeterminate = true;
              }
           } else if (count == 1) {
               if (checkbox[i].checked == true) {
               	checkbox[i].closest('ul').closest('li').getElementsByClassName('interest__check')[0].checked = false
               	checkbox[i].closest('ul').closest('li').getElementsByClassName('interest__check')[0].indeterminate = true;
               } else {
               	 checkbox[i].closest('ul').closest('li').getElementsByClassName('interest__check')[0].indeterminate = false
                 checkbox[i].closest('ul').closest('li').getElementsByClassName('interest__check')[0].checked = false;
               }
            
           } else if (count == 0 ) {
            checkbox[i].closest('ul').closest('li').getElementsByClassName('interest__check')[0].indeterminate = false
            checkbox[i].closest('ul').closest('li').getElementsByClassName('interest__check')[0].checked = false;
           }
        } 
    }

}