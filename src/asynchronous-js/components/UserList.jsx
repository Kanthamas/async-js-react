// PostList.jsx
import React from "react";
import { Link } from "react-router";

const UserList = ({ users }) => {
	return (
		<div className="flex flex-col justify-center items-center w-full min-h-screen text-blue-100 ont-poppins bg-blue-950">
			<ul className="font-medium grid grid-cols-3 gap-8">
				{users.map((user) => (
					<li
						className="outline outline-blue-700 rounded-md shadow-md shadow-blue-600/90 px-8 py-4 h-[300px] flex flex-col justify-center items-center"
						key={user.id}
					>
						<img
							src={user.avatar}
							alt={user.first_name}
							className="rounded-full shadow-md shadow-blue-800/90"
						/>
						<h3 className="font-poppins py-3 font-bold text-2xl">
							{user.first_name} {user.last_name}
						</h3>

						<Link
							to={`/users/${user.id}`}
							className="cursor-pointer text-blue-200 font-medium"
						>
							More Info
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default UserList;
