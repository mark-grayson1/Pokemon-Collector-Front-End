import "./App.css";
import Nav from "./containers/Nav/Nav";
import Dashboard from "./containers/Dashboard/Dashboard";
import Selected from "./containers/Selected/Selected";
import Login from "./containers/Login/Login";
import { getOnlyUrl, cleanPokemonData } from "./functions";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const allPokemonDataUrl = "https://pokeapi.co/api/v2/pokemon/?limit=151";

  const [pokemonData, setPokemonData] = useState([]);
  const [isAuthed, setIsAuthed] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  const hideNav = location.pathname === "/";

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch(
          "https://pokemon-collector-backend-production.up.railway.app/api/users/me",
          { credentials: "include" },
        );

        if (res.ok) {
          setIsAuthed(true);
          if (location.pathname === "/") navigate("/dashboard");
        } else {
          setIsAuthed(false);
          if (location.pathname !== "/") navigate("/");
        }
      } catch (e) {
        setIsAuthed(false);
        if (location.pathname !== "/") navigate("/");
      }
    };

    checkAuth();
  }, [location.pathname, navigate]);

  useEffect(() => {
    if (isAuthed !== true) return;

    const getPokemons = async () => {
      const response = await fetch(allPokemonDataUrl);
      const pokemonData = await response.json();
      const data = pokemonData.results;

      const pokemonDataUrls = getOnlyUrl(data);

      const pokemonDataArray = await Promise.all(
        pokemonDataUrls.map(async (url) => {
          const response = await fetch(url);
          const pokemonData = await response.json();
          return cleanPokemonData(pokemonData);
        }),
      );

      setPokemonData(pokemonDataArray);
    };

    getPokemons();
  }, [isAuthed]);

  if (isAuthed === null) {
    return <main className="main">Loading...</main>;
  }

  return (
    <main className="main">
      {!hideNav && <Nav />}

      {/* Clarify Login pgae and landing page */}
      {/* user arrive on URL/ and see login buttons */}
      {/* Once logged in user sees dashboard */}
      {/* Fix the Auth logic to provide correct URL build up for this flow */}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={<Dashboard pokemonData={pokemonData} />}
        />
        <Route path="/selected" element={<Selected />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </main>
  );
}

export default App;
