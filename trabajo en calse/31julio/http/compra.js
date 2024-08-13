const fs=require('fs');

fs.readFile ('compras.json', 'utf8',(err, data) =>{
    if (err){
        console.error('Error al leer el archivo:', err);
        return;
    }
    const factura=JSON.parse(data);

    console.log(`La compra en ${factura.tienda} se hizo el día ${factura.fecha}`);
    console.log(`Cliente(s): ${factura.clientes.nombre}`);
});

