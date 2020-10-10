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
       
            console.log(checks[j]);
        }
       
    } else  {
         
         verife(i);
           
     //console.log(checkbox[i].closest('ul')closest('li').getElementsByClassName('interest__check').length);
    }
    //event.preventDefault();   
     });

function verife(i){
          let checks2 = Array.from(checkbox[i].closest('ul').closest('li').getElementsByClassName('interest__check'));
           let count = 0;
          for (let j = 0; j < checks2.length; j++) {
          if (checks2[j].checked == true) {
                 count = count + 1
                
                 console.log(checks2[j].checked)
           } 
          console.log(count)
            //console.log(checks2[j]);
            // console.log(1234);
           if (count == checkbox[i].closest('ul').closest('li').getElementsByClassName('interest__check').length -1) {
            checkbox[i].closest('ul').closest('li').getElementsByClassName('interest__check')[0].indeterminate = false;
              checkbox[i].closest('ul').closest('li').getElementsByClassName('interest__check')[0].checked = true;
           } else if (count < checkbox[i].closest('ul').closest('li').getElementsByClassName('interest__check').length -1) {
              checkbox[i].closest('ul').closest('li').getElementsByClassName('interest__check')[0].checked = false;
              checkbox[i].closest('ul').closest('li').getElementsByClassName('interest__check')[0].indeterminate = true;
           } else if (count == 0 ) {
            checkbox[i].closest('ul').closest('li').getElementsByClassName('interest__check')[0].indeterminate = false
            checkbox[i].closest('ul').closest('li').getElementsByClassName('interest__check')[0].checked = false;
           }
         } 

}

}