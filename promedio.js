/* Version "estatica" */
console.group("version estandar");

    /* Primero definimos la lista de datos */

        //integrando html podriamos recibir los datos por parte del usuario e irlos incluyendo en la lista con alguna funcion que modifique arrays

    const lista = [120, 150, 200, 340, 430, 550];

    /* Aqui definimos una variable que contendra la suma de los elementos, incialmente se define con un valor de 0 */

    let sumaLista = 0;

    /* Para sumar todos los valores definimos un ciclo for donde la duracion del ciclo es definido por el largo del array con nuestros datos */

    for( i=0; i< lista.length; i++){
        sumaLista = sumaLista + lista[i];
        console.log(sumaLista);
    };

    /* Ahora creamos una variable que sera la encargada de sacar el promedio, tomando la variable con la suma de los datos y dividiendola por la longitud de la lista de los datos */

    var promedio = sumaLista / lista.length;

    promedio = promedio.toFixed(2);//limitamos el numero a dos decimales

    console.log(promedio);
    console.log(typeof(promedio));//es un string luego de aplicar toFixed

    console.groupEnd();


/* Version en funcion usando un metodo de array */
console.group("Version con funcion");

function promediando (list){

    const sumaDatos = list.reduce(

/* Este metodo recibe como parametros: el Callback = la function---> dentro de ella ponemos: 

        - acumulador: es donde se guarda el valor que devuelve el callback(resultado de cada iteracion).
        - valorActual: el elmento actual que esta siendo procesado en el array.

        Puedo poner un valorInicial luego del callback, si lo pongo el valor inicial del acumulados sera = a valorIncial... si no lo pongo entonces el valor inicial de acumulador sera el primer elemento del array y valor actual sera el segundo.

*/

        function(valorAcumulado, nuevoElemento){

            console.log("acumlado: " + valorAcumulado);

            console.log(" Elementos: "+ `${list}` + " ---> Elemento actual: " + nuevoElemento);

            return valorAcumulado + nuevoElemento;

            //Con estos console.log confirmamos que el metodo reduce funciona como un ciclo 
        }//,10 ---> en esta posicion pondria el valor inicial.
    );

    var mediaAritmetica = sumaDatos / list.length;
    return mediaAritmetica
}

console.log(promediando (lista));
console.groupEnd;
