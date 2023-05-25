
let num;

num = parseFloat(prompt("Ingrese un numero"));

if(num%2 == 0 && num > 10){
    document.write(`${num} es par y mayor que 10`);
}else if (num%2 != 0 && num > 10){
    document.write(`${num} es impar y mayor que 10`);
}else{
    document.write(`${num} es menor de 10`);
}