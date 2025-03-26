"use strict";

const pizza = new Promise((resolve) =>
	setTimeout(() => resolve("🍕 Pizza is ready!"), 3000)
);
const drink = new Promise((resolve) =>
	setTimeout(() => resolve("🥤 Drink is ready!"), 2000)
);
const dessert = new Promise((resolve) =>
	setTimeout(() => resolve("🍰 Dessert is ready!"), 1000)
);

Promise.all([pizza, drink, dessert])
	.then((values) => {
		console.log("All items are ready:", values);
	})
	.catch((error) => {
		console.error("One of the orders failed!", error);
	});
