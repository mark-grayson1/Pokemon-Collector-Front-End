import "./App.css";
import Nav from "./containers/Nav/Nav";
import Dashboard from "./containers/Dashboard/Dashboard";
import Selected from "./containers/Selected/Selected";
import Landing from "./containers/Landing/Landing";
import { getOnlyUrl, cleanPokemonData } from "./functions";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const allPokemonDataUrl = "https://pokeapi.co/api/v2/pokemon/?limit=151";

  const [pokemonData, setPokemonData] = useState([]);
  const [isAuthed, setIsAuthed] = useState(null); // null = checking, true/false after

  const location = useLocation();
  const navigate = useNavigate();

  const hideNav = location.pathname === "/landing";

  // 1) Check login status (backend session)
  useEffect(() => {
    fetch("http://localhost:8080/api/users/me", {
      credentials: "include",
    })
      .then((res) => {
        if (res.ok) {
          setIsAuthed(true);
          // if user is on landing but already authed, send them home
          if (location.pathname === "/landing") navigate("/");
        } else {
          setIsAuthed(false);
          // if user tries to access a protected page, send them to landing
          if (location.pathname !== "/landing") navigate("/landing");
        }
      })
      .catch(() => {
        setIsAuthed(false);
        if (location.pathname !== "/landing") navigate("/landing");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 2) Load Pokémon only once authenticated (optional but recommended)
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

  // Optional: while checking auth, render nothing (or a loading message)
  if (isAuthed === null) {
    return <main className="main">Loading...</main>;
  }

  return (
    <main className="main">
      {!hideNav && <Nav />}

      <Routes>
        <Route path="/landing" element={<Landing />} />
        <Route path="/" element={<Dashboard pokemonData={pokemonData} />} />
        <Route path="/selected" element={<Selected />} />

        {/* fallback */}
        <Route path="*" element={<Landing />} />
      </Routes>
    </main>
  );
}

export default App;
