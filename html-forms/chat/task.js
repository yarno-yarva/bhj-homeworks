const activ = document.getElementsByClassName('chat-widget');
const messages = document.querySelector( '.chat-widget__messages' );
let now = new Date();
let arr = [`Мы ещё не проснулись. Позвоните через 10 лет`,
`Сегодня не работаем`,
`Не надо сюда писать`,
`Вы нас утомили`,
`Хватит спамить!`,
`У нас выходной`
]

activ.item(0).onclick = function() {
	activ.item(0).classList.add('chat-widget_active');
}

document.getElementById('chat-widget__input').addEventListener('keydown', regEvents)

function regEvents(event) {
    if (event.key == 'Enter' && document.getElementById('chat-widget__input').value.length > 0 ){ 
    console.log(document.getElementById('chat-widget__input').value)
	console.log(event.key, event.code);
	messages.innerHTML += `
     <div class="message message_client">
         <div class="message__time">${now.getHours()}:${now.getMinutes()}</div>
         <div class="message__text">${document.getElementById('chat-widget__input').value}</div>
      </div>
	`
	document.getElementById('chat-widget__input').value = '';
	setTimeout(answer, 3000);
    //answer();
 }
}

function answer(){

messages.innerHTML += `
  <div class="message">
    <div class="message__time">${now.getHours()}:${now.getMinutes()}</div>
    <div class="message__text">${arr[Math.floor(Math.random() * arr.length)]}
    </div>
  </div>
`;	
}


