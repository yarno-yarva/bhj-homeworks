const progress = document.getElementById('progress');
let form = document.getElementById('form')


form.addEventListener('submit', (e) => {

    e.preventDefault();

    let xhr = new XMLHttpRequest();
    xhr.upload.onprogress = function(event) {
    	console.log(event.loaded / event.total);
    	//console.log(event.loaded);
        progress.value = event.loaded / event.total;
    }

    //xhr.onload = xhr.onerror = function() {
    //    if (this.status == 200) {
    //        alert('Файл успешно загружен');
    //    } else {
    //        alert('Не удалось загрузить файл');
    //    }
    //}

    let formData = new FormData(form);
    //formData.append("file", form);
    
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php", true);
    xhr.send(formData);
//progress.value = 0.7;

});

