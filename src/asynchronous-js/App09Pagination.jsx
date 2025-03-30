import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Post from "./components/Post.jsx";
import PostList from "./components/PostList.jsx";
import PaginationControls from "./components/PaginationController.jsx";
import NotFound from "./components/NotFound.jsx";

function App09Pagination() {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [page, setPage] = useState(1);
	const perPage = 10;
	const totalPages = 10;

	useEffect(() => {
		const BASE_URL = "https://jsonplaceholder.typicode.com/";
		const controller = new AbortController();
		const fetchOptions = { signal: controller.signal, method: "GET" };

		const fetchPosts = async () => {
			try {
				setLoading(true);

				const response = await fetch(
					`${BASE_URL}/posts?_page=${page}&_limit=${perPage}`,
					fetchOptions
				);

				if (!response.ok) throw new Error("Failed to fetch posts");

				const data = await response.json();

				setPosts(data);
			} catch (error) {
				if (error.name !== "AbortError") setError(error.message);
			} finally {
				page === 1
					? setTimeout(() => setLoading(false), 500)
					: setLoading(false);
			}
		};

		fetchPosts();
		return () => controller.abort();
	}, [page]);

	if (loading) return <div className="italic">Loading data...</div>;
	if (error) return <div className="text-red-600">Error: {error}</div>;

	const router = createBrowserRouter([
		{
			path: "/",
			element: (
				<div className="flex flex-col justify-center items-center w-full max-h-screen">
					<PostList posts={posts} />
					<PaginationControls
						page={page}
						totalPages={totalPages}
						setPage={setPage}
					/>
				</div>
			),
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

export default App09Pagination;
