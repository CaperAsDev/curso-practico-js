import { promediando } from "./promedio.js";
import { encontrarMediana } from "./mediana.js";
import { promedioForm, medianaForm } from "./dom.js";

//!Variables Promedio
let listaUsuarioPromedio = [];
//!Variables Mediana
let listaDatosMediana = [];

//! se pueden hacer 3 funciones para no repetir codigo: print lis, play y reset- y solo se pasa el objeto
// * Agregando eventos- PROMEDIO
promedioForm.botonIngresarDatos.addEventListener("click", (event) => {
  ingresarDatoNuevo(
    promedioForm.inputDatoEntrante,
    listaUsuarioPromedio,
    promedioForm.ulDatos
  );
});

promedioForm.botonPromediar.addEventListener("click", (event) => {
  const promedio = promediando(listaUsuarioPromedio);
  promedioForm.cajaRespuesta.innerHTML = ` <p class="answer__text"> ${promedio}</p>`;
});

promedioForm.botonResetPromedio.addEventListener("click", (event) => {
  promedioForm.cajaRespuesta.innerHTML = "";
  promedioForm.ulDatos.innerHTML = "";
  listaUsuarioPromedio = [];
});
// * Agregando eventos- MEDIANA

medianaForm.botonSubmitMediana.addEventListener("click", () => {
  ingresarDatoNuevo(
    medianaForm.inputDatoMediana,
    listaDatosMediana,
    medianaForm.ulMediana
  );
});
medianaForm.botonCalcularMediana.addEventListener("click", () => {
  const { value, orderedList, ...indexMediana } =
    encontrarMediana(listaDatosMediana);
  const indices = Object.values(indexMediana);
  printOrderedList(medianaForm.ulMediana, orderedList, indices);
  medianaForm.cajaRespuestaMediana.innerHTML = ` <p class="answer__text"> ${value}</p>`;
});
medianaForm.botonResetMediana.addEventListener("click", () => {
  medianaForm.cajaRespuestaMediana.innerHTML = "";
  medianaForm.ulMediana.innerHTML = "";
  listaDatosMediana = [];
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

//? imprime lista en orden resaltando los datos de la mediana
function printOrderedList(ulHtml, lista, indices) {
  ulHtml.innerHTML = "";

  for (let i = 0; i < lista.length; i++) {
    if (indices.some((index) => index === i)) {
      ulHtml.innerHTML += `<li class="answer__text text--red">dato ${i + 1} : ${
        lista[i]
      }</li>`;
    } else {
      ulHtml.innerHTML += `<li class="answer__text">dato ${i + 1} : ${
        lista[i]
      }</li>`;
    }
  }
};