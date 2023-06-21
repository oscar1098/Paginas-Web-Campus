function Persona (nombre,edad) {

    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function () {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

const maria = new Persona('Maria', 18)

const pedro =  new Persona('Pedro', 25)

pedro.imprimir( )

maria.imprimir()