let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();
let poolAnswers = document.getElementById('poll__answers')

xhr.addEventListener('readystatechange', function() {
     if(xhr.readyState === xhr.DONE) {
     let response = JSON.parse(xhr.responseText);
     document.getElementById(`poll__title`).textContent = response.data.title
    // 	console.log(response.data.title)
     let answers = response.data.answers 
	 for (let i =0; i < answers.length; i++) {
        let button = document.createElement('button');
        button.className = "poll__answer";
        button.textContent = answers[i];
        poolAnswers.appendChild(button);
        button.onclick = function() {
	        alert(`Спасибо, ваш голос засчитан!`);
        }	   
	 }
     }

});


