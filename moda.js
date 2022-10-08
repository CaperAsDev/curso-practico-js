//!Inportando inputs
const inputDatoModa = document.querySelector('#dato-moda');
const botonSubmitModa = document.querySelector('.submit-moda');
const botonCalcularModa = document.querySelector('.moda');
const ulModa = document.querySelector('.ulModa');
const cajaRespuestaModa = document.querySelector('.respuesta-moda');


botonSubmitModa.addEventListener('click', (event)=> event.preventDefault());
botonCalcularModa.addEventListener('click', (event)=> event.preventDefault());

//!Creo mis variables
let listaDatosModa = [];

//!ingresar datos a lista
function ingresarDatoModa (){
    ingresarDatoNuevoModa(inputDatoModa,listaDatosModa,ulModa);
}
function ingresarDatoNuevoModa(inputDeDatos,listaDeDatos,ulDedatosHtml){
    if(inputDeDatos.value ===''){
        alert('no ingresaste datos');
        return
    }
    listaDeDatos.unshift(inputDeDatos.value);
    ulDedatosHtml.innerHTML += `<li class="answer__text"> Dato ${listaDeDatos.length}: ${listaDeDatos[0]}</li>`;
    inputDeDatos.value ='';
};

//!Funcion para encontrar la moda de nuestra lista
//*Tenemos que crear una plantilla para los objetos que crearemos en el proceso de conteo de los datos

class DatoNuevo {
    constructor(datos, veces){
        this.dato = datos;
        this.veces = veces;
    }
};

function encontrarModa(listaDatosModa){

    const conteoDatos = listaDatosModa.reduce(function(acumulador, datos){
        let dataExist = acumulador.some((objeto)=> {return objeto.dato == datos})
        let indexDato = 0;
        if(dataExist){
            indexDato = acumulador.findIndex((element) => element.dato == datos);
            acumulador[indexDato].veces += 1;
        }else{
            acumulador.unshift(new DatoNuevo(datos, 1));
        }
        return acumulador;
    },[]);
    
    conteoDatos.sort((a, b)=>{return a.veces - b.veces});

    let modas;
    let moda;
    if(conteoDatos[conteoDatos.length-1].veces === conteoDatos[conteoDatos.length-2].veces){
        modas = [conteoDatos[conteoDatos.length-1], conteoDatos[conteoDatos.length-2]];

        cajaRespuestaModa.innerHTML =` <p class="answer__text"> ${modas[0].dato}: ${modas[0].veces} veces</p>`;

        cajaRespuestaModa.innerHTML +=` <p class="answer__text"> ${modas[1].dato}: ${modas[1].veces} veces</p>`;
    }else{
        moda = conteoDatos[conteoDatos.length - 1];
        cajaRespuestaModa.innerHTML =` <p class="answer__text"> ${moda.dato}: ${moda.veces} veces</p>`;
    }


}
//!funcion reset
function resetContentModa(){
    cajaRespuestaModa.innerHTML ='';
    ulModa.innerHTML = '';
    listaDatosModa = [];
};

