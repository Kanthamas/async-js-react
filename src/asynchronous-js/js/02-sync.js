"use strict";

function longRunningTask() {
	let count = 0;
	for (let i = 0; i < 1e9; i++) {
		count = count + i;
	}
	console.log(count);
	console.log("Long task done!");
}

function importantTask() {
	console.log("Important Task!!!!");
}

longRunningTask();
importantTask();
