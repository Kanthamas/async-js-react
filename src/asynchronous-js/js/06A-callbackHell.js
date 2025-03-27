"use strict";

console.log("Start");

// Simulating multiple async operations
setTimeout(() => {
	console.log("Step 1");
	setTimeout(() => {
		console.log("Step 2");
		setTimeout(() => {
			console.log("Step 3");
			setTimeout(() => {
				console.log("Step 4 - Final Step");
			}, 1000);
		}, 1000);
	}, 1000);
}, 1000);

console.log("End");
