const pokemonHtml = document.getElementById('pokemonList');
const loadMore = document.getElementById('loadMore');
const limit =5;
let offset = 0;
let maxRecords = 151;

function convertePokemonToHtml(pokemon){
    return `<li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class = "type ${type}">${type}</li>`).join('')}
                    </ol>

                    <img src="${pokemon.img}" alt="${pokemon.name}">

                </div>
            </li>`;
}

function loadPokemonItens(offset,limit){


    pokeApi.getPokemons(offset,limit).then((pokemonList =[]) => {
        //map substitui o for na conversao

        const listObjectToHttp = pokemonList.map((pokemon) => convertePokemonToHtml(pokemon)).join('');
        // join concatenar elementos
        //inserindo na pagina html principal
        //pokemonHtml.appendChild()
        pokemonHtml.innerHTML +=  listObjectToHttp;
    }
)
    
}
loadPokemonItens(offset, limit);

loadMore.addEventListener('click', () => {
    offset += limit

    const recordNextPage = offset + limit;

    if(recordNextPage >= maxRecords){
        const newLimit = maxRecords - offset;
        loadPokemonItens(offset, newLimit);

        loadMore.parentElement.removeChild(loadMore);
    }

    else{
        loadPokemonItens(offset, limit);
    }
   
})