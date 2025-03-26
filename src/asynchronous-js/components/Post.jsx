import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router";

function Post({ posts }) {
	const { postId } = useParams();
	const [postDetails, setPostDetails] = useState(null);

	useEffect(() => {
		const post = posts.find((p) => p.id === parseInt(postId));
		setPostDetails(post);
	}, [postId, posts]);

	if (!postDetails) {
		return <div className="text-red-600">Post not found</div>;
	}

	return (
		<div className="outline outline-amber-500 flex flex-col justify-center items-center w-1/2 rounded-xl shadow-md shadow-amber-700/50 px-8 py-4">
			<h2 className="my-4 p-4 text-3xl font-poppins">
				Post {postId} : {postDetails.title}
			</h2>
			<p className="p-4 text-amber-950 text-xl">{postDetails.body}</p>
			<Link
				to="/"
				className="my-8 font-semibold text-amber-200 bg-amber-900 px-8 py-2 rounded-lg shadow-md shadow-amber-700/50"
			>
				Back to Posts
			</Link>
		</div>
	);
}

export default Post;
