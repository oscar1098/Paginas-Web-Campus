let nombre1,nombre2,nombre3,edad1,edad2,edad3;

nombre1 = prompt("Ingrese el nombre del usuario");
edad1 = parseInt(prompt("Ingrese la edad del usuario"));

nombre2 = prompt("Ingrese el nombre del usuario");
edad2 = parseInt(prompt("Ingrese la edad del usuario"));

nombre3 = prompt("Ingrese el nombre del usuario");
edad3 = parseInt(prompt("Ingrese la edad del usuario"));

if (edad1 > edad2 && edad1 > edad3){
    document.write( `${nombre1} es el mayor con ${edad1} años`)
}else if (edad2 > edad1 && edad2 > edad3){
    document.write( `${nombre2} es el mayor con ${edad2} años`)
}else if (edad3 > edad1 && edad3 > edad2){
    document.write( `${nombre3} es el mayor con ${edad3} años`)
}else if (edad1 == edad2 && edad2 == edad3){
    document.write( `${nombre1},${nombre2},${nombre3} tienen la misma edad`)
}else if (edad1 == edad2 && edad2 > edad3){
    document.write( `${nombre1},${nombre2}, tienen la misma edad y son mayores con ${edad1} años`)
}else if (edad2 == edad3 && edad2 > edad1){
    document.write( `${nombre2},${nombre3}, tienen la misma edad y son mayores con ${edad2} años`)
}else if (edad1 == edad3 && edad1 > edad2){
    document.write( `${nombre1},${nombre3}, tienen la misma edad y son mayores con ${edad1} años`)
}


