import React, { useEffect, useState } from "react";

const App05AsyncAwaitWithClearTimeOut = () => {
	const [log, setLog] = useState([]);
	const [isCooked, setIsCooked] = useState(false);
	const [message, setMessage] = useState("");
	const [timeouts, setTimeouts] = useState([]);

	useEffect(() => {
		isCooked
			? setMessage(`Pasta was yummy! 😍`)
			: setMessage(`I'm hungry, Let's cook some pasta! 👩‍🍳`);
	}, [isCooked]);

	const addLog = (newLog) => {
		setLog((prevLog) => [...prevLog, newLog]);
	};

	const wait = (seconds) => {
		return new Promise((resolve) => {
			const timeoutId = setTimeout(resolve, seconds * 1000);
			setTimeouts((prevTimeouts) => [...prevTimeouts, timeoutId]);
		});
	};

	const startCooking = async () => {
		const startCookingTime = performance.now();
		addLog("👨‍🍳 Start cooking 🍳");

		// Cooking Step 1: 🍅 Sauce process
		addLog("🔪 Chopping tomatoes and vegetables...");
		await wait(0.5);
		addLog("🍲 Cooking tomato sauce...");
		await wait(2);
		addLog("✅ Tomato sauce cooked, sauce ready!");

		// Cooking Step 2: 🥩 Meatball process
		addLog("🥄 Mixing ground meat with spices and shaping meatballs...");
		await wait(0.5);
		addLog("🔥 Baking meatballs in the oven...");
		await wait(1);
		addLog("✅ Meatballs baked, meatballs ready!");

		// Cooking Step 3: 🍝 Pasta process
		addLog("💦 Boiling water for pasta...");
		await wait(0.5);
		addLog("♨️ Water boiled, adding pasta 🍝");
		await wait(0.5);
		addLog("✅ Pasta cooked, pasta ready!");

		// Cooking Step 4: 🔄 Final cooking process
		addLog("🍳 Cooking pasta, meatballs, and sauce together...");
		await wait(0.5);
		addLog("✅ Pasta with meatballs in tomato sauce ready!");

		// 🍽️ Serving
		addLog("🎉 Pasta is served! 🍽️🍝");
		setIsCooked(true);

		const endCookingTime = performance.now();
		const totalCookingTime = (
			(endCookingTime - startCookingTime) /
			1000
		).toFixed(4);
		addLog(`Total cooking time: ${totalCookingTime} seconds.`);
	};

	const clearAllTimeouts = () => {
		timeouts.forEach((timeoutId) => {
			clearTimeout(timeoutId);
		});
		setTimeouts([]);
	};

	const stopCooking = () => {
		clearAllTimeouts();
		setIsCooked(false);
		setLog([]);
	};

	return (
		<div className="flex flex-col items-center h-full">
			<h1 className="text-3xl font-bold my-4">
				Let's Cook Meatballs Pasta! 🍝
			</h1>
			<h2 className="text-xl font-semibold text-emerald-900">
				Non-Blocking Cooking Process (Async/Await Version and ClearTimeout)
			</h2>
			<p className="mt-4 italic">{message}</p>
			<div className="flex gap-8">
				<button
					className="bg-emerald-300 text-emerald-950 px-8 py-2 my-4 rounded-xl shadow-md shadow-emerald-950/50 hover:text-emerald-300 hover:bg-emerald-950"
					onClick={startCooking}
				>
					Start Cooking 🍳
				</button>

				<button
					className="bg-red-300 text-red-950 px-8 py-2 my-4 rounded-xl shadow-md shadow-red-950/50 hover:text-red-300 hover:bg-red-950"
					onClick={stopCooking}
				>
					STOP Cooking 🍽️
				</button>
			</div>

			<div>
				{log.map((logMessage, index) => (
					<div
						className="m-4 text-xl font-medium"
						key={index}
					>
						{logMessage}
					</div>
				))}
			</div>
		</div>
	);
};

export default App05AsyncAwaitWithClearTimeOut;
