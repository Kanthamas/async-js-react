"use strict"

console.log(1);

function logTwo() {
	console.log(2);
}

function logTwoAndThree(message) {
	logTwo();
	console.log(message);
}

logTwoAndThree(3);

console.log(4);
