let lado,base,altura;

lado = parseFloat(prompt("Ingrese el lado del cuadrado"));

base = parseFloat(prompt("Ingrese la base del rectangulo"));

altura = parseFloat(prompt("Ingrese la altura del rectangulo"));

document.write(`
El perimetro del cuadrado es ${lado*4}<br>
El area del rectangulo es ${base*altura}
`)


