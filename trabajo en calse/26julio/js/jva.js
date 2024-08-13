let usuarios = [];
const form = document.getElementById("registroForm");
const tabla = document.getElementById("usuariosTabla").getElementsByTagName("tbody")[0];

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const nombres = document.getElementById("nombres").value;
    const apellidos = document.getElementById("apellidos").value;
    const correo = document.getElementById("correo").value;
    const contraseña = document.getElementById("contraseña").value;

    const usuario = { nombres, apellidos, correo, contraseña };
    usuarios.push(usuario);
    actualizarTabla();
});

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const correo = document.getElementById("logincorreo").value;
    const contraseña = document.getElementById("loginContrase").value;
    const usuario = usuarios.find(u => u.correo === correo && u.contraseña === contraseña);

    if (usuario) {
        alert(`Bienvenido, $ {usuario.nombres} $ {usuario.apellidos}!`);

    }

    else {
        alert("Usuario o contraseña incorrectos");
    }
    loginForm.reset();
})
function actualizarTabla() {
    tabla.innerHTML = "";
    usuarios.forEach((usuario, index) => {
        const fila = tabla.insertRow();
        fila.insertCell().textContent = usuario.nombres;
        fila.insertCell().textContent = usuario.apellidos;
        fila.insertCell().textContent = usuario.correo;

        const celdaAcciones = fila.insertCell();

        const botonEditar = document.createElement("button");
        botonEditar.textContent = "editar";
        botonEditar.onclick = () => editarUsuario(index);

        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "eliminar";
        btnEliminar.onclick = () => eliminarUsuario(index);

        celdaAcciones.appendChild(botonEditar);
        celdaAcciones.appendChild(btnEliminar);
    });
}

function editarUsuario(index) {
    const usuario = usuarios[index];
    document.getElementById("nombres").value = usuario.nombres;
    document.getElementById("apellidos").value = usuario.apellidos;
    document.getElementById("correo").value = usuario.correo;
    document.getElementById("contraseña").value = usuario.contraseña;
    actualizarTabla();
}

function eliminarUsuario(index) {
    usuarios.splice(index, 1);
    actualizarTabla();
}
