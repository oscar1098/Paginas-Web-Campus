let numero,cantidad,sumatoria,promedio,mayor,menor;

numero = 1;
mayor = 0;
menor = 100000000000000;
sumatoria = 0
cantidad = 0


while (numero != 0 ){
    numero = parseFloat(prompt("Ingrese el numero"));
    sumatoria = numero + sumatoria
    cantidad++

    if (numero > mayor){
        mayor = numero
    }
    if(numero != 0){
        if (numero < menor){
            menor = numero
        }
    }
}

document.write(`
    La sumatoria de los valores: ${sumatoria}<br>
    El promedio de los valores: ${sumatoria/(cantidad-1)}<br>
    cuantos valores fueron digitados: ${cantidad-1}<br>
    Numero mayor: ${mayor}<br>}
    Numero menor: ${menor}
`);
