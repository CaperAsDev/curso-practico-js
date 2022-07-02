console.log("aqui vamos con en el segundo taller");

//fase de variables fijas

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
    })

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

    /* Ahora haremos una formula para saber que producto cuesta mas relacion peso/precio */

        function calculo (pesoProducto, precioProducto){

            var relacion = precioProducto / pesoProducto;
            relacion = relacion.toFixed(2);

            const cajaResultado = document.getElementById("precioUnidad");

            cajaResultado.innerText= `$${relacion}`;

        }

        function precioPorUnidad (quePaso){

            const cajaPrecio = document.getElementById("precioProducto");
            
            var precioProducto = parseInt (cajaPrecio.value);
            precioProducto = precioProducto.toFixed(2);

            const cajaPeso = document.getElementById("peso");
            var pesoProducto = parseInt (cajaPeso.value);
            pesoProducto = pesoProducto.toFixed(2);

           const calculando = calculo(pesoProducto, precioProducto);

            console.log(precioProducto);

            return relacion;

        }