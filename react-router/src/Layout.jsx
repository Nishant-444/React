import { Outlet, Header, Footer, Home, About, Contact, User } from "./index";

function Layout() {
	return (
		<>
			<Header />
			<User />
			<Home />
			<About />
			<Outlet />
			<Contact />
			<Footer />
		</>
	);
}

export default Layout;
