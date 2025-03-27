async function fetchData() {
	try {
		const response = await fetch(
			"https://jsonplaceholder.typicode.com/todos/1"
		);

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = await response.json();
		onSuccess(data);
	} catch (error) {
		onFailure(error);
	} finally {
		console.log("Fetch operation completed.");
	}
}

function onSuccess(data) {
	console.log("Data fetched successfully:", data);
}

function onFailure(error) {
	console.error("Error fetching data:", error.message);
}

fetchData();
