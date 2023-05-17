/*Ejercicios De Javascript Nivel1*/
/*Ejercicio 1- Mostrar por consola:  tu Nombre, Apellido, Comision,  Hobbie*/
console.log("Mi nombre es: Gisela");
console.log("Mi Apellido es: Fredes");
console.log("Mi Comision es: 23058");
console.log("Mi hobbie es: Bailar");
/*Ejercicio 2- Escribe un programa que le pida al usuario que ingrese una frase y la imprima por consola*/
let frase = prompt("Ingrese una frase");
console.log("la frase ingresada es: " + frase);

/*Ejercicio 3- Escriba un programa que le pida al usuarioque ingrese su nombre e imprima Hola seguido del nombre y un signo de exclamacion!!*/
let nombre =prompt("Ingrese su nombre: ");
console.log("Hola "+ nombre+"!!!");

/*Ejercicio 4- Escribe un programa que le pida al  usuario su nombre y apellido y lo imprimo por pantalla*/
let nombreyapellido = prompt("Ingrese su nombre y apellido: ");
console.log("Tu nombre y apellido es : "+ nombreyapellido);

/*Ejercicio 5- Escribe un programa que le pida al usuario su año de nacimiento e imprima su edad actual en la actual con la frase: Tienes X años*/
let anio =prompt("Ingrese su año de nacimiento: ");
let entero= parseInt(anio);
let resultadoEdad = 2023 - entero;
console.log("Tienes "+ resultadoEdad + " años");

/*Ejercicio 6
El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de 
grasa de una persona.
El BMI se calcula con la siguiente formula:
peso / altura^2
Escribe un programa que le pida al usuario su peso y su altura para calcular su BMI e imprima la frase "Tu 
BMI es X".*/
let peso=prompt("Ingrese su peso: ");
let altura=prompt("Ingrese su altura: ");
let pesoInt=parseFloat(peso);
let alturaInt=parseFloat(altura);
let bmi= pesoInt/(alturaInt*alturaInt);
console.log("Tu BMI es: "+ bmi);

/*Ejercicio 7
Declarar una variable de nombre cantidadDeVentanas y asignarle la cantidad de ventanas que hay en 
tu casa. Mostrar el valor de la variable por la consola.*/
let cantidadDeVentanas =prompt("Ingrese la cantidad de ventanas de tu casa: ");
console.log("La cantidad de ventanas de tu casa es: " + cantidadDeVentanas);

/*Ejercicio 8
Declarar una variable de nombre soyHumano y asignarle el valor true (verdadero). Mostrar el valor de 
la variable por la consola.*/
let soyHumano =true;
console.log("El valor de la variable soyHumano es: "+ soyHumano);

/*Ejercicio 9
Declarar una variable de nombre miGustoDePizza y asignarle la variedad de pizza que más te guste 
usando un String (cadena de caracteres). Mostrar el valor de la variable por la consola.*/
let miGustoDePizza = prompt("Ingrese la variedad de pizza que más te guste: ");
console.log("La variedad de pizza es: "+ miGustoDePizza);

/*Ejercicio 10
Mostrar por la consola los siguientes valores false, 'Hola', 0 y 'Minions' usando la misma variable.*/
let variable = false;
console.log("El primer valor de la variable es: "+variable);
variable='Hola';
console.log("El segundo valor de la variable es: "+variable);
variable=0;
console.log("El tercer valor de la variable es: "+variable);
variable='Minions';
console.log("El cuarto valor de la variable es: "+variable);
/*Ejercicios 11
Crear un programa que dado la base y la altura de un triangulo calcule la superficie y el perímetro.*/

