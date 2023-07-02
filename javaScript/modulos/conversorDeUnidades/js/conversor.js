import { distancia } from "./distancia.js";
import { peso } from "./peso.js";
import { temperatura } from "./temperatura.js";


const selecM = document.getElementById('selecM');
const selecMC = document.getElementById('selecMC');
const masaInput = document.getElementById('masaInput');
const masaCalcu = document.getElementById('masaCalcu');
const masaResul = document.getElementById('masaResul');
const selecD = document.getElementById('selecD');
const selecDC = document.getElementById('selecDC');
const distanciaInput = document.getElementById('distanciaInput');
const distanciaCalcu = document.getElementById('distanciaCalcu');
const distanciaResul = document.getElementById('distanciaResul');
const selecT = document.getElementById('selecT');
const selecTC = document.getElementById('selecTC');
const TemperaturaInput = document.getElementById('TemperaturaInput');
const temperaturaCalcu = document.getElementById('temperaturaCalcu');
const temperaturaResul = document.getElementById('temperaturaResul');


const crearPrimerSelect = (objeto, selec) => {
    const keys = Object.keys(objeto);

    keys.forEach( ( unidad ) => {
        const option = document.createElement('option');
        option.textContent = unidad;
        selec.appendChild(option) 
    } )
} 

const crearSegundSelect = ( event, objeto, selecS ) => {

    if (  event.target.value == 'Seleccione' ) {
        selecS.innerHTML = '';
        return;
    }

    const key = event.target.value;

    selecS.innerHTML = '';

    const unidades = Object.keys( objeto[key] );


    unidades.forEach( ( unidad ) => {
        const option = document.createElement('option');
        option.textContent = unidad;
        selecS.appendChild( option );
    } ) 
}

const calculos = ( objeto, key1, key2, inputO,inputR ) => {

    try {

        inputR.value =  objeto[key1][key2]( parseFloat( inputO.value ) )  ;
    } catch {
        alert('Operacion Invalida')
    }


}



crearPrimerSelect( distancia, selecD );
crearPrimerSelect( peso, selecM );
crearPrimerSelect( temperatura, selecT );

selecD.addEventListener( 'change', (event) => crearSegundSelect( event, distancia, selecDC )  ) ;
selecM.addEventListener( 'change', (event) => crearSegundSelect( event, peso, selecMC )  ) ;
selecT.addEventListener( 'change', (event) => crearSegundSelect( event, temperatura, selecTC )  ) ;
distanciaCalcu.addEventListener( 'click', () => calculos( distancia, selecD.value, selecDC.value, distanciaInput, distanciaResul ) )
masaCalcu.addEventListener( 'click', () => calculos( peso, selecM.value, selecMC.value, masaInput, masaResul ) )
temperaturaCalcu.addEventListener( 'click', () => calculos( temperatura, selecT.value, selecTC.value, TemperaturaInput, temperaturaResul ) )












