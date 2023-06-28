const nombre = document.getElementById('nombre');
const precio = document.getElementById('precio');
const agregar = document.getElementById('agregar');
const listaArticulos = document.getElementById('listaArticulos');
const vaciar = document.getElementById('vaciar');
let carrito;


class Articulo {
    constructor ( nombre, precio ) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

class Carrito {

    mostrarCarrito() {

        if ( localStorage.getItem('cartItems') == null ) {
            carrito = [];
        } else {

            carrito = JSON.parse(localStorage.getItem('cartItems')); 

        }

        listaArticulos.innerHTML = '';
        for ( let i = 0; i < carrito.length; i++ ){
            const li = document.createElement('li');
            li.innerHTML = `
            <P>${carrito[i].nombre}</P>
            <P>${carrito[i].precio}</P>
            <button class="btn btn-outline-danger" onclick="eliminaritem(${i})">Eliminar</button>
            `
            listaArticulos.appendChild(li);
        }
    }

    agregarCarrito ( articulo ) {

        if ( localStorage.getItem('cartItems') == null ) {
            carrito = [];
        } else {

            carrito = JSON.parse(localStorage.getItem('cartItems')); 

        }

        carrito.push(articulo);
        localStorage.setItem("cartItems", JSON.stringify(carrito));
        this.mostrarCarrito();

    }

    eliminarCarrito () {
        localStorage.removeItem('cartItems');
        this.mostrarCarrito();
    }

    eliminarItemCarrito(i) {
        if ( localStorage.getItem('cartItems') == null ) {
            carrito = [];
        } else {

            carrito = JSON.parse(localStorage.getItem('cartItems')); 
        }

        carrito.splice(i,1);
        localStorage.setItem("cartItems", JSON.stringify(carrito));
        

    }
}

const articulos = new Carrito();

const agregarArticulo = (e) =>{

    e.preventDefault()

    const articulo = new Articulo( nombre.value, precio.value );

    articulos.agregarCarrito( articulo );

}

const vaciarLista = (e) => {
    e.preventDefault()
    articulos.eliminarCarrito();
}

articulos.mostrarCarrito();


const eliminaritem = (i) => {
    articulos.eliminarItemCarrito(i);
    articulos.mostrarCarrito();
}



agregar.addEventListener('submit', agregarArticulo);
vaciar.addEventListener('click',vaciarLista)


