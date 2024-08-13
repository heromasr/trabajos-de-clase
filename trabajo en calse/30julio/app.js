/*console.log("HOLA MUNDOO DESDE NODE .JS");
function saludar(nombre) {
    console.log("hola bienvenido");
}
saludar("hola canpistas");*/


const fs= require('fs');
const datos ="contenido";
const ruta='./index.txt';

fs.writeFile(ruta,datos, (err) => {
    if (err) throw err;
    console.log('El archivo ha sido creado!');
})
