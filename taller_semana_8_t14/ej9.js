const express = require('express');
const app = express();
const puerto = 4000;

app.get('/', (req, res) => {
    res.end('Hola Mundo!');

});

app.listen(puerto, (err) => {
    if (err) {
        console.error(`nose pudo levanatar el seervidor el puerto ${puerto}`);
        return;
    }
    console.log(`Servidor corriendo en el puerto ${puerto}`);
});