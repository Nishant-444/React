import { useState } from "react";
import "./App.css";

function App() {
	const [color, setColor] = useState("#212121");

	return (
		<>
			<div
				className="w-full h-screen duration-200"
				style={{ backgroundColor: color }}
			>
				<div className="fixed flex flex-wrap justify-center top-4 inset-x-0 px-2">
					<div className="bg-white rounded-full m-1 gap-3 p-4 shadow-xl">
						<button
							className="outline-none px-4 py-1 rounded-full mx-2 bg-violet-600 text-white cursor-pointer hover:opacity-75 "
							onClick={() => setColor("#7c3aed")}
						>
							Violet
						</button>
						<button
							className="outline-none px-4 py-1 rounded-full mx-2 bg-indigo-600 text-white cursor-pointer hover:opacity-75"
							onClick={() => setColor("#4f46e5")}
						>
							Indigo
						</button>
						<button
							className="outline-none px-4 py-1 rounded-full mx-2 bg-blue-600 text-white cursor-pointer hover:opacity-75"
							onClick={() => setColor("#2563eb")}
						>
							Blue
						</button>
						<button
							className="outline-none px-4 py-1 rounded-full mx-2 bg-green-600 text-white cursor-pointer hover:opacity-75"
							onClick={() => setColor("#16a34a")}
						>
							Green
						</button>
						<button
							className="outline-none px-4 py-1 rounded-full mx-2 bg-yellow-600 text-white cursor-pointer hover:opacity-75"
							onClick={() => setColor("#ca8a04")}
						>
							Yellow
						</button>
						<button
							className="outline-none px-4 py-1 rounded-full mx-2 bg-orange-600 text-white cursor-pointer hover:opacity-75"
							onClick={() => setColor("#ea580c")}
						>
							Orange
						</button>
						<button
							className="outline-none px-4 py-1 rounded-full mx-2 bg-red-600 text-white cursor-pointer hover:opacity-75"
							onClick={() => setColor("#dc2626")}
						>
							Red
						</button>
					</div>
				</div>
			</div>{" "}
		</>
	);
}

export default App;
