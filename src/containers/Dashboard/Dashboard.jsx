import PokemonButtons from "../../components/PokemonButtons/PokemonButtons";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { getOnlyUrl } from "../../functions";
import "./Dashboard.scss";
import { useState } from "react";



const Dashboard = ({pokemonData}) => {
  
  let favourites = [];
  

  return (
    <div className="Dashboard">
        {pokemonData? pokemonData.map((pokemon) => {
          return <PokemonCard key={pokemon.id} pokemon={pokemon}/>
        }) : <p>Loading...</p>}
    </div>
  )
}

export default Dashboard
