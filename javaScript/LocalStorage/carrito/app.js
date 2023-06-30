const formulario = document.getElementById('formulario');
const nombreArt = document.getElementById('nombreArt');
const precioArt = document.getElementById('precioArt');
const tabla = document.getElementById('tabla');
const totalcompra = document.getElementById('totalcompra');
const vaciar = document.getElementById('vaciar');
let total = 0;


const carrito = {
   articulos : JSON.parse(localStorage.getItem('carrito')) || [],
   actualizarlocal : function () {  localStorage.setItem( 'carrito' , JSON.stringify( this.articulos) )  },
   agregarArt : function (articulo) { this.articulos.push( articulo ); this.actualizarlocal() },
   eliminarItem : function (index) { this.articulos.splice( index, 1 ); this.actualizarlocal(); listarArticulos() },
   vaciarCarrito : function () { localStorage.removeItem('carrito'); this.articulos = []  }
}

const listarArticulos = () => {

   tabla.innerHTML = '';
   formulario.reset();

   if ( carrito.articulos.length == 0 ) {
      
      totalcompra.classList.add('ocultar');
      return;
   }

   totalcompra.classList.remove('ocultar');


   for ( let i = 0; i < carrito.articulos.length; i++ ){

      const tr = document.createElement('tr');
      tr.innerHTML = `
      <tr>
      <td>${carrito.articulos[i].nombre}</td>
      <td>${carrito.articulos[i].precio}</td>
      

      <button type="button" class="btn btn-outline-danger" w-25 onclick="carrito.eliminarItem(${i})">Eliminar</button>
      </tr>
      `
      tabla.appendChild(tr)

   }
}


const agregar = (e) => {

   e.preventDefault();

   const item = {  
      nombre : nombreArt.value,
      precio : precioArt. value,
    }

   carrito.agregarArt(item);

   tabla.innerHTML = '';

   listarArticulos();

}

const vaciarTabla = () =>{ 

   carrito.vaciarCarrito();
   tabla.innerHTML = '';
   totalcompra.classList.add('ocultar')


}

const calcularCompra = () => {

   for ( let i = 0; i < carrito.articulos.length; i++ ){

      total +=  parseFloat(carrito.articulos[i].precio)
   }

   alert( `El valor de la compra fue de ${total}` )

}


listarArticulos();
console.log(carrito.articulos.length);

formulario.addEventListener('submit', agregar);
vaciar.addEventListener('click', vaciarTabla);
totalcompra.addEventListener('click', calcularCompra)


