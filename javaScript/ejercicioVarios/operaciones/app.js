let num1, num2;

num1 = parseFloat(prompt("Ingrese un numero"))
num2 = parseFloat(prompt("Ingrese un numero"))

if (num1 > num2){
    document.write(`${num1} + ${num2} = ${num1 + num2}<br>${num1} - ${num2} = ${num1 - num2}`)
}else{
    document.write(`${num1} * ${num2} = ${num1 * num2} <br> ${num1} / ${num2} = ${num1 / num2}`)   
}