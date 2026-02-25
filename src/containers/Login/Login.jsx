import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const loginWithGoogle = () => {
    window.location.href =
      "https://pokemon-collector-backend-production.up.railway.app/oauth2/authorization/google";
  };

  const loginWithGithub = () => {
    window.location.href =
      "https://pokemon-collector-backend-production.up.railway.app/oauth2/authorization/github";
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Welcome to Pokémon Collector</h1>
      <p>Please login to continue</p>

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={loginWithGoogle}
          style={{ marginRight: "10px", padding: "10px 20px" }}
        >
          Login with Google
        </button>

        <button onClick={loginWithGithub} style={{ padding: "10px 20px" }}>
          Login with GitHub
        </button>
      </div>
    </div>
  );
};

export default Login;
