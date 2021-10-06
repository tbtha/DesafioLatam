//Ejecicio 1

//Ejercicio 2
//Se pide al usuario mediante prompt que ingrese un numero 
let num1 = parseInt(prompt("Ingrese un primer numero: "));
let num2 = parseInt(prompt("Ingrese un segundo numero: "));
 
//Actua un operador y el resultado se guarda en una nueva variable
let suma = num1 + num2;
let resta = num1 - num2;
let multiplica = num1 * num2;
let divide = num1 / num2;
let modulo = num1 % num2;

//Se pinta en html los resultados
document.write( `
    <h1>Ejercicio 2<h1>
    <h2>El resultado de la suma entre el numero ${num1} y ${num2} es : ${suma}<h2>
    <h2>El resultado de la resta entre el numero ${num1} y ${num2} es : ${resta}<h2>
    <h2>El resultado de la multiplicacion entre el numero ${num1} y ${num2} es : ${multiplica}<h2>
    <h2>El resultado de la division entre el numero ${num1} y ${num2} es : ${divide}<h2>
    <h2>El resultado del modulo entre el numero ${num1} y ${num2} es : ${modulo}<h2>

`)

//Ejercicio 3
let gradosCelsius = parseInt(prompt("Ingrese la temperatura en grados Celsius:"));


console.log(`
    Grados Celsius transformado a Kelvin son : ${gradosCelsius + 273.15 } K
    Grados Celsius transformado a Fahrenheit son : ${(gradosCelsius * 9/5) + 32} ºF
`)

//Ejercicio 4
let cantidadDias = parseInt(prompt("Ingrese una cantidad de dias: "));
let anio = Math.floor( cantidadDias / 365);
let semanas = Math.floor((cantidadDias % 365) / 7);
let dias = Math.floor((cantidadDias % 365) % 7);
console.log(`
    Los dias ingresados son equivalentes a: ${anio}años, ${semanas} semanas, ${dias}dias.

`)


//Ejercicio 5
let  primerNum = parseInt(prompt("Ingrese un primer numero: "));
let  segundoNum = parseInt(prompt("Ingrese un segundo numero: "));
let  tercerNum = parseInt(prompt("Ingrese un tercer numero: "));
let cuartoNum = parseInt(prompt("Ingrese un cuarto numero: "));
let quintoNum = parseInt(prompt("Ingrese un quinto numero: "));

console.log(`
    La suma de todos los numeros es: ${ primerNum + segundoNum + tercerNum + cuartoNum + quintoNum}
    El promedio de los numero ingresado es: ${(primerNum + segundoNum + tercerNum + cuartoNum + quintoNum) / 5}

`)