import data from "./data/rickandmorty/rickandmorty.js";
const resultado = data.results;

/*Aqui filtramos la data por botones*/

//Filtro por genero
export function generosFiltro(valorGenero){
  const filtroGender = resultado.filter(resultado => resultado.gender === valorGenero);
  return filtroGender;
}
  
// Filtro por estado de vida
export function estadoVidaFiltro(valorVida) {
  const filtroStatus = resultado.filter(resultado => resultado.status === valorVida);
  return filtroStatus;
}
  
//filtro por especies
export function todasLasEspecies(valorEspecies){
  const filtroSpecies = resultado.filter(resultado => resultado.species === valorEspecies);
  return filtroSpecies;
}
  
// Ordenar A-Z    Z-A 
export function sortAll(order, resultado) {
  const charactersCopy = [...resultado]; 
  charactersCopy.sort((A, Z) => { 
    if (order) {
      return A.name.localeCompare(Z.name); 
    } else {
      return Z.name.localeCompare(A.name);
    }
  });
  return charactersCopy; 
}


//creamos una copia por que sort no devuelve un arreglo, si no modifica el que tienes//
//sort va comprar entre el elemento A y Z (los puedes llamar de cualquier forma como x,y o 1,2)
//localcompere ayuda a que lo compare en el idioma ingles, por que sort se rigue por su propio ordenamiento 
//regresa el arreglo modificado
