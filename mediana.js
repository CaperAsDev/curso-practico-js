/* definiendo bases */

    /* lo primero sera lograr organizar una lista en orden ascendente o descendente con el metodo sort */

    //El metodo sort funciona correctamente para ordenar numeros si se implmementa junto a una funcion de comparacion, de otro modo solo tendra en cuenta el primer digito al momento de organizar siendo 100 menor a 20 en este caso.

    const lista2 = [1, 100, 50, 222, 13, 82, 73,0,5,33,500];//.sort((a, b) => a - b); //---> asi se ordena la lista en el instante que se declara, pero para entender como funciona vamos a usar la version larga
//!Traigo mis etiquetas de HTML
const inputDatoMediana = document.querySelector('#dato-mediana');
const botonSubmitMediana = document.querySelector('.submit-mediana');
const botonCalcularMediana = document.querySelector('.mediana');
const ulMediana = document.querySelector('.ulMediana');
const cajaRespuestaMediana = document.querySelector('.respuesta-mediana');


botonSubmitMediana.addEventListener('click', (event)=> event.preventDefault());
botonCalcularMediana.addEventListener('click', (event)=> event.preventDefault());
//! Creo mis variables
let listaDatosMediana = [];

//! Asi se ordena una lista usando una funcion como parametro de .sort aplicada a la lista a ordenar

console.group("ordenando lista");
function ingresarDatoMediana (){
    // listaDatosMediana.sort(compareNumbers);
    ingresarDatoNuevo(inputDatoMediana,listaDatosMediana,ulMediana);
}

function compareNumbers (a, b){
    console.log(`esto es a: ${a}`);
    console.log(`esto es b: ${b}`);
    console.log(a - b);
    return a - b;
}

lista2.sort(compareNumbers);

console.log(`Asi se ve la lista ordenada: ${lista2}.`);

console.groupEnd;

/* Ahora debemos diferenciar entre listas pares e impares */

function encontrarMediana (numeros){

    if(numeros.length % 2 == 0){//Aqui basicamente dice que si el sobrante de la division entre el largo de la lista y 2 es igual a 0 la lista es par(true)

        let posicionMedianaPar1 = numeros.length / 2;
        let posicionMedianaPar2 = (numeros.length / 2) - 1;

        let numerosAPromediar = [numeros[posicionMedianaPar1],numeros[posicionMedianaPar2]];

        let medianaDePar = (numerosAPromediar[0] + numerosAPromediar[1])/ 2;
        cajaRespuestaMediana.innerHTML =` <p class="answer__text"> ${medianaDePar}</p>`;

       return
    }
    
    else{

        let posicionMedianaImpar = parseInt(numeros.length / 2);

        let medianaDeImpar = numeros[posicionMedianaImpar];

        cajaRespuestaMediana.innerHTML =` <p class="answer__text"> ${medianaDeImpar}</p>`;
    }
}
function resetContentMediana(){
    cajaRespuestaMediana.innerHTML ='';
    ulMediana.innerHTML = '';
    listaDatosMediana = [];
};
// encontrarMediana(lista2);

