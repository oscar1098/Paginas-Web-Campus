const botones = document.querySelectorAll('button');

const pantallaO = document.getElementById('pantallaO');
const pantallaR = document.getElementById('pantallaR');
let operacion = '';

const resultado = () => {
    try {
        if ( isNaN( eval(operacion) ) ){
            pantallaR.textContent = '';
        } else {

            pantallaR.textContent = eval(operacion);
        }
    }
    catch {
        pantallaR.textContent = '';
        return;
    }
}
 
botones.forEach(boton => {

    const operaciones = () => {

        if ( boton.textContent == '^' ){
            pantallaO.textContent += '^';
            operacion += '**';
            return;
        }

        if ( boton.textContent == 'In' ){
            if ( pantallaO.textContent == '0'){
                pantallaO.textContent = 'In(';
                operacion = 'Math.log(';
                return;
            } else {
                pantallaO.textContent += 'In(';
                operacion += 'Math.log(';
                return;
            }
        }

        if ( boton.textContent == '√' ){
            if ( pantallaO.textContent == '0'){
                pantallaO.textContent = '√(';
                operacion = 'Math.sqrt(';
                return;
            } else {
                pantallaO.textContent += '√(';
                operacion += 'Math.sqrt(';
                return;
            }
        }

        if ( boton.textContent == '%' ) {
            pantallaO.textContent += '%';
            operacion += '/100*';
            resultado();
            return;
        }

        if ( boton.id == 'borrar' ){

            const ultimoCaracter = pantallaO.textContent[pantallaO.textContent.length -1];
            console.log(ultimoCaracter);

            if ( ultimoCaracter == '^' ){
                operacion =  operacion.slice(0,operacion.length -2 );
                pantallaO.textContent = pantallaO.textContent.slice(0,pantallaO.textContent.length -1 );
                resultado();
                return;
            }

            if ( ultimoCaracter == 'n' ){
                operacion =  operacion.slice(0,operacion.length -8 );
                pantallaO.textContent = pantallaO.textContent.slice(0,pantallaO.textContent.length -2 );
                resultado();
                return;
            }

            if ( ultimoCaracter == '√' ){
                operacion =  operacion.slice(0,operacion.length -9 );
                pantallaO.textContent = pantallaO.textContent.slice(0,pantallaO.textContent.length -1 );
                resultado();
                return;
            }

            if ( ultimoCaracter == '%' ){
                operacion =  operacion.slice(0,operacion.length -5 );
                pantallaO.textContent = pantallaO.textContent.slice(0,pantallaO.textContent.length -1 );
                resultado();
                return;
            }

            operacion =  operacion.slice(0,operacion.length -1 );
            pantallaO.textContent = pantallaO.textContent.slice(0,pantallaO.textContent.length -1 );
            resultado();
            return;
        }

        if ( boton.textContent == 'AC' ) {
            pantallaO.textContent = '';
            operacion = '';
            pantallaR.textContent = '';
            return;
        }

        if ( boton.textContent ==='x' ) { 
                operacion += '*';
                pantallaO.textContent += 'x';
                return 
            }

        if (boton.id == 'igual'){
            if ( pantallaO.textContent == '0' ) {
                pantallaR.textContent = '0'
                return;
            }else{
                pantallaO.textContent = '0';
                resultado();
                operacion = '';
                return
            }
        }
        
        pantallaO.textContent += boton.textContent;
        operacion += boton.textContent;
        resultado();
        console.log(operacion);
    }

    
    boton.addEventListener('click',operaciones);
    
});
