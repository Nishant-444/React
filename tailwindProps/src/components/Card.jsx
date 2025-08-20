import React from "react";
function Card({title}) {
	return (
		<div className="bg-[#1a1a1a] flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
			<div>
				<img
					className="size-48 shadow-xl rounded-md"
					alt=""
					src="./src/assets/react.svg"
				/>
			</div>
			<div className="flex items-center md:items-start">
				<span className="text-2xl font-medium">{title}</span>
				<span className="font-medium text-sky-500">The Anti-Patterns</span>
				<span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
					<span>No. 4</span>
					<span>·</span>
					<span>2025</span>
				</span>
			</div>
		</div>
	);
}

export default Card;
