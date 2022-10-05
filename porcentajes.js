
//!fase de variables fijas

 /*   
    const precioOriginal = 120;
    const descuento = 18;

    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;

    console.log("el precio original es" + precioOriginal);
    console.log({
        precioOriginal,
        descuento,
        porcentajePrecioConDescuento,
        precioConDescuento
    }) */

//!Conviertiendo en funcion
const parrafoResultado = document.getElementById("resultado");

function calcularPrecioConDescuento(precio, descuento){
    const porcentajeAPagar = 100 - descuento;
    const precioAPagar = (precio * porcentajeAPagar) / 100;
    let ahorro = precio - precioAPagar;
    ahorro = ahorro.toFixed(2);
        
    //*pasando la informacion al usuario en HTML

        parrafoResultado.innerHTML = `<p class="answer__text">El precio original de tu producto era de <b>$${precio}</b>,  con el descuento del <b>${descuento}%</b> tu producto cuesta <b>$${precioAPagar}</b>, asi que ahorraste <b>$${ahorro}</b>!!.</p>`;

            /* 
            ?Con innerHTML podemos agregar etiquetas dentro de la etiqueta referida--

            ?Con innerText podemos agregar texto a la etiqueta referido (preferiblemente usarla en etiquetas de texto creo yo).*/
}

//!Conectando con el HTML
const cajaPrecio = document.getElementById("precio");
const cuponCaja = document.getElementById("cupon");
const cajaDescuento = document.getElementById("descuento");
const respuestaCupon = document.querySelector('.cupon-answer');

let descuento;
let precio;

cajaDescuento.addEventListener('input', ()=>{
    cuponCaja.value='';
    respuestaCupon.innerText= '';
})

// !Haciendo funcionar el enter para activar los botones
cuponCaja.addEventListener('focus',agreagarEventoEnterCupon);
cuponCaja.addEventListener('blur', ()=>{
    cuponCaja.removeEventListener('focus', agreagarEventoEnterCupon)
})
cajaDescuento.addEventListener('focus', ()=>{
    agreagarEventoEnter(miAhorro);
});
function agreagarEventoEnter (activatingFunction){
    this.addEventListener('keydown', (event)=> {
        if(event.keyCode === 13){
            activatingFunction();
        };
    });
};
function agreagarEventoEnterCupon (){
    this.addEventListener('keydown', (event)=> {
        if(event.keyCode === 13){
            cuponValidation();
        };
    });
};

function miAhorro (){
    precio = parseInt(cajaPrecio.value);
    descuento = parseInt(cajaDescuento.value);

    if(!precio || !descuento){
        parrafoResultado.innerHTML = `<p class="answer__text">Asegurate de ingresar el precio y descuento antes de ejecutar el programa 💀.</p>`;
        return
    };
    if(descuento > 100){
        respuestaCupon.innerText= 'felicidades, estas en el mundo al revés!!'
        parrafoResultado.innerHTML = `<p class="answer__text">Tu porcentaje de descuento es increible, que suerte tienes!!🥳.</p>`;
        return
    };

    calcularPrecioConDescuento(precio, descuento);
}

//!Haciendo funcionar los cupones
let cupones = [
    {codigo:"abcdefg", discount: 5},
    {codigo: "anime", discount:10},
    {codigo:"manga", discount: 15},
    {codigo:"capicode", discount:20}
    ];

function cuponValidation(){

    let codigoCupon = cuponCaja.value
    let indiceCodigo = cupones.findIndex((elm)=> elm.codigo == codigoCupon);
    if(indiceCodigo >= 0){
        descuento = cupones[indiceCodigo].discount;
        cajaDescuento.value = descuento;
        respuestaCupon.innerText= 'Tu cupon fue validado con Exito.'
    }else{
        respuestaCupon.innerText= 'Tu cupon NO es valido.'
        parrafoResultado.innerHTML='';
        cajaDescuento.value= '';
    };

        //el codigo de abajo funciona para arrays normales no objetos y su uso va enfocado en detectar inicialmente los errores antes de ejecutar todo el codigo; algo asi como que si en el primer momento sabes que no esta correcta la informacion le avisas al usuario y no hacer todo el codigo para al final descbrir que el input estaba mal
        //.. auque seguro hay forma de hacerlo funcionar dentro de objetos con una funcion o un ciclo que recorra... En este caso ya que estoy usando una validacion no necesito de este metodo.

             /* if(!cupones.codigo.includes(codigoCupon)){
            alert("tu cupon: " + codigoCupon + " no es valido. Intenta con otro codigo.")
            } */

        /* forma para validar si se encuentra un parametro en un array de objetos */
            /* Usando la funcion array.find() para ver mejor como funciona esta funcion ver archivo de arrayObject en carpeta de JsBasic. */
    };

/* 
!Ahora haremos una formula para saber que producto cuesta mas relacion peso/precio */

function calculo (pesoProducto, precioProducto){

    var relacion = precioProducto / pesoProducto;
    relacion = relacion.toFixed(2);

    const cajaResultado = document.getElementById("precioUnidad");

    cajaResultado.innerText= `$${relacion}`;

};

function precioPorUnidad (quePaso){
    const cajaPrecio = document.getElementById("precioProducto");
    
    var precioProducto = parseInt (cajaPrecio.value);
    precioProducto = precioProducto.toFixed(2);

    const cajaPeso = document.getElementById("peso");
    var pesoProducto = parseInt (cajaPeso.value);
    pesoProducto = pesoProducto.toFixed(2);

    const calculando = calculo(pesoProducto, precioProducto);

    return calculando;

};


