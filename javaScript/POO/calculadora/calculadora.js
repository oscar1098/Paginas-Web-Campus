class Calculadora {

    constructor( botones, pantallaO, pantallaR ){
        this.botones = botones;
        this.pantallaO = pantallaO;
        this.pantallaR = pantallaR;
        this.operacion = '';
    }

    resultado ( operacion ){
        try {
            this.pantallaR.textContent = ( isNaN( eval(operacion) ) ) ? '' : eval(operacion);
        }
        catch {
            this.pantallaR.textContent = '';
            return;
        }
    }

    validarOperacion( contenidoPantalla, contenidoOperacion ) {
        this.pantallaO.textContent += contenidoPantalla;
        this.operacion += contenidoOperacion;
        this.resultado( this.operacion );
    }

    borrar( indexOperacion, indexPantallO  ) {
        this.operacion =  this.operacion.slice(0,this.operacion.length - indexOperacion );
        this.pantallaO.textContent = this.pantallaO.textContent.slice(0,this.pantallaO.textContent.length - indexPantallO );
        this.resultado( this.operacion );
    }

    operarCalculadora(boton) {

        if ( boton.id == 'igual' ) { 

            this.pantallaO.textContent = '';
            this.resultado( this.operacion );
            this.operacion = '';
            return;
         }

        if ( boton.id == 'borrar' ) {
            const ultimoCaracter = this.pantallaO.textContent[this.pantallaO.textContent.length -1];

            if ( ultimoCaracter  == '^' ) {  this.borrar(2,1); return }

            if ( ultimoCaracter  == 'n' ) {  this.borrar(8,2); return }

            if ( ultimoCaracter  == '√' ) {  this.borrar(9,1); return }

            if ( ultimoCaracter  == '%' ) {  this.borrar(5,1); return }

            this.borrar(1,1);
            return;
        }

        if ( boton.textContent == 'AC' ) {this.pantallaO.textContent = '';  this.resultado( this.operacion = '' ) ; return}

        if ( boton.textContent == 'x' ) {this.validarOperacion('x','*'); return}

        if ( boton.textContent == '%' ) {this.validarOperacion('%','/100*'); return}
        
        if ( boton.textContent == '√' )  {this.validarOperacion('√(','Math.sqrt('); return}

        if ( boton.textContent == 'In' )  {this.validarOperacion('In(','Math.log('); return}

        if ( boton.textContent == '^' )  {this.validarOperacion('^','**'); return}

        this.pantallaO.textContent += boton.textContent;
        this.operacion += boton.textContent;
        this.resultado( this.operacion )
    }
    
    iniciarCalculadora(){
        this.botones.forEach( boton =>{
            boton.addEventListener('click', () => this.operarCalculadora(boton));
        });
    }
}

const calculadora = new Calculadora(
    document.querySelectorAll('button'),
    document.getElementById('pantallaO'),
    document.getElementById('pantallaR')
);

calculadora.iniciarCalculadora();

