import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
	return (
		<>
			<h1>Hello this is MYAPP FUNCTION</h1>
		</>
	);
}

const ReactElement = {
	type: "a",
	props: {
		href: "https://nishantsharma.vercel.app",
		target: "_blank",
	},
	children: "Click me to visit my portfolio",
};

const user = "Hail Lord Nishant";

const anotherElement = (
	<a href="https://nishantsharma.vercel.app" target="_blank">
		Visit my Portfolio
	</a>
);

const reactElement = React.createElement(
	"a",
	{
		href: "https://nishantsharma.vercel.app",
		target: "_blank",
	},
	"Click me to visit my Portfolio",
	" ",
	anotherElement
);

createRoot(document.getElementById("root")).render(reactElement);
