/*Desafíos
1. Crea una lista vacía llamada "listaGenerica".
2. Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
3. Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
4. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
5. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
6. Crea una función que calcule el promedio de los elementos en una lista de números.
7. Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
8. Crea una función que devuelva la suma de todos los elementos en una lista.
9. Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
10. Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
11. Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
*/

//1
//let listaGenerica = [];

/*//2
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

//3
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

//4
function mostrarListaLenguajes(){
    console.log(lenguagesDeProgramacion);
    let contador = 0;
    while(contador < lenguagesDeProgramacion.length){
        console.log(lenguagesDeProgramacion[contador]);
        contador ++;
    }
}
mostrarListaLenguajes();

//5
function mostrarListaInversaLenguajes(){
    //console.log(lenguagesDeProgramacion.reverse());
    console.log(lenguagesDeProgramacion);
    let i = lenguagesDeProgramacion.length - 1;
    console.log(i);
    while (i >= 0){
        console.log(lenguagesDeProgramacion[i]);
        i --;
    }
}
mostrarListaInversaLenguajes();*/

//6
/*function promedio(lista){
    let sumaElementos = 0;
    let promedio = 0;

    for(let i = 0; i < lista.length; i++){
        sumaElementos += lista[i];
    }
    console.log(sumaElementos);
    promedio = sumaElementos / lista.length;
    return promedio;
}

let listaNumeros = [17, 15, 22, 3];
console.log(promedio(listaNumeros));*/

//7
/*function encontrarMayorMenor(lista) {
    let mayor = lista[0];
    let menor = lista[0];

    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > mayor) {
            mayor = lista[i];
        }
        if (lista[i] < menor) {
            menor = lista[i];
        }
    }

    console.log("Mayor:", mayor);
    console.log("Menor:", menor);
}

let numeros = [15, 8, 25, 5, 12];
encontrarMayorMenor(numeros);*/

//8
/*function suma(lista){
    let sumaElementos = 0;

    for(let i = 0; i < lista.length; i++){
        sumaElementos += lista[i];
    }
    return sumaElementos;
}

let listaNumeros = [17, 15, 22, 3];
console.log(suma(listaNumeros));*/

//9
/*function posicionElemento(lista, numero){
    for (let i = 0; i < lista.length; i++){
        if (lista[i] === numero)
            return i;
    }
    return -1;
}

let listaNumeros = [17, 15, 22, 3];
console.log(posicionElemento(listaNumeros, 22));*/

//10
/*function sumaElementosLista(lista1, lista2){
    let sumaElementos = [];
    for (let i = 0; i < lista1.length; i++){
        sumaElementos[i] = lista1[i] + lista2[i]; 
    }
    return sumaElementos;
}

let lista1 = [17, 15, 22, 3];
let lista2 = [3, 22, 17, 17];

console.log(sumaElementosLista(lista1, lista2));*/

//11
function cuadradoDeNumero(lista){
    let cuadrado = [];
    for(let i = 0; i < lista.length; i++){
        cuadrado[i] = lista[i] * lista[i];
    }
    return cuadrado;
}

let listaNumeros = [17, 22, 15, 3];
console.log(cuadradoDeNumero(listaNumeros));