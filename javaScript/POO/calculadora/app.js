const botones = document.querySelectorAll('button');

const pantallaO = document.getElementById('pantallaO');
const pantallaR = document.getElementById('pantallaR');
let operacion = '';

const resultado = () => {
    try {
        pantallaR.textContent = eval(operacion);
    }

    catch {
        pantallaR.textContent = '';
        return;
    }
}
 
botones.forEach(boton => {

    const operaciones = () => {

        if ( boton.id == 'borrar' ){
            console.log(operacion.length)
            operacion =  operacion.slice(0,operacion.length -1 );
            pantallaO.textContent = operacion;
            resultado()
            // pantallaR.textContent = eval(operacion);
            return;
        }

        if ( boton.textContent == 'AC' ) {
            pantallaO.textContent = '0';
            operacion = '';
            pantallaR.textContent = '0';
            return;
        }

        if ( boton.textContent ==='x' ) { 
                operacion += '*';
                pantallaO.textContent = operacion;
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
        
        operacion += boton.textContent; 
        pantallaO.textContent = operacion;
        resultado();
    }
    
    boton.addEventListener('click',operaciones);
    
});
