"use strict";

async function fetchData() {
	const endpoint = "https://jsonplaceholder.typicode.com/posts";
	try {
		let response = await fetch(endpoint);
		let data = await response.json();
		console.log(data);
	} catch (error) {
		console.log("Error occurred: ", error);
	}
}

fetchData();
