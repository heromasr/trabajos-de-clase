
/*
//1
function encontrarMayor(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

// Ejemplo de uso:
const numero1 = 10;
const numero2 = 7;
document.write("El mayor número es:", encontrarMayor(numero1, numero2));

//2
function encontrarMenor(num1, num2, num3) {
    return Math.min(num1, num2, num3);
}

// Ejemplo de uso:
const numeroA = 5;
const numeroB = 3;
const numeroC = 8;
document.write("El menor número es:", encontrarMenor(numeroA, numeroB, numeroC));

//3
function esMayorDeEdad(edad) {
    if (edad >= 18) {
        return "Es mayor de edad.";
    } else {
        return "No es mayor de edad.";
    }
}

// Ejemplo de uso:
const edadPersona = 22;
document.write(esMayorDeEdad(edadPersona));

//4

function esvocal(letra) {
    const vocales = "aeiouAEIOU";
    if (!isNaN(entrada) && entrada.trim() !== '') {
        return "Error: Debes ingresar una letra, no un número.";
    }
    if (letra.length !== 1) {
        return "debe ingresar una sola letra";
    }
    else if (vocales.includes(letra)) {
        return "ingresaste vocal";
    }
    else {
        return "es una consonante"
    }

}
let entrada = prompt("ingresa una letra");
const resultado = esvocal(entrada);
document.write(resultado);



//5
function esParOImpar(numero) {
    if (numero % 2 === 0) {
        return "El número es par.";
    } else {
        return "El número es impar.";
    }
}


const miNumero =8;
document.write(esParOImpar(miNumero));

//6
function determinarSigno(numero) {
    if (numero > 0) {
        return "El número es positivo.";
    } else if (numero < 0) {
        return "El número es negativo.";
    } else {
        return "El número es cero.";
    }
}

// Ejemplo de uso:
const miNumero = 5;
document.write(determinarSigno(miNumero));

//7
function sonIguales(num1, num2) {
    if (num1 === num2) {
        return "Los números son iguales.";
    } else {
        return "Los números son diferentes.";
    }
}

// Ejemplo de uso:
const numeroA = 10;
const numeroB = 10;
document.write(sonIguales(numeroA, numeroB));

//8
function numeroDelMedio(num1, num2, num3) {
    const numerosOrdenados = [num1, num2, num3].sort((a, b) => a - b);
    return numerosOrdenados[1];
}

// Ejemplo de uso:
const numX = 5;
const numY = 8;
const numZ = 3;
document.write("El número del medio es:", numeroDelMedio(numX, numY, numZ));

//9
function evaluarCalificacion(calificacion) {
    if (calificacion >= 90) {
        return "A";
    } else if (calificacion >= 80) {
        return "B";
    } else if (calificacion >= 70) {
        return "C";
    } else if (calificacion >= 60) {
        return "D";
    } else {
        return "F";
    }
}

// Ejemplo de uso:
const nota = 75;
document.write("La calificación es:", evaluarCalificacion(nota));

//10
function obtenerDiaSemana(numero) {
    const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    if (numero >= 1 && numero <= 7) {
        return dias[numero - 1];
    } else {
        return "Número inválido. Debe estar entre 1 y 7.";
    }
}

// Ejemplo de uso:
const diaNudocument.write("El día de la semana es:", obtenerDiaSemana(diaNumero));
//11
function mostrarNumerosDel1Al10() {
    for (let i = 1; i <= 10; i++) {
        document.write(i);
    }
}

mostrarNumerosDel1Al10();

//12
function mostrarNumerosDel10Al1() {
    for (let i = 10; i >= 1; i--) {
        document.write(i);
    }
}

mostrarNumerosDel10Al1();

//13
function mostrarNumerosPares() {
    for (let i = 2; i <= 20; i += 2) {
        document.write(i);
    }
}

mostrarNumerosPares();

//14
function mostrarNumerosImpares() {
    for (let i = 1; i <= 19; i += 2) {
        document.write(i);
    }
}

mostrarNumerosImpares();

//15
function tablaDeMultiplicar(numero) {
    for (let i = 1; i <= 10; i++) {
        document.write(`${numero} x ${i} = ${numero * i}`);
    }
}

tablaDeMultiplicar(5);

//16
function sumaDeNumerosDel1Al10() {
    let suma = 0;
    for (let i = 1; i <= 10; i++) {
        suma += i;
    }
    document.write("La suma es:", suma);
}

sumaDeNumerosDel1Al10();

//17
function factorial(numero) {
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }
    document.write(`El factorial de ${numero} es: ${resultado}`);
}

factorial(5);

//18
function fibonacciHastaElDecimo() {
    let a = 0;
    let b = 1;
    console.log(a);
    console.log(b);
    for (let i = 3; i <= 10; i++) {
        const c = a + b;
        document.write(c);
        a = b;
        b = c;
    }
}

fibonacciHastaElDecimo();

//19
function mostrarDivisores(numero) {
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            document.write(i);
        }
    }
}

mostrarDivisores(12);

//20
function contarVocalesYConsonantes(cadena) {
    const vocales = "aeiouAEIOU";
    let numVocales = 0;
    let numConsonantes = 0;

    for (const char of cadena) {
        if (vocales.includes(char)) {
            numVocales++;
        } else if (char.match(/[a-zA-Z]/)) {
            numConsonantes++;
        }
    }

    document.write(`Vocales: ${numVocales}, Consonantes: ${numConsonantes}`);
}

contarVocalesYConsonantes("Hola, mundo");

*/












