const menuLink = document.getElementsByClassName('menu__link');
let links = Array.from(menuLink);

for (let i = 0; i <= links.length - 1 ; i++) {
  let link = links[i];

  link.onclick = function() {

    let selector = link.closest('li').querySelector('ul');
    if (selector != null) {
      if (selector.classList.contains('menu_active')) {
          document.getElementsByClassName('menu_active').item(0).classList.toggle('menu_active');
          return false;
      } else {
          clear()
          selector.classList.add('menu_active')
        }
         return false;
      } 
    }
}


function clear() {
	if (document.getElementsByClassName('menu_active').length == 1)
    document.getElementsByClassName('menu_active').item(0).classList.toggle('menu_active');
}





 //&& classList.contains('menu_active') == false 