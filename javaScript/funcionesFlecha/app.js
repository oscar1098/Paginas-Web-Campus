let sumadorLetra = 0;
let total = 1;


const factorial = (numero) => {for ( let i = 1; i<= numero; i++ ){ total *= i; }return total; }

const combinatoria = (n,r) => factorial(n)/(factorial(n-r) * factorial(r));

const hallarHipotenusa = (x,y) => Math.sqrt(x**2 + y**2);

const contarletras = palabra =>{ for ( let letra of palabra){ letra === 'A' ? sumadorLetra++ : undefined} return sumadorLetra;};


console.log('------------------------------------------------COMBINATORIA------------------------------------------------');
console.log(combinatoria(6,2));

console.log('------------------------------------------------HIPOTENUSA------------------------------------------------');
console.log(hallarHipotenusa(10,5).toFixed(2));

console.log('------------------------------------------------CANTIDAD LETRAS------------------------------------------------');
console.log(contarletras('MANZANA'));