//* promediar FORM

const inputDatoEntrante = document.querySelector("#dato");
const ulDatos = document.querySelector(".list");
const botonIngresarDatos = document.querySelector(".submit");
const botonPromediar = document.querySelector(".promediar");
const cajaRespuesta = document.querySelector(".respuesta-promedio");
const botonReset = document.querySelector(".reset--button");

botonIngresarDatos.addEventListener("click", (event) => {
  event.preventDefault();
});
botonPromediar.addEventListener("click", (event) => {
  event.preventDefault();
});
botonReset.addEventListener("click", (event) => {
  event.preventDefault();
});

export const promedioForm = {
  inputDatoEntrante,
  ulDatos,
  botonIngresarDatos,
  botonPromediar,
  cajaRespuesta,
  botonReset,
};
