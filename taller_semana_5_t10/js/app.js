/*let num = 15;

if (num >= 10 && num <= 20) {
    document write("el numero esta entre 10 y 20");
}
else if (num < 10) {
    document write("el numero es menor a 10");
}
else {

    document.write("el numero es mayon a 20");
}*/
/*
let nombre= prompt("por favor ingresa tu nombre");
let edad= prompt("por favor ingresa tu edad");
if (edad < 18){
    document.write("Hola " + nombre + " Eres menor de edad <br>");
    document.write("no puedes ingresar al bar")
}
else {
    document.write("Hola " + nombre + " Eres mayor de edad<br>");
    document.write("si puedes ingresar al bar")
}*/

//taller

/*
//1
let nombre= "roslay";
let edad= 42;
document.write("tu nombre es" + nombre + "y tu edad es"+edad);
//2
let esestudiante= true;
let altura = 178;
document.write("<br> el tipo de dato de la variable es estudiante es:"+typeof esestudiante);
document.write(typeof altura +"<br>");
//3
const pi = 3.1416;

// Intento de modificar la constante (esto generará un error)
//PI = 3.14; 

document.write("El valor de PI es: " + PI);

//4
let a = 5;
let b = 10;

let suma = a + b;
let resta = a - b;
let multiplicacion = a * b;
let division = a / b;
let modulo = a % b;

document.write("<br> suma 5 + 10 es:  "+suma );
document.write("<br> resta 5 - 10 es:   "+resta);
document.write("<br> multiplicacion 5 * 10 es:  "+multiplicacion);
document.write("<br> division 5 / 10 es:  "+division);
document.write("<br> modulo 5 / 10 es:  "+modulo);
*
//5
let x = 10

let suma = x += 5;
let resta = x -= 3;
let multiplicacion = x *= 2;

let division = x /= 5;

let modulo = x %= 7;






document.write("<br>El valor final de x es: " + suma);
document.write("<br>El valor final de x es: " + resta);
document.write("<br>El valor final de x es: " + multiplicacion);
document.write("<br>El valor final de x es: " + division);
document.write("<br>El valor final de x es: " + modulo);

//6

var contador = 2;

let contador1 = contador + 1;
let contador2 = contador - 3;

alert("El valor final de contador2 es: " + contador1);
alert("El valor final de contador1 es: " + contador2);


//7
let a = 5;
let b = 8;

alert("5 es mayor que 8 : " + (a > b)); // a es mayor que b
alert("5 es menor que 8: " + (a < b)); // a es menor que b
alert("5 es mayor o igual que 8: " + (a >= b)); // a es mayor o igual que b
alert("5 es menor o igual que 8: " + (a <= b)); // a es menor o igual que b
alert("5 es igual a 8: " + (a == b)); // a es igual a b (comparación de valor)
alert("5 es igual a 8: " + (a === b)); // a es igual a b (comparación de valor y tipo)
//8

let x = true;
let y = false;
let z = true;


let resultadoAnd = x && y; // false


let resultadoOr = x || z; // true


let resultadoNot = !z; // false


alert(`Resultado AND: ${resultadoAnd}`);
alert(`Resultado OR: ${resultadoOr}`);
alert(`Resultado NOT: ${resultadoNot}`);

//9
let nombre = "Juana";
let apellido = "Manso";

let resultado = "Pasado el tiempo, " + nombre + " " + apellido + " va a tener 28";

alert(resultado);


//10
// Declaramos una variable con un valor numérico
let numero = 42; // Puedes cambiar este valor según tu necesidad

// Convertimos el número a una cadena
let cadena = numero.toString();

// Mostramos el tipo de dato resultante en una ventana de alerta
alert(`El valor ${numero} convertido a cadena es: ${cadena}`);

//11
let distanciaKm = 10; 

// Convertimos a metros
let metros = distanciaKm * 1000;

// Convertimos a centímetros
let centimetros = distanciaKm * 100000;

// Convertimos a millas
let millas = distanciaKm * 0.621371;


alert(`Distancia en metros: ${metros} m`);
alert(`Distancia en centímetros: ${centimetros} cm`);
alert(`Distancia en millas: ${millas} mi`);
//12
// Declaramos las variables
let base = 5;
let altura = 8;

// Calculamos el área y el perímetro
let area = base * altura;
let perimetro = 2 * (base + altura);

// Mostramos los resultados en ventanas de alerta
alert(`Área del rectángulo: ${area}`);
alert(`Perímetro del rectángulo: ${perimetro}`);

//13
// Declaramos las calificaciones
let calificacion1 = 8;
let calificacion2 = 7;
let calificacion3 = 9;

// Calculamos el promedio
let promedio = (calificacion1 + calificacion2 + calificacion3) / 3;

// Mostramos el resultado en una ventana de alerta
alert(`Promedio de calificaciones: ${promedio}`);

//14
// Declaramos el precio original
let precioOriginal = 100;

// Calculamos el descuento
let descuento = 0.15 * precioOriginal;

// Calculamos el precio final
let precioFinal = precioOriginal - descuento;

// Mostramos los resultados en ventanas de alerta
alert(`Precio original: $${precioOriginal}`);
alert(`Descuento (15%): $${descuento}`);
alert(`Precio final: $${precioFinal}`);

//15
// Declaramos la cantidad en dólares
let dolares = 100; // Puedes cambiar este valor según tu necesidad

// Conversión a euros (EUR)
let euros = dolares * 0.78386213;

// Conversión a libras esterlinas (GBP)
let librasEsterlinas = dolares * 0.78386213 / 1.27573;

// Conversión a yenes japoneses (JPY)
let yenesJaponeses = dolares * 205.12201;

// Mostramos los resultados en ventanas de alerta
alert(`Dólares a euros: ${euros.toFixed(2)} EUR`);
alert(`Dólares a libras esterlinas: ${librasEsterlinas.toFixed(2)} GBP`);
alert(`Dólares a yenes japoneses: ${yenesJaponeses.toFixed(2)} JPY`);

*/
