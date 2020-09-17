const clickCount = document.getElementById("clicker__counter");
const clickImage = document.getElementById("cookie");
const clickSpeed = document.getElementById("click__speed");
let arr = [];
let time = 0;

clickImage.onclick = function() {
	clickCount.textContent = Number(clickCount.textContent) + 1;
	if (clickImage.width == 200) {
		clickImage.width = 250;
	} else {
		clickImage.width = 200;
	}
	if (time == 0) {
		time = Date.now()
	} else {
		arr.push((Date.now() - time) / 1000);
		time = Date.now();
		let average = arr.reduce((a, b) => (a + b)) / arr.length;
        clickSpeed.textContent = (1/average).toFixed(2);
	}
}
