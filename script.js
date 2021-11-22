const yesButton = document.querySelector('.yes'),
	noButton = document.querySelector('.no'),
	yesAnswer = document.querySelector('.yes-answer-box'),
	noAnswer = document.querySelector('.no-answer-box');
let x, y, leftPos, topPos = 0;
yesButton.addEventListener("mouseover", function () {
	x = Math.floor(Math.random() * 95);
	y = Math.floor(Math.random() * 95);
	leftPos = x.toString();
	topPos = y.toString();
	yesButton.style.left = leftPos + "%";
	yesButton.style.top = topPos + "%";
});

yesButton.addEventListener("click", () => {
	yesAnswer.style.display = "block";
});

noButton.addEventListener("click", () => {
	noAnswer.style.display = "block";
})