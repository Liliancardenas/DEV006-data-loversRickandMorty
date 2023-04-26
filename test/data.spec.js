import { generosFiltro, estadoVidaFiltro, todasLasEspecies, sortAll } from "../src/data.js";




const resultadoEsperadoGenero = {
  created: "2017-11-04T19:09:56.428Z",
  episode: ['https://rickandmortyapi.com/api/episode/6', 'https://rickandmortyapi.com/api/episode/7', 'https://rickandmortyapi.com/api/episode/8', 'https://rickandmortyapi.com/api/episode/9', 'https://rickandmortyapi.com/api/episode/10', 'https://rickandmortyapi.com/api/episode/11', 'https://rickandmortyapi.com/api/episode/12', 'https://rickandmortyapi.com/api/episode/14', 'https://rickandmortyapi.com/api/episode/15', 'https://rickandmortyapi.com/api/episode/16', 'https://rickandmortyapi.com/api/episode/17', 'https://rickandmortyapi.com/api/episode/18', 'https://rickandmortyapi.com/api/episode/19', 'https://rickandmortyapi.com/api/episode/20', 'https://rickandmortyapi.com/api/episode/21', 'https://rickandmortyapi.com/api/episode/22', 'https://rickandmortyapi.com/api/episode/23', 'https://rickandmortyapi.com/api/episode/24', 'https://rickandmortyapi.com/api/episode/25', 'https://rickandmortyapi.com/api/episode/26', 'https://rickandmortyapi.com/api/episode/27', 'https://rickandmortyapi.com/api/episode/29', 'https://rickandmortyapi.com/api/episode/30', 'https://rickandmortyapi.com/api/episode/31'],
  gender: "Female",
  id: 3,
  image: "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/3.jpeg",
  location: {name: 'Earth (Replacement Dimension)', url: 'https://rickandmortyapi.com/api/location/20'},
  name: "Summer Smith",
  origin: {name: 'Earth (Replacement Dimension)', url: 'https://rickandmortyapi.com/api/location/20'},
  species: "Human",
  status: "Alive",
  type: "",
  url:"https://rickandmortyapi.com/api/character/3"
}
  


describe("test funcio genero", () => {
  it("filtrar female", () => {
    expect(generosFiltro("Female")[0]).toEqual(resultadoEsperadoGenero);
  });

});

const resultadoEsperadoStatus = {
  created: "2017-11-04T18:48:46.250Z",
  episode: ['https://rickandmortyapi.com/api/episode/1', 'https://rickandmortyapi.com/api/episode/2', 'https://rickandmortyapi.com/api/episode/3', 'https://rickandmortyapi.com/api/episode/4', 'https://rickandmortyapi.com/api/episode/5', 'https://rickandmortyapi.com/api/episode/6', 'https://rickandmortyapi.com/api/episode/7', 'https://rickandmortyapi.com/api/episode/8', 'https://rickandmortyapi.com/api/episode/9', 'https://rickandmortyapi.com/api/episode/10', 'https://rickandmortyapi.com/api/episode/11', 'https://rickandmortyapi.com/api/episode/12', 'https://rickandmortyapi.com/api/episode/13', 'https://rickandmortyapi.com/api/episode/14', 'https://rickandmortyapi.com/api/episode/15', 'https://rickandmortyapi.com/api/episode/16', 'https://rickandmortyapi.com/api/episode/17', 'https://rickandmortyapi.com/api/episode/18', 'https://rickandmortyapi.com/api/episode/19', 'https://rickandmortyapi.com/api/episode/20', 'https://rickandmortyapi.com/api/episode/21', 'https://rickandmortyapi.com/api/episode/22', 'https://rickandmortyapi.com/api/episode/23', 'https://rickandmortyapi.com/api/episode/24', 'https://rickandmortyapi.com/api/episode/25', 'https://rickandmortyapi.com/api/episode/26', 'https://rickandmortyapi.com/api/episode/27', 'https://rickandmortyapi.com/api/episode/28', 'https://rickandmortyapi.com/api/episode/29', 'https://rickandmortyapi.com/api/episode/30', 'https://rickandmortyapi.com/api/episode/31'],
  gender: "Male",
  id: 1,
  image: "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/1.jpeg",
  location: {name: 'Earth (Replacement Dimension)', url: 'https://rickandmortyapi.com/api/location/20'},
  name: "Rick Sanchez",
  origin: {name: 'Earth (C-137)', url: 'https://rickandmortyapi.com/api/location/1'},
  species: "Human",
  status: "Alive",
  type: "",
  url: "https://rickandmortyapi.com/api/character/1"
}


