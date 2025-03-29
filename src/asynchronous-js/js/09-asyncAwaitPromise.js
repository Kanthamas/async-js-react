"use strict";

const myPromise = new Promise((resolve, reject) => {
	// const success = Math.random() > 0.5;
	const success = true;

	if (success) {
		resolve("Operation successful! ✅"); 
	} else {
		reject("Operation failed! 😭"); 
	}
});

async function handlePromiseAsyncAwait() {
	try {
		const result = await myPromise;
		console.log(result); 
	} catch (error) {
		console.error(error); 
	}
}

handlePromiseAsyncAwait();
