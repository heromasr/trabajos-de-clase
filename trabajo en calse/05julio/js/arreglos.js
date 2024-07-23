
const arreglo = [100,true,"palabra",45,"cadena" ];


const frutas =["manzana","uva","kiwi","arandano","mandarina" ];
/*frutas.push("manzana");
frutas.unshift("uva");
frutas.pop("kiwi");
frutas.shift();*/
frutas.splice(0,3, "corozo","fresa","durazno");
frutas.splice(3,0, "lulo");
/*
document.write( frutas.length+ "<br>");*/
document.write(frutas);
const comida= frutas.slice();
/*
document.write("<br><br>soy copi<br>"+comida);*/
document.write("<br>"+comida.indexOf("<br>fresa"));

if(frutas. includes("frambuesa" )){
    document.write("<br>"+frutas.indexOf("frambuesa" ));
}
else
{
    frutas. push ("frambuesa") ;
    document.write("<br>"+frutas);
}
if(frutas. includes("frambuesa" )){
    document.write("<br>"+frutas.indexOf("frambuesa" ));
}
else
{
    frutas. push ("frambuesa") ;
    document.write("<br>"+frutas);
}
for(let i=0; i<frutas.length; i++) {
    document.write(`<br> el elemento con indice ${i} es ${frutas[i]}`);


}
const primero=[1,2,3];
const segundo=[4,5,6];
const tercero=[7,8,9];

const numeros= primero.concat (segundo,tercero); ;
document.write("<br>"+numeros);