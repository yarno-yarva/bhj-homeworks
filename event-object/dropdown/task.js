
const dropValue = document.getElementsByClassName('dropdown__value').item(0);
const dropItem = document.getElementsByClassName('dropdown__item');
let dropItems = Array.from(dropItem);

dropValue.addEventListener ('click', function() {
   document.getElementsByClassName('dropdown__list').item(0).classList.add('dropdown__list_active');
  });

for (let i = 0 ; i <= dropItem.length - 1; i++) {
	let item = dropItem[i];
	console.log(item);
	item.onclick = function() {
		dropValue.textContent = dropItem[i].textContent;
		document.getElementsByClassName('dropdown__list').item(0).classList.remove('dropdown__list_active');
	return false;

   }
}


