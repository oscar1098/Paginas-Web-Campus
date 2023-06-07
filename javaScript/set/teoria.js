const conjunto = new Set();

conjunto.add('elemento1');
conjunto.add('elemento2');
conjunto.add('elemento3');
conjunto.add('elemento4');
conjunto.add('elemento5');

console.log(conjunto.size);

for ( const elemento of conjunto ){
    console.log(elemento);
}

console.log('-----------------------------------------------------');
conjunto.delete('elemento2');

for ( const elemento of conjunto ){
    console.log(elemento);
}








