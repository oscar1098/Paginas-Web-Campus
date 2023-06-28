let perro = {
    nombre : otro = { nombre2 : 'paco' } ,
    color : 'cafe',
    edad : 5,
    macho : true,
    ladrar : function () {
        return ( `${this.nombre} puede ladrar` );
    },
    cambiarNombre : function () { this.nombre.nombre2 = 'Salchicha' }
}

console.log(perro.nombre.nombre2);
perro.cambiarNombre();
console.log(perro.nombre.nombre2);
delete perro.macho;
console.log(perro);