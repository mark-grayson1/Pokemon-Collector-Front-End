import NavButton from "../../components/NavButton/NavButton";
import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
	const handleLogout = async () => {
		try {
			await fetch(
				"https://pokemon-collector-backend-production.up.railway.app/oauth2/authorization/logout",
				{
					method: "POST",
					credentials: "include",
				},
			);
		} catch (error) {
			console.error("Logout failed:", error);
		} finally {
			window.location.href = "/landing";
		}
	};

	return (
		<div className="Nav">
			<section className="Nav_logo">
				<img
					className="Nav_img"
					src="https://www.freepnglogos.com/uploads/pokemon-logo-text-png-7.png"
					alt="Pokemon Logo"
				/>
			</section>

			<section className="Nav_menu">
				<Link to="/">
					<NavButton name="Dashboard" />
				</Link>

				<Link to="/selected">
					<NavButton name="Selected" />
				</Link>

				{}
				<button
					type="button"
					onClick={handleLogout}
					className="Nav_logoutBtn">
					<NavButton name="Logout" />
				</button>
			</section>

			<section className="Nav_user">User</section>
		</div>
	);
};

export default Nav;
