import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
	const [length, setLength] = useState(8);
	const [numberAllowed, setNumberAllowed] = useState(false);
	const [charAllowed, setCharAllowed] = useState(false);
	const [password, setPassword] = useState("");

	const passwordRef = useRef(null);

	const passwordGenerator = useCallback(() => {
		let pass = "";
		let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
		if (numberAllowed) str += "1234567890";
		if (charAllowed) str += "!@#$%^&*{}[]:;~`";

		for (let i = 0; i < length; i++) {
			let char = Math.floor(Math.random() * str.length);
			pass += str.charAt(char);
		}
		setPassword(pass);
	}, [length, numberAllowed, charAllowed, setPassword]);

	const copyPasswordToClipboard = useCallback(() => {
		passwordRef.current?.select();
		passwordRef.current?.setSelectionRange(0, 32);

		window.navigator.clipboard.writeText(password);
	}, [password]);

	useEffect(() => {
		passwordGenerator();
	}, [length, numberAllowed, charAllowed, passwordGenerator]);

	return (
		<>
			<div className="bg-[beige] p-6 m-5 rounded-2xl shadow-lg max-w-md mx-auto">
				<h1 className="text-2xl font-bold mb-4 text-center">
					Password Generator
				</h1>

				<div className="flex items-center mb-4">
					<input
						type="text"
						ref={passwordRef}
						value={password}
						className="bg-white border w-full p-2 rounded-l-lg"
						placeholder="Generated password"
						readOnly
					/>
					<button
						className="bg-amber-400 hover:bg-amber-500 text-white px-4 py-2 rounded-r-lg border-1 border-black cursor-pointer active:opacity-75"
						onClick={copyPasswordToClipboard}
					>
						Copy
					</button>
				</div>

				<div className="mb-4">
					<label className="block mb-1 font-medium">Length: {length}</label>
					<input
						type="range"
						min={8}
						max={32}
						value={length}
						onChange={(e) => setLength(parseInt(e.target.value))}
						className="w-full cursor-pointer"
					/>
				</div>

				<div className="flex items-center justify-between mb-4">
					<label className="flex items-center gap-2">
						<input
							type="checkbox"
							defaultChecked={numberAllowed}
							checked={numberAllowed}
							id="numberInput"
							onChange={() => {
								setNumberAllowed((prev) => !prev);
							}}
						/>
						Include Numbers
					</label>
					<label className="flex items-center gap-2">
						<input
							type="checkbox"
							id="charInput"
							checked={charAllowed}
							onChange={() => {
								setCharAllowed((prev) => !prev);
							}}
						/>
						Include Characters
					</label>
				</div>

				<button
					onClick={passwordGenerator}
					className="w-full  bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-lg font-semibold"
				>
					Generate Password
				</button>
			</div>
		</>
	);
}

export default App;
