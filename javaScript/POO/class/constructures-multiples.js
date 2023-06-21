
class Persona {

    static porObjeto ( {nombre, apellido, pais} ){
        return new Persona( nombre, apellido, pais);
    }

    constructor( nombre, apellido, pais ){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    getInfo () {
        console.log(`Imfo: ${this.nombre}, ${this.apellido}, ${this.pais}`);
    }
}

const nombre1 = 'Oscar',
      apellido1 = 'Ardila',
      pais1 = 'Colombia';


const oscar = {
    nombre : 'Mauricio',
    apellido: 'Barrios',
    pais : 'Colombia'
}

const persona1 = new Persona( nombre1, apellido1, pais1 );
const persona2 = Persona.porObjeto( oscar );

persona1.getInfo();
persona2.getInfo();