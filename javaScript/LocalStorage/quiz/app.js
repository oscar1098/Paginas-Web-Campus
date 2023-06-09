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
        this.quices = JSON.parse(localStorage.getItem('quiz')) || [];
    }

    actualizarLocal() {
        localStorage.setItem('quiz', JSON.stringify(this.quices));
    }

    addQuiz (quiz) {
        this.quices.push(quiz);
        this.actualizarLocal()
    }

    get getQuiz() {
        return this.quices;
    }

    editQuiz(index, newEdit) {
      
        this.quices.splice( index, 1, newEdit );
        this.actualizarLocal();
    }

    eliminar (index){
        this.quices.splice(index,1);
        this.actualizarLocal();
    }

    limpiarQuiz (){
        localStorage.removeItem('quiz');
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

const formularioEdit = document.getElementById('formularioEdit');
const preguntaEdit = document.getElementById('preguntaEdit');
const resAEdit = document.getElementById('resAEdit');
const resBEdit = document.getElementById('resBEdit');
const resCEdit = document.getElementById('resCEdit');
const correctaEdit = document.getElementById('correctaEdit');
const mostrar = document.getElementById('mostar');
const limpiQuiz = document.getElementById('limpiQuiz');

const agregar = (e) => {
    e.preventDefault();

    const infoQuiz = new InfoQuiz( pregunta.value, resA.value, resB.value, resC.value, correcta.value );
    quices.addQuiz(infoQuiz);
    formulario.reset();
    listarQuices();
}
 
const listarQuices = () => {

    listaQuices.innerHTML = '';
    
    for ( let i = 0;  i< quices.getQuiz.length; i++ ){
        
        const itemsLista = document.createElement('li');
        itemsLista.classList.add('mb-4')
        
        const { pregunta, opcionA, opcionB, opcionC } = quices.getQuiz[i];
        itemsLista.innerHTML = `
            <p>${pregunta} </p>
            <div class = 'd-block'>
                <input type="radio" name="${controlador}"  value = 'A'>
                <label for="radio">A. ${opcionA}</label>
            </div>
            <div class = 'd-block'>
                <input type="radio" name="${controlador}"  value = 'B'>
                <label for="radio">B. ${opcionB}</label>
            </div>
            <div class = 'd-block'>
                <input type="radio" name="${controlador}"  value = 'C'>
                <label for="radio">C. ${opcionC}</label>
            </div>
            `
            // <div class = 'text-start mt-5'>
            //     <button type="button" data-bs-toggle="modal" data-bs-target='#modalEditar' class = 'btn btn-outline-warning me-3'  onclick="editar(${i})">Editar</button>
            //     <button type="button" class = 'btn btn-outline-danger'  onclick="eliminar(${i})">Eliminar</button>
            // </div>
        listaQuices.appendChild(itemsLista);
        controlador++
    }

    enviaresp.classList.remove('ocultar');
}

const eliminar = (index) => {
    quices.eliminar(index);
    listarQuices();
    if ( quices.getQuiz.length === 0 ) {  enviaresp.classList.add('ocultar');  }
}

const editar = (index) => {

    const { pregunta, opcionA, opcionB, opcionC, correcta  } = quices.getQuiz[index];
   
    preguntaEdit.value = pregunta;
    resAEdit.value = opcionA;
    resBEdit.value = opcionB;
    resCEdit.value = opcionC;
    correctaEdit.value = correcta;

    const editarQuiz = (e) => {
        e.preventDefault();
        console.log(index);
        const editQuiz = new InfoQuiz ( preguntaEdit.value, resAEdit.value, resBEdit.value, resCEdit.value, correctaEdit.value );
        quices.editQuiz(index,editQuiz);
        listarQuices();
        formularioEdit.removeEventListener('submit', editarQuiz);
    }

    formularioEdit.addEventListener('submit', editarQuiz);
}


const revisar = (e) => {

    let correctas = 0;
    
    e.preventDefault();

    const inputs = listaQuices.querySelectorAll('input[type="radio"]');

    for ( let i = 0; i < inputs.length; i++ ) {

        let name = inputs[i].name;

        let radioSelec = document.querySelectorAll(`input[type='radio'][name='${name}']:checked`);

        if ( radioSelec.length === 0 ) {
            Swal.fire({
                icon: 'error',
                title: 'Error de envio',
                text: 'Debe  completar todo el formulario para enviar',
              })
            return;
        }
    }

    let respuestas = document.querySelectorAll(`input[type='radio']:checked`);
    nmroPreguntas = respuestas.length;

    for ( let i = 0; i < respuestas.length; i++ ){

        if ( quices.getQuiz[i]['correcta'] === respuestas[i].value  ){
            correctas++;
        }

    }

    if ( correctas > nmroPreguntas*0.60 ){

        Swal.fire({
            icon: 'success',
            title: 'Aprobado',
            text: `Su puntaje fue ${correctas}/${nmroPreguntas}`,
          })
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Reprobado',
            text: `Su puntaje fue ${correctas}/${nmroPreguntas}`,
          })
    }

}

const mostarQuiz = () => {
    enviarespuestas.classList.remove('ocultar');
    formulario.classList.add('ocultar');
}

const limpiarPantallaQuiz = () =>{
    enviarespuestas.classList.add('ocultar');
    formulario.classList.remove('ocultar');
    quices.limpiarQuiz();
    listarQuices();

}

mostrar.addEventListener('click',mostarQuiz);
formulario.addEventListener('submit',agregar);
enviarespuestas.addEventListener('submit', revisar);
limpiQuiz.addEventListener('click', limpiarPantallaQuiz);



