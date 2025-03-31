async function getIngredients(mealName) {
	try {
		const response = await fetch(
			`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
		);
		const data = await response.json();

		if (!data.meals) {
			console.log("No meal found.");
			return;
		}

		const meal = data.meals[0];
		const ingredients = [];

		// Extract ingredients and measurements
		for (let i = 1; i <= 20; i++) {
			const ingredient = meal[`strIngredient${i}`];
			const measure = meal[`strMeasure${i}`];

			if (ingredient && ingredient.trim()) {
				ingredients.push(`${measure} ${ingredient}`.trim());
			}
		}

		let instructions = meal.strInstructions || "";
		instructions = instructions
			.split(/\. (?=[A-Z])/g)
			.map((step) => step.trim())
			.filter((step) => step.length > 0);

		console.log("Ingredients:", ingredients);
		console.log("Instructions:", instructions);
		return { ingredients, instructions };
	} catch (error) {
		console.error("Error fetching data:", error);
	}
}

// Example usage
getIngredients("cream_cheese_tart");
