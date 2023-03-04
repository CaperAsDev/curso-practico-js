//* PROMEDIAR FORM

const inputDatoEntrante = document.querySelector("#dato");
const ulDatos = document.querySelector(".list");
const botonIngresarDatos = document.querySelector(".submit");
const botonPromediar = document.querySelector(".promediar");
const cajaRespuesta = document.querySelector(".respuesta-promedio");
const botonResetPromedio = document.querySelector("#resetPromedio");

botonIngresarDatos.addEventListener("click", (e) => {
  e.preventDefault();
});
botonPromediar.addEventListener("click", (e) => {
  e.preventDefault();
});
botonResetPromedio.addEventListener("click", (e) => {
  e.preventDefault();
});

export const promedioForm = {
  inputDatoEntrante,
  ulDatos,
  botonIngresarDatos,
  botonPromediar,
  cajaRespuesta,
  botonResetPromedio,
};

//* MEDIANA FORM

const inputDatoMediana = document.querySelector("#dato-mediana");
const botonSubmitMediana = document.querySelector(".submit-mediana");
const botonCalcularMediana = document.querySelector("#calcular-mediana");
const ulMediana = document.querySelector(".ulMediana");
const cajaRespuestaMediana = document.querySelector(".respuesta-mediana");
const botonResetMediana = document.querySelector("#resetMediana");

botonSubmitMediana.addEventListener("click", (e) => e.preventDefault());
botonCalcularMediana.addEventListener("click", (e) => e.preventDefault());
botonResetMediana.addEventListener("click", (e) => {
  e.preventDefault();
});

export const medianaForm = {
  inputDatoMediana,
  botonSubmitMediana,
  botonCalcularMediana,
  ulMediana,
  cajaRespuestaMediana,
  botonResetMediana,
};

//* MODA FORM

const ulModa = document.querySelector(".ulModa");
const inputDatoModa = document.querySelector("#dato-moda");
const cajaRespuestaModa = document.querySelector(".respuesta-moda");
const botonSubmitModa = document.querySelector(".submit-moda");
const botonCalcularModa = document.querySelector("#calcular-moda");
const botonResetModa = document.querySelector("#resetModa");

botonSubmitModa.addEventListener("click", (e) => e.preventDefault());
botonCalcularModa.addEventListener("click", (e) => e.preventDefault());
botonResetModa.addEventListener("click", (e) => e.preventDefault());

export const modaForm = {
  inputDatoModa,
  botonSubmitModa,
  botonCalcularModa,
  ulModa,
  cajaRespuestaModa,
  botonResetModa,
};