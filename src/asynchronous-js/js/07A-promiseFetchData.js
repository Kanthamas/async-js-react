"use strict";

function fetchData() {
	fetch("https://jsonplaceholder.typicode.com/posts")
		.then((response) => {
			if (!response.ok) {
				throw new Error("Failed to fetch posts");
			}

			return response.json();
		})
		.then((data) => {
			console.log(data);
		})
		.catch((error) => {
			console.log("Error occurred: ", error);
		});
}

fetchData(); 

// fetch("https://jsonplaceholder.typicode.com/posts")
// 	.then((response) => {
// 		console.log(response);
// 	})
// 	.catch((error) => {
// 		console.log("Error occurred: ", error);
// 	});

/* function fetchDataReqres() {
	fetch("https://reqres.in/api/users/2")
		.then((response) => {
			if (!response.ok) {
				throw new Error("Failed to fetch data");
			}
			return response.json();
		})
		.then((data) => {
			// console.log(data)
			console.log(`userId: ${data.data.id}`);
			console.log(`Name: ${data.data.first_name} ${data.data.last_name}`);
			console.log(`Email: ${data.data.email}`);
			console.log(`Avatar Link: ${data.data.avatar}`);
		})
		.catch((error) => {
			console.log("Error occurred: ", error);
		});
}

fetchDataReqres(); */
