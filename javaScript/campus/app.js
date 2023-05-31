const Campus = {
    campus      : {
        bucaramanga: { telefono : 1234567, direccion : 'calle12 # 34-6', correo : 'correo@gmail.com'  },
        bogota     : { telefono : 7654321, direccion : 'calle21 # 12-1', correo : 'correo@gmail.com'  },
        medellin   : { telefono : 4856322, direccion : 'calle44 # 14-8', correo : 'correo@gmail.com'  },
        mexico     : { telefono : 1236985, direccion : 'calle33 # 10-7', correo : 'correo@gmail.com'  }
    },
    trainers     : { 
        nombre   : 'nombretrainer', 
        telefono : 1234567, 
        teams    : { horario : 'dia', hora : '6pm', salon : { nombre : 'Apolo', piso : 6 } }, 
        hora     : '6pm', 
        email    : 'trainer@gmail.com'
    },
    campers     : { 
        nombre     : 'nombreCampers', 
        telefono   : 7654321, 
        teams      : { horario : 'dia', hora : '2pm', salon : { nombreT : 'Apolo', piso : 6 } }, 
        email      : 'camper@gmail.com', 
        horaSer    : '4 pm', 
        horaIngles : '5 pm', 
        nivel      : 'Basico', 
        barrio     : 'Mutis', 
        transporte : 'Bicicleta'},
    niveles     : {
        preRequisito : 'HTML,CSS,JAVASCRIPT',
        electiva     : false,
        obligatoria  : true
    },
    tecnologias : { nombre : 'JavaScript' , metodologia: 'Presencial', sandBox : 'No' },
    roadMap     : { nroCreditos : 4, año : 2023, nroAsignaturas : 4 }
};

//? Tecnologia es presencial o remota

const {campus : { medellin : { telefono }, bucaramanga : { direccion }},
       campers : {teams : {salon : {nombreT}  }},
       tecnologias : {nombre , metodologia, sandBox}} = Campus;

console.log(metodologia, nombreT , telefono, direccion , sandBox);

console.log( Campus.niveles.preRequisito, Campus.roadMap.nroCreditos );



