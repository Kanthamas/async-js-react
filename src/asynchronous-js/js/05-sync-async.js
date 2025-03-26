"use strict";

console.log(1);

function logTwo() {
	console.log(2);
}

function logThree() {
	setTimeout(() => {
		console.log(3);
	}, 1000);
}

function logFour(message) {
	logTwo();
	console.log(message);
}

function logFive() {
	setTimeout(() => {
		logFour("Four");
		console.log(5);
	}, 0);
}

function logFiveAgain() {
	setTimeout(() => {
		logFour("Four For Fun");
		console.log(5);
	}, 1000);
}

logThree();
logFour(4);
logFive();
logFiveAgain();

console.log(6);
