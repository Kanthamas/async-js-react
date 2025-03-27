"use strict";
const myPromise = new Promise((resolve, reject) => {
	const success = true;

	if (success) {
		resolve("Operation successful!"); // Resolved with a value
	} else {
		reject("Operation failed!"); // Rejected with an error message
	}
});

async function handlePromise() {
	try {
		const result = await myPromise;
		console.log(result); // Logs: "Operation successful!"
	} catch (error) {
		console.error(error); // Logs: "Operation failed!"
	}
}

handlePromise();
