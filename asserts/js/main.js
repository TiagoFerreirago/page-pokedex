

function convertePokemonToHtml(pokemon){
    return `<li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        <li class="type">grass</li>
                        <li class="type">poison</li>
                    </ol>

                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">

                </div>
            </li>`;
}
//inserindo na pagina html principal
const pokemonHtml = document.getElementById('pokemonList');
//pokemonHtml.appendChild()


    pokeApi.getPokemons().then((pokemonList) => {
        for (let i = 0; i < pokemonList.length; i++) {
            const pokemon = pokemonList[i];
            pokemonHtml.innerHTML += convertePokemonToHtml(pokemon);    
        }
    })
    