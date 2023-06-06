/*

new Map(): Crea un nuevo objeto Map.

map.set(key, value): Agrega un nuevo par clave-valor al objeto Map. Si la clave ya existe, actualiza su valor.

map.get(key): Devuelve el valor asociado con la clave especificada.

map.has(key): Devuelve un booleano indicando si el objeto Map contiene una entrada con la clave especificada.

map.delete(key): Elimina la entrada con la clave especificada del objeto Map.

map.clear(): Elimina todas las entradas del objeto Map, dejándolo vacío.

map.size: Propiedad que devuelve el número de entradas en el objeto Map.

map.keys(): Devuelve un iterable con las claves del objeto Map.

map.values(): Devuelve un iterable con los valores del objeto Map.

map.entries(): Devuelve un iterable con los pares clave-valor del objeto Map en forma de arrays.

map.forEach(callback[, thisArg]): Ejecuta una función de devolución de llamada para cada par clave-valor del objeto Map, en el orden de inserción.

*/


//? Crear un nuevo Map
const miMapa = new Map();

//? Agregar elementos al Map
miMapa.set('clave1', 'valor1');
miMapa.set('clave2', 'valor2');
miMapa.set('clave3', 'valor3');

//? Obtener el tamaño del Map
console.log('Tamaño del Map:', miMapa.size);

//? Obtener un valor del Map
console.log('Valor de clave2:', miMapa.get('clave3'));

//? Comprobar si una clave existe en el Map
console.log('¿Existe clave3?', miMapa.has('clave3'));

//? Recorrer el Map utilizando un bucle for...of
for (const [miClave, miValor] of miMapa) {
  console.log(miClave, miValor);
}

//? Eliminar un elemento del Map
miMapa.delete('clave2');

//? Vaciar el Map
miMapa.clear();



const mapaPrueba = new Map;

mapaPrueba.set( 'nombre', 'Oscar' );
mapaPrueba.set( 'edad', '23' );
mapaPrueba.set( 'telefono', '3157618908' );
mapaPrueba.set( 'correo', 'oscar@gmail.com' );

n = 0;

mapaPrueba.forEach(  (value,key) => {
    value = n;
    n++
} )

mapaPrueba.forEach(  (value,key) => {
    console.log(`Clave: ${key} Valor: ${value}`);
} )