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
}

const quices =  new Quiz();

const formulario = document.getElementById('formulario');
const pregunta = document.getElementById('pregunta');
const resA = document.getElementById('resA');
const resB = document.getElementById('resB');
const resC = document.getElementById('resC');
const correcta = document.getElementById('correcta');
const listaQuices = document.getElementById('listaQuices');

const agregar = (e) => {
    e.preventDefault();

    const infoQuiz = new InfoQuiz( pregunta.value, resA.value, resB.value, resC.value, correcta.value );

    quices.addQuiz(infoQuiz);
    console.log(quices);
}
 
formulario.addEventListener('submit',agregar)


