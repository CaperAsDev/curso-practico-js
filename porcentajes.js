
//fase de variables fijas

    const precioOriginal = 120;
    const descuento = 18;

    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;

    // console.log("el precio original es" + precioOriginal);
    // console.log({
    //     precioOriginal,
    //     descuento,
    //     porcentajePrecioConDescuento,
    //     precioConDescuento
    // })

//Conviertiendo en funcion

    function calcularPrecioConDescuento(precio, descuento){
        var porcentajeAPagar = 100 - descuento;
        var precioAPagar = (precio * porcentajeAPagar) / 100;
        var ahorro = precio - precioAPagar;
        ahorro = ahorro.toFixed(2);
         
          //pasando la informacion al usuario en HTML

            const parrafoResultado = document.getElementById("resultado");
        
            parrafoResultado.innerHTML = `<p>El precio original de tu producto era de <b>$${precio}</b>,  con el descuento del <b>${descuento}%</b> tu producto cuesta <b>$${precioAPagar}</b>, asi que ahorraste <b>$${ahorro}</b>!!.</p>`;

                /* Con innerHTML podemos agregar etiquetas dentro de la etiqueta referida--

                Con innerText podemos agregar texto a la etiqueta referido (preferiblemente usarla en etiquetas de texto creo yo).*/
    }

//Conectando con el HTML

    function miAhorro (quePasa){

        const cajaPrecio = document.getElementById("precio");
        var precio = parseInt(cajaPrecio.value);

        const cajaDescuento = document.getElementById("descuento");
        var descuento = parseInt(cajaDescuento.value);

        const precioFinal = calcularPrecioConDescuento(precio, descuento);

        console.log("la variable precio es un: " + typeof(precio));

        console.log(calcularPrecioConDescuento);
        console.log(quePasa);


           /*  const parrafoRespuesta = document.getElementById("resultado");

            parrafoRespuesta.innerText = `El precio original de tu producto era de $${precio},  con el descuento del ${descuento}% tu producto cuesta $${precioAPagar}, asi que ahorraste $${ahorro}!!.` */
    }

//Haciendo funcionar los cupones
    var cupones = [
                {codigo:"abcdefg", discount: 5},
                {codigo: "anime", discount:10},
                {codigo:"manga", discount: 15},
                {codigo:"capicode", discount:20}
                ];
    function cuponValidation(){
        // alert("si funciona");

        const cuponCaja = document.getElementById("cupon");
        var codigoCupon = cuponCaja.value
        console.log(codigoCupon);
    
        var validado = false;
        let i = 0;
        while (i < cupones.length) {
            console.log(i);
            if(codigoCupon == cupones[i].codigo){
                validado = true
                console.log(validado);
                console.log(cupones[i].discount);
            }
            else{
                console.log(validado);
                i++
            }
            
            if(validado == true){
                alert("tu cupon es valido por " + cupones[i].discount + "% de descuento");
                i = cupones.length
               
            }
        
        }
        if (validado == false){
            alert("tu cupon: `" + codigoCupon + "´ no es valido. Intenta con otro codigo.")
        }

        //el codigo de abajo funciona para arrays normales no objetos y su uso va enfocado en detectar inicialmente los errores antes de ejecutar todo el codigo; algo asi como que si en el primer momento sabes que no esta correcta la informacion le avisas al usuario y no hacer todo el codigo para al final descbrir que el input estaba mal
        //.. auque seguro hay forma de hacerlo funcionar dentro de objetos con una funcion o un ciclo que recorra... En este caso ya que estoy usando una validacion no necesito de este metodo.

             /* if(!cupones.codigo.includes(codigoCupon)){
            alert("tu cupon: " + codigoCupon + " no es valido. Intenta con otro codigo.")
            } */

        /* forma para validar si se encuentra un parametro en un array de objetos */
            /* Usando la funcion array.find() para ver mejor como funciona esta funcion ver archivo de arrayObject en carpeta de JsBasic. */
    };

/* Ahora haremos una formula para saber que producto cuesta mas relacion peso/precio */

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

            console.log(precioProducto);

            return calculando;

    };


