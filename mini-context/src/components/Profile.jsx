import { useContext } from "react";
import UserContext from "../context/UserContext";
function Profile() {
	const { user } = useContext(UserContext);

	if (!user) {
		return <h1>Not Logged In</h1>;
	}
	return (
		<div className="">
			Profile: {user.username}
			<h1>More Components</h1>
		</div>
	);
}

export default Profile;
