let articulos = JSON.parse(localStorage.getItem('cartItems')) || [];
console.log( typeof articulos);
const agregar = document.getElementById('agregar');
const articulo = document.getElementById('articulo');
const precio = document.getElementById('precio');
const vaciar = document.getElementById('vaciar');
const listaArt = document.getElementById('listaArt');


class Item {

    constructor( nombre, precio ){
        this.nombre = nombre;
        this.precio = precio;
    }

    crearArt () {

        return {
            nombre : this.nombre,
            precio : this.precio
        }
    }
}

class Carrito {


    setArticulo(nombreLocalStorage,item) {
        articulo.push(item);
        localStorage.setItem(nombreLocalStorage, JSON.stringify(articulo));
    }

    eliminarItem(i,nombreLocalStorage){
        articulo.splice(i,1);
        localStorage.setItem(nombreLocalStorage, JSON.stringify(articulo));
    }

    vaciarArticulos (nombreLocalStorage) {
        localStorage.removeItem('cartItems');
    }
}


const carrito = new Carrito( articulos );

const agregarArticulo = (e) => {

    e.preventDefault();
    const item = new Item( articulo.value, precio.value );
    carrito.setArticulo('cartItems', item.crearArt());
    mostratArticulos();
    agregar.reset();
    
}

const mostratArticulos =() => {
    
    listaArt.innerHTML = '';
    for ( let i = 0; i < articulos.length; i++ ){
    
        const li = document.createElement('li');
    
        li.innerHTML = `
            <p>${articulos[i].nombre}</p>
            <p>${articulos[i].precio}</p>
            <button class="btn btn-outline-danger" onclick="eliminarArt(i)">Eliminar</button>
        `
        listaArt.appendChild(li);
    }
}

const limpiarLista = () => {
    carrito.vaciarArticulos('cartItems');
    console.log(articulos);
    mostratArticulos();
}


mostratArticulos();
agregar.addEventListener('submit', agregarArticulo )
vaciar.addEventListener('click', limpiarLista);


