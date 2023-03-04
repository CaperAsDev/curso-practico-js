import { promediando } from "./promedio.js";
import { encontrarMediana } from "./mediana.js";
import { encontrarModa } from "./moda.js";
import { promedioForm, medianaForm, modaForm } from "./dom.js";

//!Variables Promedio
let listaUsuarioPromedio = [];
//!Variables Mediana
let listaDatosMediana = [];
//! Variables Moda
let listaDatosModa = [];

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
  const promedio = promediando(listaUsuarioPromedio.map(Number));
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
  const { value, orderedList, ...indexMediana } = encontrarMediana(
    listaDatosMediana.map(Number)
  );
  const indices = Object.values(indexMediana);
  printOrderedList(medianaForm.ulMediana, orderedList, indices);
  medianaForm.cajaRespuestaMediana.innerHTML = ` <p class="answer__text"> ${value}</p>`;
});
medianaForm.botonResetMediana.addEventListener("click", () => {
  medianaForm.cajaRespuestaMediana.innerHTML = "";
  medianaForm.ulMediana.innerHTML = "";
  listaDatosMediana = [];
});

//* Agregando eventos- MODA

modaForm.botonSubmitModa.addEventListener("click", () => {
  ingresarDatoNuevo(modaForm.inputDatoModa, listaDatosModa, modaForm.ulModa);
});
modaForm.botonCalcularModa.addEventListener("click", () => {
  const { orderedlist, lastModa } = encontrarModa(listaDatosModa);
  const modaIndex = orderedlist.reduce((acc, current, index) => {
    if (current.veces == lastModa.veces) {
      acc.push(index);
    }
    return acc;
  }, []);
  printOrderedList(modaForm.ulModa, orderedlist, modaIndex, true);
  modaForm.cajaRespuestaModa.innerHTML = `<p class="answer__text"> ${lastModa.dato}: ${lastModa.veces} veces </p>`;
});
modaForm.botonResetModa.addEventListener("click", () => {
  modaForm.cajaRespuestaModa.innerHTML = "";
  modaForm.ulModa.innerHTML = "";
  listaDatosModa = [];
});

//? Lee dato del input y lo agrega a etiqueta ul en el html
function ingresarDatoNuevo(inputDeDatos, listaDeDatos, ulDedatosHtml) {
  if (inputDeDatos.value === "") {
    alert("no ingresaste datos");
    return;
  }
  listaDeDatos.unshift(inputDeDatos.value);

  ulDedatosHtml.innerHTML += `<li class="answer__text"> Dato ${listaDeDatos.length}: ${listaDeDatos[0]}</li>`;

  inputDeDatos.value = "";
}

//? imprime lista en orden resaltando los datos indicados segun el indice
function printOrderedList(ulHtml, lista, indices, moda = false) {
  ulHtml.innerHTML = "";
  if (moda) {
    for (let i = 0; i < lista.length; i++) {
      if (indices.some((index) => index === i)) {
        ulHtml.innerHTML += `<p class="answer__text text--red"> ${lista[i].dato}: ${lista[i].veces} veces</p>`;
      } else {
        ulHtml.innerHTML += `<p class="answer__text"> ${lista[i].dato}: ${lista[i].veces} veces</p>`;
      }
    }
  } else {
    for (let i = 0; i < lista.length; i++) {
      if (indices.some((index) => index === i)) {
        ulHtml.innerHTML += `<li class="answer__text text--red">dato ${
          i + 1
        } : ${lista[i]}</li>`;
      } else {
        ulHtml.innerHTML += `<li class="answer__text">dato ${i + 1} : ${
          lista[i]
        }</li>`;
      }
    }
  }
}