/* Bases */
    //Tenemos nuestra lista desordenada con datos que se repiten
    const listaModa = [1, 2, 8, 3,8 , 5, 6, 1, 7, 4, 2, 1, 3, 7, 8, 3, 2, 1,"indice"];

    /* Ahora recorreremos el array contando cuantas veces aparece cada dato, esto lo haremos con el metodo reduce que recorre nuestro array mientras ejecuta la funcion que le demos */

        //el conteo se guarda en la constante cantidadNumeros

    const cantidadNumeros = listaModa.reduce(function(contadorDatos, dato){//el acumulador en "contadorDatos" y el valorActual es "dato"

        contadorDatos[dato] = (contadorDatos[dato] || 0) + 1;//Esta es la linea mas importante y la explicare a detalle a continuacion, sin embargo explicare el || antes que todo --->

         /* basicamente el || evalua la primera expresión(la que esta antes del ||), si la expresión se evalua como true se devolvera esa primera sentencia, de tal manera que si el valor antes del || es false retornara la segunda sentencia: por esto mismo cuando se evalua la primera sentencia por primera vez esta es falsa y se retorna la segunda expresion que es 0. Esto mismo se podria hacer con un if si se quisiera.
         
            En nuestro caso cuando se define una nueva clave/key/propiedad en nuestro objeto se requiere darle un valor inicial y hay entra el 0 que esta luego del || sin ello nuestra clave nunca estaria definida(undefined) y no se podria contar(realizar la suma cada que aparezca nuestro dato)
            
                Es complejo de entender pero lo mas eficiente para salir de dudas es hacer pruebas y prestar atencion a los console.log de abajo o revisar https://www.freecodecamp.org/espanol/news/operadores-logicos-javascript/
            */

        /* Importante notar el apunte al final sobre las llaves que definen el valor inical del acumulador como un objeto vacio.
        
        Importante tener en cuenta que reduce funciona como un ciclo que se repite la cantidad de veces del largo de nuestra lista.

        contadorDatos es nuestro objeto donde cada que aparece un [dato] nuevo se crea una nueva clave con valor 0 al que seguidamente se le suma 1... si el dato ya habia aparecido simplemente se le suma 1 a la cantidad acumulada.
        */
        
        contadorDatos["indice"] = (contadorDatos["indice"] || 0) + 1;//Este indice lo agregue para entender mejor lo que sucedia; funciona como un contador de la cantidad de datos que hay en nuestro array ya que en cada ciclo se le suma 1 a su contador y al final se le suman 2 ya que tambien hace parte del array(suma en esta linea de codigo y en la anterior).


        console.log(`dato es: ${dato}`);//me dice en cual dato va
        console.log(`contadorDatos[${dato}] es: ${contadorDatos[dato]}`);// me dice cuantas acumulaciones lleva el dato en el que va
        console.log(contadorDatos);// me muestra como se va contruyendo el objeto con sus llave: valor
        
        return contadorDatos;
        
    },{/* Estas llaves representan el valorInicial del acumulador, que en este caso es un objeto vacio donde luego se iran agregando los datos */});

    /* 
    !Prueba 2 para ver si podemos crear un array de objetos y que cada objeto sea un numero */

    function datoNuevo (datos, veces) {
            this.dato = datos;
            this.veces = veces;
        
    };

    const objetoNumeros = listaModa.reduce(function(arrayNumeros, dato){

        //Primero validamos si el dato ya existia como valor de la propiedad numero de algun objeto de nuestro array: Para ello usamos el metodo de arraysObject some() que nos regresa un boolean
        var exist = arrayNumeros.some(function(objeto){
            return objeto.numero == dato;
        });

        let posicionDato = 0;

        /* Ya que sabemos si ya existe nuestro dato como valor de propiedad numero, necesitamos definir las dos cosas que podrian pasar */

            //si el valor ya existia; vamos a sumarle +1 a su propiedad veces

            //si el valor no existia: vamos a crear un nuevo objeto con la propiedad numero de nuestro dato 

        if(exist){
            //ya que con cada ingreso de dato nuevo nuestros objetos se iban moviendo, sus posiciones variaban a lo largo del proceso de conteo y para modificar su propiedad veces necesitabamos saber que posicion ocupaban en el array; usamos el metodo findIndex() el cual nos dara el index del dato que se esta repitiendo
            posicionDato = arrayNumeros.findIndex((element) => element.numero == dato);

            //Ya con el numero del index del dato que se esta repitiendo, podemos acceder a su propiedad veces y sumarle +1

            arrayNumeros[posicionDato].veces = arrayNumeros[posicionDato].veces + 1;
        }else{
            //Para crear nuestros objetos la primera vez, vamos a usar el metodo de arrays splice() con nuestra funcion de  creador de objetos new datoNuevo() como parametro del metodo splice()
            arrayNumeros.splice(0, 0, new datoNuevo(dato, 1));

        }

        
        /* console.log(`Esto es el dato: ${dato} `);
        
        console.log(`ya existia este dato? => ${exist}`);
        console.log(arrayNumeros);
        console.log(posicionDato); */
        

        return arrayNumeros;

    },[]);

/* Habiendo completado el conteo de nuestros datos, ahora debemos ordenarlos por su propiedad veces para saber cual fue el dato que mas veces se repitio en nuestra lista */    

    //Para ello usamos asi como en el codigo de la mediana nuestro metodo de array sort( ) en el que introducimos como parametros dos valores que representaran los objetos de nuestro array... luego en el return especificamos que queremos ordenar segun la propiedad veces de nuestros objetos

    objetoNumeros.sort(function(a, b){
        return a.veces - b.veces;
    })

/* Por ultimo solo queda tomar el objeto que este al final ya que sera el que mas veces tenga, para esto creamos nuestra variable moda que contendra el objeto que esta en la ultima posicion de nuestro array*/

    var moda = objetoNumeros[objetoNumeros.length - 1];
    
    console.log(objetoNumeros);
    console.log(moda);
/* Final :3 */