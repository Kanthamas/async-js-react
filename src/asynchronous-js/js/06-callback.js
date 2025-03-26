"use strict";

const numbers = [1, 2, 3, 4, 5];

const syncCallback = (num) => {
	console.log(`Number (Sync): ${num}`);
};

const asyncCallback = (num) => {
	setTimeout(() => {
		console.log(`Number <Async>: ${num}`);
	}, 2000);
};

numbers.map(asyncCallback);
numbers.map(syncCallback);
