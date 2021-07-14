let boxes = document.querySelectorAll('.box');
let addBoxes = document.querySelectorAll('.addBox');
let elements = document.querySelectorAll('.element');

for (let box of boxes) {
	box.onclick = function () {
		box.classList.toggle('boxColored')
	};
};

for (let addBox of addBoxes) {
	addBox.onclick = function () {
		addBox.classList.toggle('addBoxColored')
	};
};

for (let element of elements) {
	element.onmouseover = function () {
		element.classList.add('elementHop')
	};
};

for (let element of elements) {
	element.onmouseout = function () {
		element.classList.remove('elementHop')
	};
};