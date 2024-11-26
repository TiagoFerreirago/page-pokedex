//define a paginação da requisição
const offset = 0;
//define a quatidade de elementos
const limit =10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
//processamento assicrono
//o fetch faz a promessa de retorna um responta

function convertePokemonToHtml(pokemon){
    return
    `<li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        <li class="type">grass</li>
                        <li class="type">poison</li>
                    </ol>

                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">

                </div>
            </li>`
}
//inserindo na pagina html principal
const pokemonHtml = document.getElementById('pokemonList');
//pokemonHtml.appendChild()

fetch(url)
     //console.log(response);
    //converte os dados em stream para json
    //.then(function (response){
    //ero function se  é uma função anonima
    //se o retorno tiver apenas 1 linha nao precisa de corpo
    .then((response) => response.json())
    .then((jsonBody) => (jsonBody.results))
    .then((pokemonList) => {

        for (let i = 0; i < pokemonList.length; i++) {
            const pokemon = pokemonList[i];
            pokemonHtml.innerHTML += convertePokemonToHtml(pokemon)    
        }
    })
    .catch((error) => console.error(error)); 
    