import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./containers/Nav/Nav";
import Dashboard from "./containers/Dashboard/Dashboard";

function App() {
	const [count, setCount] = useState(0);

	return (
		<main className="main">
			<Nav/>
			<Dashboard/>
		</main>
	);
}

export default App;
