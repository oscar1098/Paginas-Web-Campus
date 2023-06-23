class InfoQuiz {
    constructor (pregunta,opcionA,opcionB,opcionC,correcta) {
        this.pregunta = pregunta;
        this.opcionA = opcionA;
        this.opcionB = opcionB;
        this.opcionC = opcionC;
        this.correcta = correcta;
    }
}

class Quiz {

    constructor () {
        this.quices = [];
    }

    addQuiz (quiz) {
        this.quices.push(quiz);
    }

    get getQuiz() {
        return this.quices;
    }
}

const quices =  new Quiz();

const formulario = document.getElementById('formulario');
const pregunta = document.getElementById('pregunta');
const resA = document.getElementById('resA');
const resB = document.getElementById('resB');
const resC = document.getElementById('resC');
const correcta = document.getElementById('correcta');
const listaQuices = document.getElementById('listaQuices');
const enviaresp = document.getElementById('enviaresp');
const enviarespuestas = document.getElementById('enviarespuestas');
let controlador = 0;

const agregar = (e) => {
    e.preventDefault();

    const infoQuiz = new InfoQuiz( pregunta.value, resA.value, resB.value, resC.value, correcta.value );
    quices.addQuiz(infoQuiz);
    formulario.reset();
    listarQuices();
}
 
const listarQuices = () => {
    
    const itemsLista = document.createElement('li');
    itemsLista.classList.add('mb-4')
    for ( let i = 0;  i< quices.getQuiz.length; i++ ){
        const { pregunta, opcionA, opcionB, opcionC } = quices.getQuiz[i];

        itemsLista.innerHTML = `
            <p>${pregunta} </p>
            <div class = 'd-block'>
                <input type="radio" name="${controlador}"  id= 'opcionA'>
                <label for="radio">A. ${opcionA}</label>
            </div>
            <div class = 'd-block'>
                <input type="radio" name="${controlador}"  id= 'opcionB'>
                <label for="radio">B. ${opcionB}</label>
            </div>
            <div class = 'd-block'>
                <input type="radio" name="${controlador}"  id= 'opcionC'>
                <label for="radio">C. ${opcionC}</label>
            </div>
        `
    }

    listaQuices.appendChild(itemsLista);
    enviaresp.classList.remove('ocultar');
    controlador++
}

const revisar = (e) => {
    const inputs = listaQuices.querySelectorAll('input[type="radio"]:checked');
    e.preventDefault();
    console.log(inputs);
}

formulario.addEventListener('submit',agregar)
enviarespuestas.addEventListener('submit', revisar)


