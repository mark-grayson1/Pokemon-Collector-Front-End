import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
	const navigate = useNavigate();
	const [checkingAuth, setCheckingAuth] = useState(true);

	useEffect(() => {
		const checkAuth = async () => {
			// Live API URL
			try {
				const res = await fetch(
					"https://pokemon-collector-backend-production.up.railway.app/login",
					{
						credentials: "include",
						redirect: "manual",
					},
				);

				if (res.status === 200) {
					navigate("/");
				}
			} finally {
				setCheckingAuth(false);
			}
		};

		checkAuth();
	}, [navigate]);

	const loginWithGoogle = () => {
		window.location.href =
			"https://pokemon-collector-backend-production.up.railway.app/oauth2/authorization/google";
	};

	const loginWithGithub = () => {
		window.location.href =
			"https://pokemon-collector-backend-production.up.railway.app/oauth2/authorization/github";
	};

	if (checkingAuth) {
		return (
			<div style={{ textAlign: "center", marginTop: "100px" }}>
				<h2>Checking login...</h2>
			</div>
		);
	}

	return (
		<div style={{ textAlign: "center", marginTop: "100px" }}>
			<h1>Welcome to Pokémon Collector</h1>
			<p>Please login to continue</p>

			<div style={{ marginTop: "20px" }}>
				<button
					onClick={loginWithGoogle}
					style={{ marginRight: "10px", padding: "10px 20px" }}>
					Login with Google
				</button>

				<button
					onClick={loginWithGithub}
					style={{ padding: "10px 20px" }}>
					Login with GitHub
				</button>
			</div>
		</div>
	);
};

export default Landing;
