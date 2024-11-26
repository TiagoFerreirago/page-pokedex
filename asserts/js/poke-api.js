
const pokeApi = {};

function convertDetailToPokemon(pokeDetail){
    const pokemom = new Pokemon();
    pokemom.name = pokeDetail.name;
    pokemom.number = pokeDetail.id;
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
    const[type] = types; // pegando o primeira posição
    pokemom.types = types;
    pokemom.type =  type;
    pokemom.img = pokeDetail.sprites.other.dream_world.front_default;

    return pokemom;
}

//define a paginação da requisição
//define a quatidade de elementos
pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
  //o fetch faz a promessa de retorna um responta

    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    return fetch(url)
    //console.log(response);
   //converte os dados em stream para json
   //.then(function (response){
   //ero function se  é uma função anonima
   //se o retorno tiver apenas 1 linha nao precisa de corpo
   .then((response) => response.json()) // Converte os dados em JSON
   .then((jsonBody) => jsonBody.results) // Extrai a lista de Pokémons
   .then((pokemons) => pokemons.map((pokemon) => pokeApi.getPokemonDetail(pokemon)))//pegando os atributos
   .then((detailRequests) => Promise.all(detailRequests))
   .then((result) => result)

   .catch((error) => console.error(error)); // Trata possíveis erros

}

