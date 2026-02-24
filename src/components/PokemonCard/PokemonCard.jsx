import "./PokemonCard.scss";

const PokemonCard = () => {
  return (
      <section className="pokemon-card">
        <h1 className="pokemon-card_name" >Charizard</h1>
        <img className="pokemon-card_image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png" alt="Charizard" />
        <section className="pokemon-card_info">
          <p><strong>Ability: Sticky vernom </strong></p>
          <p><strong>Base Experience</strong></p>
          <p><strong>Form: Blob </strong></p>
          <p><strong>Height: 4m </strong></p>
          <p><strong>Weight: 60kg</strong></p>
        </section>
      </section>
  )
}

export default PokemonCard
