/* Esta primera parte es basicamente para sacar la mediana de los salarios */

    /* Primero filtramos con el metodo .map() la propiedad salary de nuestros objetos(personas) que estan en nuestro array colombia  */

        const salariosCol = colombia.map(
            function(person){
                return person.salary;
            }
        )

    /* Luego los organizamos con el metodo sort() como ya vimos en otros ejersicios. */

        const salariosColSorted = salariosCol.sort(
            function(salaryA, salaryB){
                return salaryA - salaryB;
            }
        );
            console.log(salariosColSorted);
    /* Hacemos una pequeña funcion que nos devuelve un boolean para saber si la lista es par */

        function esPar(numero){
        return ( numero % 2 === 0);
        };

    /* Traemos nuestro codigo que saca el promedio */

        function promediando (list){

            const sumaDatos = list.reduce(

                function(valorAcumulado, nuevoElemento){

                    console.log("acumlado: " + valorAcumulado);

                    console.log(" Elementos: "+ `${list}` + " ---> Elemento actual: " + nuevoElemento);

                    return valorAcumulado + nuevoElemento;
        
                }
            );

            var mediaAritmetica = sumaDatos / list.length;
            return mediaAritmetica
        }

    /* Esta es la formula de la mediana donde dependiendo si la lista es par o impar deberemos usar la funcion promedio */

        function medianaSalarios (lista){
            const mitad = parseInt(lista.length / 2);

            if (esPar(lista.length)){
                const personaMitad1 = lista[mitad - 1];
                const personaMitad2 = lista[mitad];

                const mediana = promediando([personaMitad1, personaMitad2]);

                return mediana;

            }else{
                const personaMitad = lista[mitad];
                return personaMitad;
            }
        }

        const medianaGeneral = medianaSalarios(salariosColSorted);

       

/*Sacando el top 10% de los salarios */

    const spliceStart = (salariosColSorted.length * 90) / 100;
    const spliceCount = salariosColSorted.length - spliceStart;

    console.log(spliceStart);
    console.log(spliceCount);


    const salariosTop10 = salariosColSorted.splice(spliceStart, spliceCount,);

    console.log(salariosTop10);

    const medianaTop10 = medianaSalarios(salariosTop10);

    console.log({
        medianaGeneral, medianaTop10

    }
    );