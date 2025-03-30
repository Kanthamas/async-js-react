import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router";

function User({ users }) {
	const { userId } = useParams();
	const [userDetails, setUserDetails] = useState(null);

	useEffect(() => {
		const user = users.find((user) => user.id === parseInt(userId));

		setUserDetails(user);
	}, [userId, users]);

	if (!userDetails) {
		return (
			<div className="bg-red-300 text-red-900 text-2xl font-semibold flex flex-col justify-center items-center h-full w-full">
				<h2 className="m-4 text-4xl">Sorry, This user is not in our system.</h2>
				<Link
					to="/"
					className="underline underline-offset-8 hover:text-violet-600"
				>
					Back to Home
				</Link>
			</div>
		);
	}

	return (
		<div className="outline outline-amber-500 flex flex-col justify-center items-center w-1/3 rounded-xl shadow-md shadow-amber-700/50 px-8 py-4 font-poppins">
			<img
				src={userDetails.avatar}
				alt={userDetails.first_name}
				className="rounded-full mt-4 shadow-md shadow-amber-700/50 w-[200px]"
			/>
			<h2 className="my-4 p-4 text-3xl font-poppins font-bold">
				{`${userDetails.first_name} ${userDetails.last_name}`}
			</h2>
			<p className="px-4 text-amber-950 text-2xl font-medium">
				{userDetails.email}
			</p>
			<Link
				to="/"
				className="my-8 font-semibold text-amber-200 bg-amber-900 px-8 py-2 rounded-lg shadow-md shadow-amber-700/50"
			>
				Back to Home
			</Link>
		</div>
	);
}

export default User;
