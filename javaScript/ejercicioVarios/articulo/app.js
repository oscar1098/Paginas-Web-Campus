let nombre, precio,cantidad;

nombre = prompt("Ingrese el nombre del articulo");
precio = parseFloat(prompt("Ingrese el precio del articulo"));
cantidad = parseFloat(prompt("Ingrese cuantos articulos desea comprar"));

document.write(`El comprador debe pagar ${precio*cantidad}`)