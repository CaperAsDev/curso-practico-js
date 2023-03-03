import { promediando } from "./promedio.js";

//*Trayendo HTML

const inputDatoEntrante = document.querySelector("#dato");
const ulDatos = document.querySelector(".list");
const botonIngresarDatos = document.querySelector(".submit");
const botonPromediar = document.querySelector(".promediar");
const cajaRespuesta = document.querySelector(".respuesta-promedio");
const botonReset = document.querySelector(".reset--button");

// *Quitando default de boton y agregando eventos
botonIngresarDatos.addEventListener("click", (event) => {
  event.preventDefault();
});
botonIngresarDatos.addEventListener("click", (event) => {
  ingresarDatoNuevo(inputDatoEntrante, listaUsuarioPromedio, ulDatos);
});
//----------------------------------------------------------------
botonPromediar.addEventListener("click", (event) => {
  event.preventDefault();
});
botonPromediar.addEventListener("click", (event) => {
  const promedio = promediando(listaUsuarioPromedio);
  cajaRespuesta.innerHTML = ` <p class="answer__text"> ${promedio}</p>`;
});
//----------------------------------------------------------------
botonReset.addEventListener("click", (event) => {
  event.preventDefault();
});
botonReset.addEventListener("click", (event) => {
  cajaRespuesta.innerHTML = "";
  ulDatos.innerHTML = "";
  listaUsuario = [];
});

//*Mis variables

let listaUsuarioPromedio = [];

//? funcion general para meter datos en un array y pintarlos en una lista
function ingresarDatoNuevo(inputDeDatos, listaDeDatos, ulDedatosHtml) {
  if (inputDeDatos.value === "") {
    alert("no ingresaste datos");
    return;
  }
  listaDeDatos.unshift(Number(inputDeDatos.value));
  ulDedatosHtml.innerHTML += `<li class="answer__text"> Dato ${listaDeDatos.length}: ${listaDeDatos[0]}</li>`;
  inputDeDatos.value = "";
};