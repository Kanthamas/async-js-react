import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import User from "./components/User.jsx";
import UserList from "./components/UserList.jsx";
import NotFound from "./components/NotFound";

function App08ReqResFetchData() {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchData = async () => {
		try {
			const endpoint = "https://reqres.in/api/users";
			const response = await fetch(endpoint);
			if (!response.ok) {
				throw new Error("Failed to fetch data");
			}
			const data = await response.json();
			setUsers(data.data);
			setLoading(false);
		} catch (error) {
			setError(error.message);
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	if (loading) {
		return <div className="italic">Loading data...</div>;
	}

	if (error) {
		return (
			<div className="flex flex-col justify-center items-center">
				<h2 className="text-red-600">Something went wrong!</h2>
				<p className="text-red-600">Please contact support@support.com</p>
			</div>
		);
	}

	const router = createBrowserRouter([
		{
			path: "/",
			element: <UserList users={users} />,
		},
		{
			path: "/users/:userId",
			element: <User users={users} />,
		},
		{
			path: "*",
			element: <NotFound />,
		},
	]);

	return <RouterProvider router={router} />;
}

export default App08ReqResFetchData;
