/*const product ={
    nombre: "manzana",
    categoria:"frutas",
    precio: 2000
}
const persona={
    nombre: ["homero","Juan"],
    apellido: "Perez",

    identificacion: "123456789",
    correo: "juan.perez@gmail.com",
    edad: 35,
    direccion: {
        ciudad:"bogota",

    }

}
document.write(persona.nombre[1] ,persona.nombre[0]+"<br>");
document.write(persona.apellido+"<br>");
document.write(persona.identificacion+"<br>");
document.write(persona.correo+"<br>"); 
document.write(persona["edad"]+"<br>");
document.write(persona.direccion.ciudad+"<br>");

function saludar(nombre) {
    document.write("hola"+nombre+"<br>");
}
saludar("silvana")*/
//taler
//1
function encontrarNumeroMayor(array) {
    let mayor = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > mayor) {
            mayor = array[i];
        }
    }
    return mayor;
}
document.write(encontrarNumeroMayor([2, 7, 3, 9, 4])); // Output: 9
//2
/*
function convertirAMayusculas(array) {
    let nuevoArray = [];
    for (let i = 0; i < array.length; i++) {
        nuevoArray.push(array[i].toUpperCase());
    }
    return nuevoArray;
}
console.log(convertirAMayusculas(["hola", "mundo"])); // Output: ["HOLA", "MUNDO"]
//3
function elevarAExponente(base, exponente) {
    return Math.pow(base, exponente);
}
console.log(elevarAExponente(2, 3)); // Output: 8
//4
function sumarNumeros(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma;
}
console.log(sumarNumeros([1, 2, 3, 4])); // Output: 10
//5

function obtenerPropiedades(objeto) {
    return Object.keys(objeto);
}
console.log(obtenerPropiedades({ a: 1, b: 2, c: 3 })); // Output: ["a", "b", "c"]
*/
