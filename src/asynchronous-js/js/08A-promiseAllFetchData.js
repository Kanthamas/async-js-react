"use strict";

function fetchPosts() {
	return fetch("https://jsonplaceholder.typicode.com/posts").then((res) => {
		if (!res.ok) throw new Error("Failed to fetch posts");
		return res.json();
	});
}

function fetchUsers() {
	return fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
		if (!res.ok) throw new Error("Failed to fetch users");
		return res.json();
	});
}

function fetchComments() {
	return fetch("https://jsonplaceholder.typicode.com/comments").then((res) => {
		if (!res.ok) throw new Error("Failed to fetch comments");
		return res.json();
	});
}

Promise.all([fetchPosts(), fetchUsers(), fetchComments()])
	.then(([posts, users, comments]) => {
		console.log("Posts:", posts[0]);
		console.log("Users:", users[0]);
		console.log("Comments:", comments[0]);
	})
	.catch((error) => {
		console.error("Promise.all rejected: ", error.message);
	});
