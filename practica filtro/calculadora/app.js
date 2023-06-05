const botones = document.querySelectorAll('.boton'),
      operacion = document.querySelector('.operacion'),
      resultado = document.querySelector('.resultado');
      
let proceso = '';

botones.forEach( boton => {
    boton.addEventListener('click', () => {



        if ( boton.id === 'ac' ) {
            operacion.textContent = '0';
            resultado.textContent = ''
            proceso = '';
            return;
        }

        if (  boton.id === 'borrar'){
            let evaluar =  [operacion.textContent[ operacion.textContent.length -2 ], operacion.textContent[ operacion.textContent.length -1 ]];

            if ( operacion.textContent.length === 1 ){
                operacion.textContent = '0';
                resultado.textContent = '';
                proceso = '';
                return;
            }

            if ( evaluar[1] === 'π' ){

                if (  evaluar[0] === 'π' || !isNaN( evaluar[0] ))  {
                    proceso = proceso.slice(0,-8);
                    console.log(proceso);

                    if ( !isNaN( proceso[proceso.length -1] ) || proceso[proceso.length -1] === ')'  || proceso[proceso.length -1] === 'I'){
                        resultado.textContent = eval( proceso );
                    }
                    operacion.textContent = operacion.textContent.slice(0,-1);
                    return;
                } 
                else {

                    proceso = proceso.slice(0,-7);
                    console.log(proceso);

                    if ( !isNaN( proceso[proceso.length -1] ) || proceso[proceso.length -1] === ')'  || proceso[proceso.length -1] === 'I'){
                        resultado.textContent = eval( proceso )
                    }
                
                    operacion.textContent = operacion.textContent.slice(0,-1);
                    return;

                }

            } else {

                proceso = proceso.slice(0,-1);
                console.log(proceso);
                if ( !isNaN( proceso[proceso.length -1] ) || proceso[proceso.length -1] === ')'  || proceso[proceso.length -1] === 'I'){
                    resultado.textContent = eval( proceso )
                }
            }

            operacion.textContent = operacion.textContent.slice(0,-1);
            return;
            
        }

        if ( operacion.textContent === '0' ){
            operacion.textContent = boton.value;
        } 
        
        if ( boton.id === 'igual' ){
            operacion.textContent = '0';
            resultado.textContent = eval( proceso )
            proceso = '';
            return;
            
        }

        if ( boton.id === 'pi' ){

            let evaluar =  operacion.textContent[ operacion.textContent.length -1 ];
            console.log(evaluar);

            if (  (!isNaN( evaluar ) && operacion.textContent !== '0') || proceso[proceso.length -1] === 'I' ){

                proceso += '*Math.PI';

            }else{

                proceso += 'Math.PI';
            }

        } else {
            proceso += boton.textContent;
        }

        operacion.textContent += boton.textContent
        
        if ( !isNaN( proceso[proceso.length -1] ) || proceso[proceso.length -1] === ')'  || proceso[proceso.length -1] === 'I'){
            resultado.textContent = eval( proceso )
        }
        
        console.log(proceso);
    })
} )

      