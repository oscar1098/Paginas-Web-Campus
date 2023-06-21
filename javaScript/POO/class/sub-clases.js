class Persona {

    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + ' instancias';
    }

    nombre = '';
    codigo = '';
    frase = ''; 
    comida = '';

    constructor(nombre ='sin nombre',codigo = 'sin codigo',frase = 'sin frase'){
        if ( !nombre ) throw Error('No tiene nombre')
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }

    set setComidaFavorita( comida ) {  // Establecer un valor
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita () { // Recuperar un valor
        return `La comida favorita de ${ this.nombre } es ${ this.comida }`
    }

    quienSoy(){
        console.log(`Soy ${ this.nombre } y mi identidad es ${ this.codigo }`);
    }

    miFrase() {
        this.quienSoy();
        console.log(`${ this.codigo } dice ${ this.frase }`);
    }
}

class Heroe extends Persona {
    clan = 'Sin clan';

    constructor( nombre,codigo,frase ){

        super(nombre,codigo,frase);
        this.clan = 'Los vengadores'
    }
}

const spiderman = new Heroe('Peter Parker', 'Spiderman','EL amigable spiderman'); 

console.log(spiderman);




