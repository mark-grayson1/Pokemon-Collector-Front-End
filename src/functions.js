    export const getOnlyUrl = (apiData) => {
    return apiData.map((item) => 
        item.url
        );
    };

    export const cleanPokemonData = (pokemonData) => {
        const {name, sprites, abilities, base_experience, forms,id, ..._} = pokemonData
        return {name, sprites, abilities, base_experience, forms,id}
    } //dosnt need to be in this file
    