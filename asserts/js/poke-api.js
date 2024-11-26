
const pokeApi = {};
//define a paginação da requisição
//define a quatidade de elementos
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
   .catch((error) => console.error(error)); // Trata possíveis erros

}