const formulario = document.getElementById('formulario');
const nombreArt = document.getElementById('nombreArt');
const precioArt = document.getElementById('precioArt');
const listaQuices = document.getElementById('listaQuices');
const totalcompra = document.getElementById('totalcompra');


const carrito = {
   articulos : JSON.parse(localStorage.getItem('carrito')) || [],
   actualizarlocal : function () {  localStorage.setItem( JSON.stringify('carritol', this.articulos) )  },
   agregarArt : function () { this.articulos.push( articulo ); this.actualizarlocal() },
   eliminarItem : function () {}

}

console.log(carrito);