//* PROMEDIAR FORM

const inputDatoEntrante = document.querySelector("#dato");
const ulDatos = document.querySelector(".list");
const botonIngresarDatos = document.querySelector(".submit");
const botonPromediar = document.querySelector(".promediar");
const cajaRespuesta = document.querySelector(".respuesta-promedio");
const botonResetPromedio = document.querySelector("#resetPromedio");

botonIngresarDatos.addEventListener("click", (event) => {
  event.preventDefault();
});
botonPromediar.addEventListener("click", (event) => {
  event.preventDefault();
});
botonResetPromedio.addEventListener("click", (event) => {
  event.preventDefault();
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

const inputDatoMediana = document.querySelector('#dato-mediana');
const botonSubmitMediana = document.querySelector('.submit-mediana');
const botonCalcularMediana = document.querySelector('#calcular-mediana');
const ulMediana = document.querySelector('.ulMediana');
const cajaRespuestaMediana = document.querySelector('.respuesta-mediana');
const botonResetMediana = document.querySelector("#resetMediana");

botonSubmitMediana.addEventListener('click', (event)=> event.preventDefault());
botonCalcularMediana.addEventListener('click', (event)=> event.preventDefault());
botonResetMediana.addEventListener("click", (event) => {
  event.preventDefault();
});

export const medianaForm = {
	inputDatoMediana,
	botonSubmitMediana,
	botonCalcularMediana,
	ulMediana,
	cajaRespuestaMediana,
	botonResetMediana
};
