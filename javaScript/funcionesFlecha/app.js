const factorial = (numero) => {
    let total = 1;
    for ( let i = 1; i<= numero; i++ ){
        total *= i;
    }
    return total;
}

const combinatoria = (n,r) => factorial(n)/(factorial(n-r) * factorial(r));

const hallarHipotenusa = (x,y) => {
    let hipotenusa = Math.sqrt(x**2 + y**2);
    return hipotenusa;
}

const contarLetras = (palabra) => {
    let cantidadLetras = 0;
    for ( let letra of palabra ){
        if ( letra === 'A' ){
            cantidadLetras++
        }
    }
    return cantidadLetras
}

console.log('------------------------------------------------COMBINATORIA------------------------------------------------');
console.log(combinatoria(6,2));

console.log('------------------------------------------------HIPOTENUSA------------------------------------------------');
console.log(hallarHipotenusa(10,5).toFixed(2));

console.log('------------------------------------------------CANTIDAD LETRAS------------------------------------------------');
console.log(contarLetras('MANZANA'));