
function convertPokemonTypesToLi(pokemonTypes){
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}
function convertePokemonToHtml(pokemon){
    return `<li class="pokemon">
                <span class="number">#${pokemon.order}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${convertPokemonTypesToLi(pokemon.types).join('')}
                    </ol>

                    <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">

                </div>
            </li>`;
}
//inserindo na pagina html principal
const pokemonHtml = document.getElementById('pokemonList');
//pokemonHtml.appendChild()


    pokeApi.getPokemons().then((pokemonList =[]) => {
        //map substitui o for na conversao

        const listObjectToHttp = pokemonList.map((pokemon) => convertePokemonToHtml(pokemon)).join('');
          
            // join concatenar elementos
      
        pokemonHtml.innerHTML =  listObjectToHttp;
      
        console.log(pokemonHtml);

    }
)
    
    