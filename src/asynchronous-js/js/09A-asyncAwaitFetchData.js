"use strict";

/* async function fetchData() {
	const endpoint = "https://jsonplaceholder.typicode.com/posts";
	try {
		let response = await fetch(endpoint);
		let data = await response.json();
		console.log(data);
	} catch (error) {
		console.log("Error occurred: ", error);
	}
}

fetchData(); */

async function fetchDataReqres() {
	const endpoint = "https://reqres.in/api/users";
	try {
		let response = await fetch(endpoint);
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}
		let data = await response.json();
		console.log(data.data);
	} catch (error) {
		console.log("Error occurred: ", error);
	}
}

fetchDataReqres();
