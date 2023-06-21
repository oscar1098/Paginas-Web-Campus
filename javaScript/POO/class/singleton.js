

class Singleton {

    static instancia;
    nombre = '';

    constructor( nombre = '' ) {

        if ( !!Singleton.instancia ) return Singleton.instancia

        Singleton.instancia = this;
        this.nombre = nombre;
    }
}

const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman');

console.log(`Nombre de la instancia 1 es: ${instancia2.nombre}`);