var boton = document.getElementById("miBoton");
boton.addEventListener("click", function() {
document.body.style.backgroundColor = "yellow";
});
var div = document.getElementById("miDiv");
/*
var div = document.getElementById("miDiv");

div.addEventListener("mouseover", function() {
alert("¡Hola! Estás pasando el mouse por encima de mí.");
});*/
var parrafo = document.getElementById("miParrafo");
document.addEventListener("keydown", function(event) {
parrafo.innerHTML = "Presionaste la tecla " + event.key;
});