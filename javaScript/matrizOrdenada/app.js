const crearMatriz = (tamañoMatriz) => {
    let matriz = [];
    for (let i = 1; i <= tamañoMatriz; i++){
        let numero = [];
        for ( let j = 1; j<=tamañoMatriz; j++){
            numero.push(Math.floor( Math.random() * 100 ));
        }
        matriz.push(numero);
    }
    console.log(matriz);

    return matriz;
}

const matrizOrdenada = (tamañoMatriz) => {

    let matrizFinal = [];
    let indiceInicial = 0, indiceFinal = 0;
    const arregloTotal = crearMatriz(tamañoMatriz).flat().sort( (a,b) => a-b );

    for ( let i = 1; i <= tamañoMatriz; i++ ){
        
        indiceFinal = indiceInicial + tamañoMatriz;

        ( i % 2 === 0 ) ? matrizFinal.push( arregloTotal.slice( indiceInicial, indiceFinal ).reverse()) 
                        : matrizFinal.push(arregloTotal.slice( indiceInicial, indiceFinal ) ); 

        indiceInicial = indiceFinal;
    }

    return matrizFinal;
    
}
console.log(matrizOrdenada(10));






















