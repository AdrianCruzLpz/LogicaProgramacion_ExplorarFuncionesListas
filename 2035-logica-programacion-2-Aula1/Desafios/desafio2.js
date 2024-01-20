/*
Desafíos:
1. Crear una función que muestre "¡Hola, mundo!" en la consola.
2. Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
3. Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
4. Crear una función que reciba tres números como parámetros y devuelva su promedio.
5. Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
6. Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
*/

//1
/*function holaMundo(){
    console.log('¡Hola, mundo!');
    return;
}
holaMundo();*/


//2
/*function saludar(nombre){
    let nombrePersona = nombre;
    console.log(`¡Hola, ${nombrePersona}!`);
    return;
}
saludar('Adrian');*/


//3
/*function dobleNumero(numero){
    let numeroDoble = numero * 2;
    console.log(numeroDoble);
    return;
}
dobleNumero(5);*/

//4
/*function promedio(numero1, numero2, numero3){
    let promedio = (numero1 + numero2 + numero3) / 3;
    console.log(promedio);
    return;
}
promedio(8, 7, 7);*/

//5
/*function numeroMayor(numero1, numero2){
    if (numero1 > numero2){
        console.log(`${numero1} es mayor que ${numero2}`);
    } else if (numero1 < numero2){
        console.log(`${numero2} es mayor que ${numero1}`);
    } else {
        console.log("Son iguales");
    }
    return;
}
numeroMayor(8,8);*/

//6
function numeroPorSiMismo(numero){
    console.log(numero * numero);
    return;
}
numeroPorSiMismo(5);