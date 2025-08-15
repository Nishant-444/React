function customRender(reactElement, container) {
	const domElement = document.createElement(reactElement.type);
	domElement.innerHTML = reactElement.children;

	/* domElement.setAttribute("href", reactElement.props.href);
	domElement.setAttribute("target", reactElement.props.target); */
	//very repetitive for multiple attribute so use a loop

	for (const prop in reactElement.props) {
		if (prop === "children") {
			continue;
		}
		domElement.setAttribute(prop, reactElement.props[prop]);
	}
	container.appendChild(domElement);
}

const reactElement = {
	type: "a",
	props: {
		href: "https://nishantsharma.vercel.app",
		target: "_blank",
	},
	children: "Click me to visit my portfolio",
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
