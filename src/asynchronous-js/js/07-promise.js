"use strict";

const myPromise = new Promise((resolve, reject) => {
	let pizzaReady = true;

	setTimeout(() => {
		if (pizzaReady) {
			resolve("Pizza is delivered! 🍕");
		} else {
			reject("Sorry, we ran out of ingredients! 😢");
		}
	}, 2000);
});

console.log(myPromise);

myPromise
	.then((message) => {
		console.log("Success:", message);
	})
	.catch((error) => {
		console.error("Error:", error);
	})
	.finally(() => {
		console.log("Order process complete. ✅");
	});

// Chaining Promises
/* function orderPizza() {
	return new Promise((resolve) => {
		setTimeout(() => resolve("Pizza is ready! 🍕"), 2000);
	});
}

function orderDrink() {
	return new Promise((resolve) => {
		setTimeout(() => resolve("Drink is ready! 🥤"), 1000);
	});
} */

/* orderPizza()
	.then((pizza) => {
		console.log(pizza);
		return orderDrink();
	})
	.then((drink) => {
		console.log(drink);
	})
	.catch((error) => {
		console.error("Something went wrong!", error);
	})
	.finally(() => {
		console.log("Enjoy your meal! 😋");
	});
 */