describe("test funcion Status", () => {
  it("filtrar Alive", () => {
    expect(estadoVidaFiltro("Alive")[0]).toEqual(resultadoEsperadoStatus);
  });

});


const resutadoEspecies = {
  created: "2017-11-04T19:50:28.250Z",
  episode: ['https://rickandmortyapi.com/api/episode/27'],
  gender: "Female",
  id: 6,
  image: "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/6.jpeg",
  location: {name: 'Abadango', url: 'https://rickandmortyapi.com/api/location/2'},
  name: "Abadango Cluster Princess",
  origin: {name: 'Abadango', url: 'https://rickandmortyapi.com/api/location/2'},
  species: "Alien",
  status: "Alive",
  type: "",
  url: "https://rickandmortyapi.com/api/character/6"
}

describe("test funcion Species", () => {
  it("filtrar Alien", () => {
    expect(todasLasEspecies("Alien")[0]).toEqual(resutadoEspecies);
  });

});


const nameData = [
  { name: "Lilian" },
  { name: "Fatima" },
  { name: "Alan" },
];
const nameDos = [
  { name: "Alan" },
  { name: "Fatima" },
  { name: "Lilian" },

];
const nameTres = [
  { name: "Lilian" },
  { name: "Fatima" },
  { name: "Alan" },
];

describe("Prueba unitaria de orden alfabetico", () => {
  it("is a function", () => {
    expect(typeof sortAll).toBe("function");
  });

  it("Retornar el arreglo de forma ordenada alfabeticamente empezando por la A", () => {
    expect(sortAll(true, nameData)).toEqual(nameDos);
  });
  it("Retornar el arreglo de forma ordenada alfabeticamente empezando por la Z", () => {
    expect(sortAll(false, nameData)).toEqual(nameTres);
  });
});


/*const OrdenadoFinal =  {
  created: "2017-11-04T18:48:46.250Z",
  episode: ['https://rickandmortyapi.com/api/episode/1', 'https://rickandmortyapi.com/api/episode/2', 'https://rickandmortyapi.com/api/episode/3', 'https://rickandmortyapi.com/api/episode/4', 'https://rickandmortyapi.com/api/episode/5', 'https://rickandmortyapi.com/api/episode/6', 'https://rickandmortyapi.com/api/episode/7', 'https://rickandmortyapi.com/api/episode/8', 'https://rickandmortyapi.com/api/episode/9', 'https://rickandmortyapi.com/api/episode/10', 'https://rickandmortyapi.com/api/episode/11', 'https://rickandmortyapi.com/api/episode/12', 'https://rickandmortyapi.com/api/episode/13', 'https://rickandmortyapi.com/api/episode/14', 'https://rickandmortyapi.com/api/episode/15', 'https://rickandmortyapi.com/api/episode/16', 'https://rickandmortyapi.com/api/episode/17', 'https://rickandmortyapi.com/api/episode/18', 'https://rickandmortyapi.com/api/episode/19', 'https://rickandmortyapi.com/api/episode/20', 'https://rickandmortyapi.com/api/episode/21', 'https://rickandmortyapi.com/api/episode/22', 'https://rickandmortyapi.com/api/episode/23', 'https://rickandmortyapi.com/api/episode/24', 'https://rickandmortyapi.com/api/episode/25', 'https://rickandmortyapi.com/api/episode/26', 'https://rickandmortyapi.com/api/episode/27', 'https://rickandmortyapi.com/api/episode/28', 'https://rickandmortyapi.com/api/episode/29', 'https://rickandmortyapi.com/api/episode/30', 'https://rickandmortyapi.com/api/episode/31'],
  gender: "Male",
  id: 1,
  image: "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/1.jpeg",
  location: {name: 'Earth (Replacement Dimension)', url: 'https://rickandmortyapi.com/api/location/20'},
  name: "Rick Sanchez",
  origin: {name: 'Earth (C-137)', url: 'https://rickandmortyapi.com/api/location/1'},
  species: "Human",
  status: "Alive",
  type: "",
  url: "https://rickandmortyapi.com/api/character/1"
}




describe('filterOrder', () => {
  it('ordenar por nombre ', () => {
    expect(filterOrder("Rick Sanchez")[0]).toEqual(OrdenadoFinal);
  });
});*/

