/* Version "estatica" 
console.group("version estandar"); */

    /* Primero definimos la lista de datos */

        //integrando html podriamos recibir los datos por parte del usuario e irlos incluyendo en la lista con alguna funcion que modifique arrays

    // const lista = [120, 150, 200, 340, 430, 550];

    /* Aqui definimos una variable que contendra la suma de los elementos, incialmente se define con un valor de 0 */

    // let sumaLista = 0;

    /* Para sumar todos los valores definimos un ciclo for donde la duracion del ciclo es definido por el largo del array con nuestros datos */

   /*  for( i=0; i< lista.length; i++){
        sumaLista = sumaLista + lista[i];
        console.log(sumaLista);
    }; */

    /* Ahora creamos una variable que sera la encargada de sacar el promedio, tomando la variable con la suma de los datos y dividiendola por la longitud de la lista de los datos */

   /*  let promedio = sumaLista / lista.length;

    promedio = promedio.toFixed(2);//limitamos el numero a dos decimales

    console.log(promedio);
    console.log(typeof(promedio));//es un string luego de aplicar toFixed

    console.groupEnd(); */


/* 
!Version en funcion usando un metodo de array 
*/
console.group("Version con funcion");

//*Trayendo HTML

const inputDatoEntrante = document.querySelector('#dato');
const ulDatos = document.querySelector('.list');
const botonIngresarDatos = document.querySelector('.submit');
const botonPromediar = document.querySelector('.promediar');
const cajaRespuesta = document.querySelector('.respuesta-promedio');
const botonReset = document.querySelector('.reset--button');

// *Quitando default de boton
botonIngresarDatos.addEventListener('click', (event)=>{event.preventDefault()});
botonPromediar.addEventListener('click', (event)=>{event.preventDefault()});
botonReset.addEventListener('click', (event)=>{event.preventDefault()});

//*Mis variables

let listaUsuarioPromedio = [];


//*Funciones

function datoNuevoPromedio(){
    ingresarDatoNuevo(inputDatoEntrante,listaUsuarioPromedio,ulDatos );
};

//? funcion general para meter datos en un array y pintarlos en una lista
function ingresarDatoNuevo(inputDeDatos,listaDeDatos,ulDedatosHtml){
    if(inputDeDatos.value ===''){
        alert('no ingresaste datos');
        return
    }
    listaDeDatos.unshift(Number(inputDeDatos.value));
    ulDedatosHtml.innerHTML += `<li class="answer__text"> Dato ${listaDeDatos.length}: ${listaDeDatos[0]}</li>`;
    inputDeDatos.value ='';
};

function promediando (list){
    const sumaDatos = list.reduce(

        function(valorAcumulado, nuevoElemento){

            console.log("acumlado: " + valorAcumulado);

            console.log(" Elementos: "+ `${list}` + " ---> Elemento actual: " + nuevoElemento);

            return valorAcumulado + nuevoElemento;

            //Con estos console.log confirmamos que el metodo reduce funciona como un ciclo 
        }//,10 ---> en esta posicion pondria el valor inicial.
    );

    let mediaAritmetica = sumaDatos / list.length;
    mediaAritmetica = mediaAritmetica.toFixed(2);
    cajaRespuesta.innerHTML =` <p class="answer__text"> ${mediaAritmetica}</p>`;
}

/* EL metodo reduce recibe como parametros: el Callback = la function---> dentro de ella ponemos: 

        - acumulador: es donde se guarda el valor que devuelve el callback(resultado de cada iteracion).
        - valorActual: el elmento actual que esta siendo procesado en el array.

        Puedo poner un valorInicial luego del callback, si lo pongo el valor inicial del acumulados sera = a valorIncial... si no lo pongo entonces el valor inicial de acumulador sera el primer elemento del array y valor actual sera el segundo.

    */
function resetContentPromedio(){
    cajaRespuesta.innerHTML ='';
    ulDatos.innerHTML = '';
    listaUsuario = [];
};

console.groupEnd;
