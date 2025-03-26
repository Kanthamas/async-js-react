import React, { useState } from "react";

const mockData = [
	{ id: 1, name: "John", role: "Developer 👨‍💻" },
	{ id: 2, name: "Bob", role: "Project Manager 👷‍♂️" },
	{ id: 3, name: "Mary", role: "QA Engineer 🕵️‍♀️" },
];

const App02ACallback = () => {
	const [message, setMessage] = useState("");

	// Synchronous callback using .map()
	const syncRender = mockData.map((user) => {
		return (
			<li
				className="text-2xl font-medium py-4"
				key={user.id}
			>
				{user.name} is a {user.role}.
			</li>
		);
	});

	// Asynchronous callback triggered by a button click
	const handleAsyncClick = (user) => {
		setTimeout(() => {
			setMessage(`Hello, ${user.name}  the ${user.role}!`);
		}, 1000);
	};

	return (
		<div className="text-center p-8 font-inter text-slate-700">
			<h2 className="text-4xl font-bold mb-8 p-8 rounded-md outline outline-fuchsia-800 text-fuchsia-800">
				Sync and Async Callbacks
			</h2>
			<h3 className="my-4 text-2xl font-semibold">Synchronous Rendering:</h3>
			<ul className="p-4">{syncRender}</ul>

			<div className="my-8 h-1 w-full bg-fuchsia-800"></div>

			<h3 className="my-4 text-2xl font-semibold text-indigo-800">
				Asynchronous Callback:
			</h3>
			<div className="flex gap-8">
				{mockData.map((user) => (
					<button
						className="cursor-pointer my-4 text-2xl font-semibold bg-indigo-800 text-white px-8 py-2 rounded-md shadow-md hover:bg-indigo-400"
						key={user.id}
						onClick={() => handleAsyncClick(user)}
					>
						Greet {user.name}
					</button>
				))}
			</div>

			{message && (
				<p className="text-indigo-800 font-bold text-3xl py-4 italic">
					{message}
				</p>
			)}
		</div>
	);
};

export default App02ACallback;
