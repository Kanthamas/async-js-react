// PostList.jsx
import React from "react";
import { Link } from "react-router";

const PostList = ({ posts }) => {
	return (
		<div className="flex flex-col justify-center items-center w-8/10 min-h-screen text-amber-950">
			<h1 className="font-poppins text-4xl py-4 font-bold">🌏 Fetched Posts</h1>
			<ul className="font-medium grid grid-cols-3 lg:grid-cols-5 grid-flow-row">
				{posts.map((post) => (
					<Link
						to={`/posts/${post.id}`}
						className="cursor-pointer"
					>
						<li
							key={post.id}
							className="outline outline-amber-700 rounded-lg shadow-md shadow-amber-600/90 p-4 m-4 h-40 lg:h-60"
						>
							<h3>
								Post {post.id} : {post.title}
							</h3>
						</li>
					</Link>
				))}
			</ul>
		</div>
	);
};

export default PostList;
