import React, { useEffect, useState } from "react";

const App03Promise = () => {
	const [log, setLog] = useState([]);
	const [isCooked, setIsCooked] = useState(false);
	const [message, setMessage] = useState("");

	useEffect(() => {
		isCooked
			? setMessage(`Pasta was yummy! 😍`)
			: setMessage(`I'm hungry, Let's cook some pasta! 👩‍🍳`);
	}, [isCooked]);

	const addLog = (newLog) => {
		setLog((prevLog) => [...prevLog, newLog]);
	};

	const wait = (seconds) => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (Math.random() < 0.95) resolve(); // Simulating occasional failures
				else reject(new Error("Something went wrong while cooking!"));
			}, seconds * 1000);
		});
	};

	const startCooking = () => {
		const startCookingTime = performance.now();
		addLog("👨‍🍳 Start cooking 🍳");

		addLog("🔪 Chopping tomatoes and vegetables...");
		wait(0.5)
			.then(() => {
				addLog("🍲 Cooking tomato sauce...");
				return wait(2);
			})
			.then(() => addLog("✅ Tomato sauce cooked, sauce ready!"))
			.then(() => {
				addLog("🥄 Mixing ground meat with spices and shaping meatballs...");
				return wait(0.5);
			})
			.then(() => {
				addLog("🔥 Baking meatballs in the oven...");
				return wait(1);
			})
			.then(() => addLog("✅ Meatballs baked, meatballs ready!"))
			.then(() => {
				addLog("💦 Boiling water for pasta...");
				return wait(0.5);
			})
			.then(() => {
				addLog("♨️ Water boiled, adding pasta 🍝");
				return wait(0.5);
			})
			.then(() => addLog("✅ Pasta cooked, pasta ready!"))
			.then(() => {
				addLog("🍳 Cooking pasta, meatballs, and sauce together...");
				return wait(0.5);
			})
			.then(() => {
				addLog("✅ Pasta with meatballs in tomato sauce ready!");
				addLog("🎉 Pasta is served! 🍽️🍝");
				setIsCooked(true);

				const endCookingTime = performance.now();
				const totalCookingTime = (
					(endCookingTime - startCookingTime) /
					1000
				).toFixed(4);
				addLog(`Total cooking time: ${totalCookingTime} seconds.`);
			})
			.catch((error) => {
				addLog(`❌ Cooking process failed: ${error.message}`);
			});
	};

	const resetCooking = () => {
		setIsCooked(false);
		setLog([]);
	};

	return (
		<div className="flex flex-col items-center h-full">
			<h1 className="text-3xl font-bold my-4">
				Let's Cook Meatballs Pasta! 🍝
			</h1>
			<h2 className="text-xl font-semibold text-emerald-900">
				Non-Blocking Cooking Process (Promise Version)
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
					onClick={resetCooking}
				>
					Reset Cooking 🍽️
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

export default App03Promise;
