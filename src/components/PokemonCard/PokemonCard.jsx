import "./PokemonCard.scss";

const PokemonCard = ({pokemon}) => {
  return (
      <section className="pokemon-card">
        <section>
          <p>{pokemon.id}</p>
          <h1 className="pokemon-card_name" >{pokemon.name}</h1>
        </section>

    
        <img className="pokemon-card_image" src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} />
        <section className="pokemon-card_info">
          <p><strong>Ability: {pokemon.abilities[0].ability.name} </strong></p>
          <p><strong>Base Experience : {pokemon.base_experience}</strong></p>
          <p><strong>Form: {pokemon.forms[0].name} </strong></p>
          <p><strong>Height: {pokemon.height}</strong></p>
          <p><strong>Weight: {pokemon.weight}kg</strong></p>
        </section>
      </section>
  )
}

export default PokemonCard
