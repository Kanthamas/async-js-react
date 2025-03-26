import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import PostList from "./components/PostList";
import Post from "./components/Post";
import NotFound from "./components/NotFound";

function App07AsyncAwaitFetchData() {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	// Fetch posts function
	const fetchData = async () => {
		try {
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/posts"
			);
			if (!response.ok) {
				throw new Error("Failed to fetch posts");
			}
			const data = await response.json();
			setPosts(data);
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
		return <div className="italic">Loading posts...</div>;
	}

	if (error) {
		return <div className="text-red-600">Error: {error}</div>;
	}

	const router = createBrowserRouter([
		{
			path: "/",
			element: <PostList posts={posts} />,
		},
		{
			path: "/posts/:postId",
			element: <Post posts={posts} />,
		},
		{
			path: "*",
			element: <NotFound />,
		},
	]);

	return <RouterProvider router={router} />;
}

export default App07AsyncAwaitFetchData;
