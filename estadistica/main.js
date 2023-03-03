import { promediando } from "./promedio.js";
import { promedioForm } from "./dom.js";

let listaUsuarioPromedio = [];

// * Agregando eventos- Promedio
promedioForm.botonIngresarDatos.addEventListener("click", (event) => {
  ingresarDatoNuevo(promedioForm.inputDatoEntrante, listaUsuarioPromedio, promedioForm.ulDatos);
});

promedioForm.botonPromediar.addEventListener("click", (event) => {
  const promedio = promediando(listaUsuarioPromedio);
  promedioForm.cajaRespuesta.innerHTML = ` <p class="answer__text"> ${promedio}</p>`;
});

promedioForm.botonReset.addEventListener("click", (event) => {
  promedioForm.cajaRespuesta.innerHTML = "";
  promedioForm.ulDatos.innerHTML = "";
  listaUsuarioPromedio = [];
});

//? Lee dato del input y lo agrega a etiqueta ul en el html
function ingresarDatoNuevo(inputDeDatos, listaDeDatos, ulDedatosHtml) {
  if (inputDeDatos.value === "") {
    alert("no ingresaste datos");
    return;
  }
  listaDeDatos.unshift(Number(inputDeDatos.value));
  ulDedatosHtml.innerHTML += `<li class="answer__text"> Dato ${listaDeDatos.length}: ${listaDeDatos[0]}</li>`;
  inputDeDatos.value = "";
};