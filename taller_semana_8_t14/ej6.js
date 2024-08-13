const saludar = (nombre, apellidos, callback) => {
    console.log(`Hola ${nombre} ${apellidos}!`);
    callback();
};
/*
saludar('John', 'Doe', () => {
    console.log('Hola callback!');
}); // Saludar a John Doe
*/

const micallback = () => {
    console.log('Hola callback!');
};

module.exports = { saludar, micallback };