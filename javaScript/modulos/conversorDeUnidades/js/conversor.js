import { conversorDistancia } from "./distancia.js";
import { convertirPeso } from "./peso.js";
import { convertirTemperatura } from "./temperatura.js";


const libras = document.getElementById('libras');
const kilogramos = document.getElementById('kilogramos');
const peso = document.getElementById('peso');
const distancia = document.getElementById('distancia');
const metros = document.getElementById('metros');
const pies = document.getElementById('pies');
const temperatura = document.getElementById('temperatura');
const celius = document.getElementById('celius');
const fahrenheit = document.getElementById('fahrenheit');


const calcuPeso = () => {
    if ( convertirPeso( kilogramos.value) >= 0 ){

        libras.value = `${convertirPeso( kilogramos.value)}`;
    } else {
        alert('El valor debe ser positivo');
        libras.value = '';
        kilogramos.value = '';

    }
}

const calcuDis = () => {

    if ( conversorDistancia( metros.value) >= 0 ){

        pies.value = `${conversorDistancia( metros.value)}`;
    } else {
        alert('El valor debe ser positivo');
        pies.value = '';
        metros.value = '';

    }
}

const calcuTemp = () => {
    fahrenheit.value = convertirTemperatura( celius.value );
}

peso.addEventListener('click', calcuPeso );
distancia.addEventListener('click', calcuDis );
temperatura.addEventListener('click', calcuTemp );