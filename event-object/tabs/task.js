const tabs = Array.from(document.getElementsByClassName('tab'));
const tabs_content = Array.from(document.getElementsByClassName('tab__content'));

for (let i = 0; i < tabs.length; i++){
	tabs[i].onclick = function(){
		document.getElementsByClassName('tab_active')[0].classList.remove('tab_active');
		document.getElementsByClassName('tab__content_active')[0].classList.remove('tab__content_active');
		tabs[i].classList.add('tab_active');
        tabs_content[i].classList.add('tab__content_active');
	}
}