console.log("Hello, world");

// Codigo del cuadrado

console.group("cuadrados");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){

    return lado * 4;
} 
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
function areaCuadrado (lado){
    return lado * lado;
}
// console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd();

//Codigo del triangulo

console.group("triangulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm.");

/* const alturaTriangulo = 5.5;
 */
console.log("La altura del triangulo es: " + alturaTriangulo + "cm.");

function perimetroTriangulo(lado1, lado2, base) {
    const perimetro = lado1 + lado2 + base;

    return perimetro;
}
// = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm.");

function alturaTriangulo(a, b) {
    const altTriangulo = Math.sqrt((Math.pow(a,2) - (Math.pow(b,2) / 4)));
    
    return altTriangulo;

}

function areaTriangulo(base, lado) {
    return (base * alturaTriangulo(lado, base)) / 2;
}
// = (baseTriangulo * alturaTriangulo) / 2;
// console.log("El area del triangulo es: " + areaTriangulo + "cm^2.");

console.groupEnd();

//Codigo circulo

console.group("circulo");

function diametroCirculo (radio) {
    return radio *2;
}

const PI = Math.PI;

function perimetroCirculo (radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
    /* Puedo hacer arrow functions que son :
|/|--> const perimetroCirculo = (radio) => diametroCirculo(radio) * PI; <--|/|
       el return esta implicito en la sentencia, la estructura es :
       const + nombreFuncion = (parametrosA , parametrosB) => parametroA + parametroB (la operacion a realizar con los parametros) + ;
       Ej: const arrow = (a,b) => a + b;    */

function areaCirculo(radio){
    return (radio * radio) * PI;
}

console.log("El radio del circulo es: " + radio + "cm");
console.log("El diametro del circulo es: " + diametroCirculo + "cm");
console.log("El perimetro del circulo es : " + perimetroCirculo + "cm");
console.log("El area del circulo es : " + areaCirculo + "cm^2");
console.log("PI es : " + PI);






console.groupEnd();

/* Aqui interactuamos con el HTML */

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

    console.log(input);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);
    
    console.log(input);
}

function calcularPerimetroTriangulo(){
    const ladoA = document.getElementById("ladoA");
    const ladoB = document.getElementById("ladoB");
    const base = document.getElementById("base");
    const value_ladoA = parseInt(ladoA.value);
    const value_ladoB = parseInt(ladoB.value);
    const value_base = parseInt(base.value);
    
    const perimetro = perimetroTriangulo(value_ladoA, value_ladoB, value_base);
    alert(perimetro);

    console.log(value_base);
    console.log(typeof(perimetro));
}
function calcularAreaTriangulo(){
    const base = document.getElementById("base");
    const ladoA = document.getElementById("ladoA");
    const ladoB = document.getElementById("ladoB");
    
    const valor_base= parseInt(base.value);
    const valor_ladoA= parseInt(ladoA.value);
    const valor_ladoB= parseInt(ladoB.value);

    if(valor_ladoA === valor_ladoB && valor_ladoA != valor_base){

        var area = areaTriangulo(valor_base,valor_ladoA);
        area = area.toFixed(2);
        alert("el area de tu triangulo isósceles es : " + area);
    }
    else{
        alert("¡Hey!... Este NO es un triangulo ISOSCELES, el triangulo isósceles tiene dos lados de la misma longitud y una base diferente. Si tu triangulo tiene todos sus lados iguales es EQUILATERO y si los tiene todos diferentes puede ser ESCALENO o RECTANGULO: para ellos necesitaras otra formula. Suerte con eso :p ")
    }

    console.log(area);
}
function calcularAlturaTriangulo(){

    const base = document.getElementById("base");
    const ladoA = document.getElementById("ladoA");

    const valor_base= parseInt(base.value);
    const valor_ladoA= parseInt(ladoA.value);
    var altura = alturaTriangulo(valor_ladoA,valor_base);

    altura = altura.toFixed(2);

    alert(altura);

    console.log(altura);
}

function calcularPerimetroCirculo(){

    const radio = document.getElementById("radio");
    const valor_radio = parseInt(radio.value);
    var perimetro = perimetroCirculo(valor_radio);

    perimetro = perimetro.toFixed(2);
    alert(perimetro)
}

function calcularAreaCirculo(){

    const radio = document.getElementById("radio");
    const valor_radio = parseInt(radio.value);
    var area = areaCirculo(valor_radio);

    area = area.toFixed(2);
    alert(area)
    
}
