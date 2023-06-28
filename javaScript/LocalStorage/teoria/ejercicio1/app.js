
guardar_localstorage();
obtener_localstorage();

function obtener_localstorage(){

    if ( localStorage.getItem( 'persona' ) ) {

        let persona = JSON.parse(localStorage.getItem( 'persona' ));
    
        console.log(persona);
    } else {
        console.log('No hay entradas en el localStorage');
    }
}

function guardar_localstorage() {
    let persona = {
        nombre: 'Oscar',
        edad: 23,
        correo: 'oscarardila@gamil.com',
        coords : {
            lat : 10,
            lng : -10
        }
    }

    localStorage.setItem( 'persona', JSON.stringify( persona ) );
};

