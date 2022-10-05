// !Codigo del cuadrado
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

//!Codigo del triangulo
console.group("triangulos");

/* const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
 */

function perimetroTriangulo(lado1, lado2, base) {
    const perimetro = lado1 + lado2 + base;

    return perimetro;
}
//De esta forma tenermos todos los datos en una sola funcion sin crear variables sino de una guardandolas en un objeto.
function calcularTriangulo (lado1, lado2, base, altura){
    return {
        perimetro: lado1 + lado2 + base,
        area: base * altura / 2
    }
};
// = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm.");

function alturaTriangulo(lado, base) {
    const altTriangulo = Math.sqrt((Math.pow(lado,2) - (Math.pow(base,2) / 4)));
    
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
    //!el metodo pow nos permite elevar un numero a x potencia, recibe 2 parametros: 1: numero a potenciar, 2: numero de la potencia.
    const radioAlCadrado = Math.pow(radio, 2);
    return radioAlCadrado * PI;
}

/* console.log("El radio del circulo es: " + radio + "cm");
console.log("El diametro del circulo es: " + diametroCirculo + "cm");
console.log("El perimetro del circulo es : " + perimetroCirculo + "cm");
console.log("El area del circulo es : " + areaCirculo + "cm^2");
console.log("PI es : " + PI); */

console.groupEnd();

/* 
!Aqui interactuamos con el HTML 
 */
// *Rereteando cuadros de respuesta
function resetAnswerTriangle() {respuestaTriangulo.innerHTML=''};
function resetAnswerCircle(){respuestaCirculo.innerHTML=''};
function resetAnswerSquare(){respuestaCuadrado.innerHTML=''};

// *Cuadros de respuesta HTML
const respuestaCuadrado = document.querySelector('.answer-square');
const respuestaTriangulo = document.querySelector('.answer-triangle');
const respuestaCirculo = document.querySelector('.answer-circle');

// *Input cuadrado HTML
const inputCuadrado = document.getElementById("inputCuadrado");
inputCuadrado.addEventListener('input', ()=> respuestaCuadrado.innerHTML='');

// *Inputs Triangulo HTML
const ladoA = document.getElementById("ladoA");
const ladoB = document.getElementById("ladoB");
const base = document.getElementById("base");

const inputsTriangle = Array.from(document.querySelectorAll('.triangulo input'));

inputsTriangle.forEach(int => int.addEventListener('input', () => respuestaTriangulo.innerHTML=''))

// *Input Circulo
const radio = document.getElementById("radio");
radio.addEventListener('input', ()=> respuestaCirculo.innerHTML='');

// !Funciones de Calculo
// *Cuadrado
function calcularPerimetroCuadrado(){
    const value = inputCuadrado.value;
    const perimetro = perimetroCuadrado(value);

    respuestaCuadrado.innerHTML = `<p class="answer__text">El perimetro de tu cuadrado es: ${perimetro} cm.</p>`
}

function calcularAreaCuadrado(){
    const value = inputCuadrado.value;
    const area = areaCuadrado(value);

    respuestaCuadrado.innerHTML = `<p class="answer__text">El area de tu cuadrado es: ${area} cm^2.</p>`    
}

// *Triangulo
function calcularPerimetroTriangulo(){
    const value_ladoA = parseInt(ladoA.value);
    const value_ladoB = parseInt(ladoB.value);
    const value_base = parseInt(base.value);
    
    const perimetro = perimetroTriangulo(value_ladoA, value_ladoB, value_base);

    respuestaTriangulo.innerHTML = `<p class="answer__text">El perimetro de tu triangulo es: ${perimetro} cm.</p>`
}

function calcularAreaTriangulo(){
    const valor_base= parseInt(base.value);
    const valor_ladoA= parseInt(ladoA.value);
    const valor_ladoB= parseInt(ladoB.value);

    if(valor_ladoA === valor_ladoB && valor_ladoA != valor_base){

        var area = areaTriangulo(valor_base,valor_ladoA);
        area = area.toFixed(2);
        respuestaTriangulo.innerHTML = `<p class="answer__text">El area de tu triangulo isósceles es: ${area} cm^2.</p>`
    }
    else{
        alert("¡Hey!... Este NO es un triangulo ISOSCELES, el triangulo isósceles tiene dos lados de la misma longitud y una base diferente. Si tu triangulo tiene todos sus lados iguales es EQUILATERO y si los tiene todos diferentes puede ser ESCALENO o RECTANGULO: para ellos necesitaras otra formula. Suerte con eso :p ")
    }

    console.log(area);
}
function calcularAlturaTriangulo(){
    const valor_base= parseInt(base.value);
    const valor_ladoA= parseInt(ladoA.value);
    let altura = alturaTriangulo(valor_ladoA,valor_base);

    altura = altura.toFixed(2);

    respuestaTriangulo.innerHTML = `<p class="answer__text">La altura de tu triangulo isósceles es: ${altura} cm.</p>`

    console.log(altura);
}

// *Circulo
function calcularPerimetroCirculo(){

    const valor_radio = parseInt(radio.value);
    var perimetro = perimetroCirculo(valor_radio);

    perimetro = perimetro.toFixed(2);
    respuestaCirculo.innerHTML = `<p class="answer__text">El perimetro de tu circulo es: ${perimetro} cm.</p>`
}

function calcularAreaCirculo(){
    const valor_radio = parseInt(radio.value);
    var area = areaCirculo(valor_radio).toFixed(2);

    respuestaCirculo.innerHTML = `<p class="answer__text">El area de tu circulo es: ${area} cm^2.</p>`
    
}
