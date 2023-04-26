import data from "./data/rickandmorty/rickandmorty.js";
import {estadoVidaFiltro, generosFiltro, todasLasEspecies, sortAll} from "./data.js";


// Aqui estamos llamando a la data
const crearElementosDeCaracteres = (caracteres) => {
  const elementosDeCaracteres = [];
  caracteres.forEach((element) => {
    const div = document.createElement("div");
    div.classList = "caracteres";

    const imagen = document.createElement("img");
    const nombre = document.createElement("h1");
    const status = document.createElement("p");
    const especies = document.createElement("p");
    const genero = document.createElement("p");

    imagen.src = element.image;
    nombre.textContent = element.name;
    status.textContent = element.status;
    especies.textContent = element.species;
    genero.textContent = element.gender;

    div.appendChild(imagen);
    div.appendChild(nombre);
    div.appendChild(status);
    div.appendChild(especies);

    elementosDeCaracteres.push(div);
  });
  return elementosDeCaracteres;
};


// aqui la estamos mostrando en la web 
const contenedor = document.querySelector("#root");
const todosLosCaracteres = crearElementosDeCaracteres(data.results);
todosLosCaracteres.forEach((divCaracter) => {
  contenedor.appendChild(divCaracter);
});


// Filtrado de genero
const genero = document.getElementById("gender");
genero.addEventListener("change", () => {
  const contenedor = document.querySelector("#root");
  contenedor.innerHTML = "";
  const personajesGender = generosFiltro(genero.value);

  const filtradoGender = crearElementosDeCaracteres(personajesGender);

  filtradoGender.forEach((divCaracter) => {
    contenedor.appendChild(divCaracter)
  });
  if (genero.value === "All") {
    todosLosCaracteres.forEach((divCaracter) => {
      contenedor.appendChild(divCaracter);
    });
  }
});


//Filtrado de estado de vida
const estadoVida = document.getElementById("estado");
estadoVida.addEventListener("change", () => {  // change (cambio) como click en un button
  const contenedor = document.querySelector("#root");
  contenedor.innerHTML = ""; // aqui limpiamos la pagina para despues llamar lo que seleccionamos
  const personajeEstadoVida = estadoVidaFiltro(estadoVida.value) // aqui llamamos a la funcion de data.js y le pasamos un parametro de lo que seleccione
  const filtradoEstadoVida = crearElementosDeCaracteres(personajeEstadoVida)
  filtradoEstadoVida.forEach((divCaracter) => {
    contenedor.appendChild(divCaracter);
  });
  if (estadoVida.value === "Status") {
    todosLosCaracteres.forEach((divCaracter) => {
      contenedor.appendChild(divCaracter);
    });
  }
});


//Filtro por especie
const especies = document.getElementById('species');
especies.addEventListener("change", () => {
  const contenedor = document.querySelector("#root");
  contenedor.innerHTML = "";
  const personajesEspecies = todasLasEspecies(especies.value)
  const filtradoDeEspecies = crearElementosDeCaracteres(personajesEspecies)
  filtradoDeEspecies.forEach((divCaracter) => {
    contenedor.appendChild(divCaracter);
  });
  if (especies.value === "Specie") {
    todosLosCaracteres.forEach((divCaracter) => {
      contenedor.appendChild(divCaracter);
    });
  }
});


//Filtro de la A a la Z

const ordenar = document.getElementById('ordenar');
ordenar.addEventListener('change', () => {
  const contenedor = document.querySelector("#root");
  contenedor.innerHTML = "";
  let order = "";  // o false, dependiendo de la lógica deseada
  if(ordenar.value === "A-Z"){
    order = true;
  } else{
    order = false;
  }
  const resultado = data.results;
  const resultadoOrdenado = sortAll(order, resultado);
  const resultadopersonajes = crearElementosDeCaracteres(resultadoOrdenado)
  resultadopersonajes.forEach((divCaracter) => {
    contenedor.appendChild(divCaracter);
  });
   
});














//Filtro de la A a la Z

/*const ordenar = document.getElementById('ordenar');
ordenar.addEventListener("change", () => {
  const contenedor = document.querySelector("#root");
  contenedor.innerHTML = "";
  
  const ordenarAZ = [...filterOrder];

  const valorSelecionadoCuatro = ordenar.value;
  if (valorSelecionadoCuatro === "A-Z") {
    ordenarAZ.sort((a, b) => a.name.localeCompare(b.name));
    const todasAZ = crearElementosDeCaracteres(ordenarAZ);
    todasAZ.forEach((divCaracter) => {
      contenedor.appendChild(divCaracter);
    });
  } else if (valorSelecionadoCuatro === "Z-A") {
    ordenarAZ.sort((a, b) => b.name.localeCompare(a.name));
    const todasZA = crearElementosDeCaracteres(ordenarAZ);
    todasZA.forEach((divCaracter) => {
      contenedor.appendChild(divCaracter);
    });
  } else if (valorSelecionadoCuatro === "ORDER") {
    todosLosCaracteres.forEach((divCaracter) => {
      contenedor.appendChild(divCaracter);
    });
  }
});



/*const ordenar = document.getElementById('ordenar');
  ordenar.addEventListener("change", () => {
  const contenedor = document.querySelector("#root");
  contenedor.innerHTML = "";

  const ordenarA = sortAll(ordenar.value, resultado);
  const sorted = crearElementosDeCaracteres(ordenarA);
  sorted.forEach((divCaracter) => {
    contenedor.appendChild(divCaracter);
  });
});*/
