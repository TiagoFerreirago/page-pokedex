
function convertePokemonToHtml(pokemon){
    return `<li class="pokemon">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class = "type">${type}</li>`).join('')}
                    </ol>

                    <img src="${pokemon.img}" alt="${pokemon.name}">

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
    
    