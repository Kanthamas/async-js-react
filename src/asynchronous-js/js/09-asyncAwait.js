"use strict";

function orderPizza() {
	return new Promise((resolve, reject) => {
		let pizzaReady = true;
		setTimeout(() => {
			if (pizzaReady) {
				resolve("Pizza is delivered! 🍕");
			} else {
				reject("Sorry, we ran out of ingredients! 😢");
			}
		}, 2000);
	});
}

async function getPizza() {
	try {
		const message = await orderPizza();
		console.log("Success:", message);
	} catch (error) {
		console.error("Error:", error);
	} finally {
		console.log("Order process complete. ✅");
	}
}

getPizza();
