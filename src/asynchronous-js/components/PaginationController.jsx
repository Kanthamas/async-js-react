import React from "react";

const PaginationControls = ({ page, totalPages, setPage }) => (
	<div className="flex justify-center space-x-4 mt-4">
		<button
			onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
			disabled={page <= 1}
			className="px-4 py-2 bg-amber-700 text-amber-100 cursor-pointer rounded disabled:opacity-50 disabled:cursor-default"
		>
			Previous
		</button>
		<span className="px-4 py-2">
			Page {page} of {totalPages}
		</span>
		<button
			onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
			disabled={page >= totalPages}
			className="px-4 py-2 bg-amber-700 text-amber-100 cursor-pointer rounded disabled:opacity-50 disabled:cursor-default"
		>
			Next
		</button>
		<button
			onClick={() => setPage(1)}
			className="px-4 py-2 text-amber-900 cursor-pointer rounded ring ring-amber-700"
		>
			Home
		</button>
	</div>
);

export default PaginationControls;
