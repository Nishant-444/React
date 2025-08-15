import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	let [counter, setCounter] = useState(0);

	// let counter = 5;

	const increaseValue = () => {
		setCounter((prevCounter) => prevCounter + 1);
		setCounter((prevCounter) => prevCounter + 1);
		setCounter((prevCounter) => prevCounter + 1);
		setCounter((prevCounter) => prevCounter + 1);
		setCounter((prevCounter) => prevCounter + 1);
	};

	const decreaseValue = () => {
		if (!(counter <= 0)) {
			counter--;
		}
		setCounter(counter);
	};

	const resetValue = () => {
		counter = 0;
		setCounter(counter);
	};

	return (
		<>
			<h1>My Counter Machine</h1>
			<h2>Counter Value: {counter}</h2>
			<h3>Minimum Value : 0</h3>
			<br />

			<button onClick={increaseValue}>Increase Value</button>

			<br />
			<br />

			<button onClick={decreaseValue}>Decrease Value</button>
			<br />
			<br />

			<button onClick={resetValue}>Reset Value</button>
		</>
	);
}

export default App;
