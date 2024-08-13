const http = require('http');

const puerto = 3001;

const servidor = http.createServer((req, res) => {
    res.writeHead(200, { 'conten-type': 'text/plain' });
    res.end('Bienvenidos a Node .js server side');
});

servidor.listen(puerto, (err) => {
    if (err) {
        console.error(`nose pudo levanatar el seervidor el puerto ${puerto}`);
        return;
    }
    console.log(`Servidor corriendo en el puerto ${puerto}`);
});
