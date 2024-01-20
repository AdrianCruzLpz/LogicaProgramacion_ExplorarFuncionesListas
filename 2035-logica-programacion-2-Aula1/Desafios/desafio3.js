/*
Desafíos:
1. Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
2. Crea una función que calcule el valor del factorial de un número pasado como parámetro.
3. Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
4. Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
5. Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
6. Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

*/

//1
/*function indiceMasaCorporal(altura, peso) {
    let imc = peso / (altura * altura);
    console.log(imc);
    return; 
}

indiceMasaCorporal(1.76,51);*/

//2
/*function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFactorial(numero - 1);
    }
  }
  // Ejemplo de uso
let numero = 5;
let resultado = calcularFactorial(numero); 
console.log(`El factorial de ${numero} es ${resultado}`);*/

//3
/*function convertirAReales(dolares) {
    let reales = dolares * 4.8;
    console.log(`$${dolares}USD es igual a R$${reales}`);
    return;
}

convertirAReales(50);*/

//4
/*function perimetroAreaRectangulo(altura, anchura) {
    let perimetro = (2 * altura) + (2 * anchura);
    let area = altura * anchura;
    console.log(`El perimetro es igual a ${perimetro}m`);
    console.log(`El area es igual a ${area}m^2`);
    return;
}
perimetroAreaRectangulo(25,12);*/

//5
/*function perimetroAreaCirculo(radio, pi) {
    let perimetro = (2*radio) * pi;
    let area = pi * (radio * radio);
    console.log(`El perimetro es igual a ${perimetro}m`);
    console.log(`El area es igual a ${area}m^2`);
    return;
}
let radio = 50;
let pi = 3.14;
perimetroAreaCirculo(radio,pi);*/

//6
function tablaMultiplicar(numero) {
    let contador = 1;
    while (contador <= 10){
        let resultado = numero * contador;
        console.log(`${numero} x ${contador} = ${resultado}`);
        contador ++;
    }
    return;
}
tablaMultiplicar(6);