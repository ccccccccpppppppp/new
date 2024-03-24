let start = Date.now();
let timer = setInterval(function() {
	let timePassed = Date.now() - start;
	if (timePassed >= 5000){
		clearInterval(timer);
		retrun;
	}
	draw(timePassed);
}, 1);

function draw(timePassed) {
	train.style.left = timePassed / 0.5 + 'px'
	train.style.top = timePassed / 0.5 + 'px'
}
