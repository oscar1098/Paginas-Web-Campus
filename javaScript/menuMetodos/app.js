let matriz =[];
let numero = [];

for (let i = 0; i <= 2; i++){
    numero = [];
    for ( let j = 0; j<=2; j++){
         numero.push(Math.floor( Math.random() * 100 ));
    }
    matriz.push(numero)
}

console.log(matriz);

const ordenar = ([ arreglo1, arreglo2, arreglo3]) => {
    const matrizOrdenada = [];

    const arregloOrdenado = arreglo1.concat(arreglo2,arreglo3);
    
    arregloOrdenado.sort(( a,b ) => a-b);

    matrizOrdenada.push( arregloOrdenado.slice(0,3));
    matrizOrdenada.push( arregloOrdenado.slice(3,6).reverse());
    matrizOrdenada.push( arregloOrdenado.slice(6,10));

    return matrizOrdenada;
}

console.log( ordenar(matriz) );

// const crearMatriz = (tamañoMatriz) => {
//     let matriz =[];
//     let numero = [];

//     for (let i = 0; i <= tamañoMatriz; i++){
//         numero = [];
//         for ( let j = 0; j<=tamañoMatriz; j++){
//             numero.push(Math.floor( Math.random() * 100 ));
//         }
//         matriz.push(numero);
//     }
    
//     return matriz;
// }























