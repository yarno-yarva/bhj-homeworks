let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();
xhr.onreadystatechange = function() {
	if(xhr.readyState === xhr.DONE) {
		document.getElementById('loader').classList.remove('loader_active');
		let response = JSON.parse(xhr.responseText).response.Valute;
        let output = ``;
	    for (let key in response) {

	    output += `<div class="item">
                     <div class="item__code">
                         ${response[key].CharCode}
                     </div>
                     <div class="item__value">
                        ${response[key].Value}
                    </div>
                    <div class="item__currency">
                        руб.
                    </div>
                  </div>`	
       }
       
        document.getElementById('items').innerHTML = output;
    }
}