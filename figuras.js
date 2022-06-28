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

const alturaTriangulo = 5.5;
console.log("La altura del triangulo es: " + alturaTriangulo + "cm.");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
// = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm.");



function areaTriangulo(base, altura) {
    return (base * altura) / 2;
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

    const perimetro = areaCuadrado(value);
    alert(perimetro);

    console.log(input);
}