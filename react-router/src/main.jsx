import "./index.css";
import {
	Layout,
	Home,
	About,
	User,
	Github,
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
	createRoot,
	StrictMode,
} from "./index";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route path="" element={<Home />} />
			<Route path="about" element={<About />} />
			<Route path="user/" element={<User />}>
				<Route path=":userid" element={<User />} />
			</Route>
			<Route path="*" element={<Github />} />
		</Route>
	)
);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
