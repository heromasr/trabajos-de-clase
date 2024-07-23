//buble while = mientras
/*let x=0;
while (x <=50){
    if (x%5===0){
        document.write(x +"<br>");
    }
    /*document.write("vuelta #"+x+"<br>");
    x=x+2; //incremento de variable
x++; 
}

//bucle for
for(let x=10; x<=20; x=x+2) {
    document.write(x + "<br>");
}
    

let i=0;
do{
    document.write(i+"<br>");
    i += 1;
    

}while(i<=10);
*/
//switch
let num1=Number(prompt("ingrese un numero"));
let num2=Number(prompt("otro un numero"));
let operacion=prompt("ingrese la operacion que desea realizar;\n 1. suma\n 2.resta\n 3.multiplicacion/\n 4.division");
let resultado;

switch(operacion){
    case "1":
        resultado=num1+num2;
        alert("el resultado de la suma es"+resultado);
        break;
        
    case "2":
        resultado=num1-num2;
        alert("el resultado de la suma es"+resultado);
        break;
    case "3":
        resultado=num1*num2;
        alert("el resultado de la multiplicacion es"+resultado);
        break;
    case "4":
        if(num2!=0){
            resultado=num1/num2;
            
        }else{
            alert("No se puede dividir por 0");
        }
        alert("el resultado de la division es <br>"+resultado);
        break;
    default:
        alert("operacion no valida");
}

