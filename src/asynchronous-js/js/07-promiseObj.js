"use strict";

/* const myPromise = new Promise((resolve, reject) => {
  resolve("Success 😁");
	reject("Failed 😭");
});

console.log(myPromise); */

// const myPromise = new Promise((resolve, reject) => {
// 	const success = Math.random() > 0.5;

// 	if (success) {
// 		resolve("Operation successful!"); // Resolved with a value
// 	} else {
// 		reject("Operation failed!"); // Rejected with an error message
// 	}
// });

// console.log(myPromise);

// myPromise
// 	.then((result) => {
// 		console.log(result);
// 	})
// 	.catch((error) => console.error(error));

// myPromise
// 	.then((result) => {
// 		console.log(result);
// 		return new Promise((resolve) => {
// 			setTimeout(() => {
// 				resolve("Next step completed after delay! 😎");
// 			}, 2000);
// 		});
// 	})
// 	.then((nextResult) => {
// 		console.log(nextResult);
// 	})
// 	.catch((error) => console.error(error));

// myPromise
// 	.then((result) => {
// 		console.log(result);
// 	})
// .catch((error) => {
// 	console.error(error);
// });

const myPromise = new Promise((resolve, reject) => {
	// const success = Math.random() > 0.5;
	const success = true;

	if (success) {
		resolve("Operation successful! ✅ "); // Resolved with a value
	} else {
		reject("Operation failed! 😭"); // Rejected with an error message
	}
});

function handlePromiseThenCatch() {
	myPromise
		.then((result) => {
			console.log(result);
		})
		.catch((error) => {
			console.error(error);
		});
}

handlePromiseThenCatch();