let base = prompt("Ingrese la base del triángulo: ");
let alturaTri = prompt("Ingrese la altura del triángulo:");
let basefl= parseFloat(base);
let alturaTriFl = parseFloat(alturaTri);
let superficie= (basefl * alturaTriFl)/2;
let perimetro= basefl+ basefl + alturaTriFl;
console.log("La superficie del triángulo es: "+ superficie);
console.log("El perimetro del triángulo es: "+ perimetro);
/*Ejercicio 12
Crear un programa que, al pasar los datos del peso de una persona en libras, haga la conversión a 
kilogramos*/
let libras=prompt("Ingrese la cantidad de libras:");
let librasfl = parseFloat(libras);
let kilo = librasfl*0.45;
console.log("Su equivalencia en kg es:"+ kilo);
/*Ejercicio 13
Crear un programa que al ingresar el sueldo de un trabajador, aplique el 15% de aumento y lo muestre 
en la consola.*/
let sueldo = prompt("Ingrese el valor del sueldo");
let sueldofl= parseFloat(sueldo);
let aumento = (sueldofl*15)/100;
sueldofl+=aumento;
console.log("El sueldo con el aumento es "+ sueldofl);
/*Ejercicio 14
Crear un programa que al ingresar una nota de un alumno, muestre con un alert() si el alumno esta 
“aprobado” (se aprueba con una nota mayor a 7) y “reprobado” en caso contrario*/
let nota=prompt("Ingrese la nota del alumno: ");
let notaint= parseInt(nota);
if(notaint>=7){
    alert("Alumno aprobado")
}
else{
    alert("alumno reprobado")
}
/*Ejercicio 15
Crear un programa tal que dado como datos la categoría y el sueldo de un trabajador, calcule el 
aumento correspondiente teniendo en cuenta la siguiente tabla
 Incrementos
Categoría: % aumento
1 = 15%
2 = 10%
3 = 8%
4 = 7%.
Mostrar con un Alert() la categoría y el nuevo sueldo*/
let categoria=prompt("Ingrese la categoría:");
let sueldo2=prompt("Ingrese el valor del sueldo: ");
let categoriaint=parseFloat(categoria);
let sueldo2int=parseFloat(sueldo2);
let aumentopc=0;

switch (categoriaint) {
    case 1:
        aumentopc=(sueldo2int*15)/100;
        break;
    case 2:
        aumentopc=(sueldo2int*10)/100;
        break;
    case 3:
        aumentopc=(sueldo2int*8)/100;
        break;
    case 4:
        aumentopc=(sueldo2int*7)/100;
        break;
    default:
        break;
}
sueldo2int+=aumentopc;
console.log("El sueldo con aumento es:"+sueldo2int);
/*Ejercicio 16
Crear un programa tal que dado como datos la matrícula y 5 calificaciones de un alumno; imprima la 
matricula, el promedio y la palabra “aprobado” si el alumno tiene un promedio mayor o igual que 7, y 
la palabra “no aprobado” en caso contrario*/
let matricula =prompt("Ingrese el valor de la matricula del alumno");
var notas=[];
var notasint=0;
var cont=0;
for (let i = 0; i <5; i++) {
    var x=prompt("Ingrese la " + (i+1)+ " nota:");
    notasint=parseInt(x);
    notas[i]=notasint;
    cont+=notas[i];
}
var promedio=cont/5;
console.log("El alumno de Matricula: "+ matricula+ " y su promedio es: "+ promedio);
if (promedio >=7) {
    console.log("Aprobado");

}
else{
    console.log("No aprobado");
}
/*Ejercicio 17
Dado 3 números enteros, determinar cual de ellos es el mayor, tenga en cuenta que los números 
pueden ser iguales*/
let numero1 =0;
let numero2 =0;
let numero3 =0;
numero1=parseInt(prompt("Ingrese el numero 1:"));
numero3=parseInt(prompt("Ingrese el numero 2:"));
numero2=parseInt(prompt("Ingrese el numero 3:"));
if (numero1!= numero2!= numero3) {
    if (numero1>numero2 && numero1>numero3) {
        console.log("El mayor de los 3 es:"+ numero1);
    } else if (numero2>numero1 && numero2> numero3) {
        console.log("El mayor de los 3 es:"+ numero2);
    } else {
        console.log("El mayor de los 3 es:"+ numero3);
    }
} else {
    console.log("Los números no son diferentes");
}
