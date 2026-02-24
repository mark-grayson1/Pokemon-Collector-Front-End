
import "./App.css";
import Nav from "./containers/Nav/Nav";
import Dashboard from "./containers/Dashboard/Dashboard";
import Selected from "./containers/Selected/Selected";
import { getOnlyUrl } from "./functions";
import {Routes,Route} from "react-router-dom";
import { useState,useEffect } from "react";
import { cleanPokemonData } from "./functions";

function App() {

	//https://www.bing.com/search?q=prsomise.all%20json%20example&qs=n&form=QBRE&sp=-1&ghc=1&lq=0&pq=prsomise.all%20json%20example&sc=4-25&sk=&cvid=A2ADFC58C228496BB03E201B0F58EB89

	// What do we want here? 
	// We want 20 pokemon data points (first 20 in the API DB) - we only need the url endpoint for each of them to be collected in an array to start with

	// Create a function that fetches X amount of pokemon
	// Create a function that fetches the date for a single pokemon (this can directly return a clean pokemon data object)
	// Both these function can live in their module
	// Dashboard component will then call Promise.all after having called the fetch X pokemon

  //fetch makeup data from makeup api
  const allPokemonDataUrl = "https://pokeapi.co/api/v2/pokemon/?limit=151";

  //useState to store makeup data
  const [pokemonData, setPokemonData] = useState([]);
  const [favouritePokemon, setFavouritePokemon] = useState([]); //move to dashboard

  //retrieve makeup data from api
  const getPokemons = async () => {
    const response = await fetch(allPokemonDataUrl)
    const pokemonData = await response.json()
	const data = pokemonData.results 

	const pokemonDataUrls = getOnlyUrl(data)

	const pokemonDataArray = await Promise.all(pokemonDataUrls.map(async (url) => {
		const response = await fetch(url)
		const pokemonData = await response.json()
		const cleanedData =  cleanPokemonData(pokemonData)
		return cleanedData
	}));
	
	setPokemonData(pokemonDataArray)
	console.log(pokemonDataArray)
  }

	//useEffect 
	useEffect(() => {
		getPokemons()
	}, [])

	useEffect(() => {
		// Trigger POST request to update favourite pokemon in the backend whenever the favouritePokemon state changes
	}, [favouritePokemon]);


	//put data in dashboard


	return (
		<main className="main">
			<Nav/>
			<Routes>
				pokemonData && <Route path="/" element={<Dashboard pokemonData={pokemonData}/>}   />
				<Route path="selected" element={<Selected/>}   />
			</Routes>
		</main>
	);
}

export default App;
