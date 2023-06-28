let articulos = JSON.parse(localStorage.getItem('cartItems')) || [];

const agregar = document.getElementById('agregar');
const articulo = document.getElementById('articulo');
const precio = document.getElementById('precio');
const vaciar = document.getElementById('vaciar');
const listaArt = document.getElementById('listaArt');

class carrito {

    agregarArticulo( articulo,precio ) {
        const item = {
            nombre : articulo,
            precio : precio
        } 
        articulos.push( item )
        localStorage.setItem('articulos', JSON.stringify(articulos));
    }

    
    mostrarItem () {
        
        if ( articulos.length == 0 ) { listaArt.innerHTML = ''; return }

        for ( let i = 0; i < articulos.length; i++ ) {
            
            const li = document.createElement('li');

            li.innerHTML = `
            <p>Articulo: ${articulos[i].nombre}</p>
            <p>Precio: ${articulos[i].precio}</p>
            <button class="btn btn-outline-danger" onclick="${this.eliminarArt(i)}" >Eliminar</button>
            `
            listaArt.appendChild(li);
        }
    }
    
    eliminarArt (i) {
        articulos.splice(i,1);
        localStorage.setItem('articulos', JSON.stringify(articulos));
        this.mostrarItem();
    }
    
}

const carritasd =  new carrito(articulos);

carritasd.agregarArticulo('saddsdfs',2133423);
carritasd.mostrarItem();




// class Articulo {

//     constructor ( nombre, precio ) {
//         this.nombre = nombre;
//         this.precio = precio;
//     }

//     agregarArticulo() {
//         this.articulo = {
//             nombre : this.articulo,
//             precio : this.precio
//         }

//         return this.articulo;
//     }
// }

// class OperarArticulos {

//     constructor ( articulo ) {
//         this.articulo = articulo;
//         this.articulos = [];
//     }
    

//     getArticulo () {
//         if ( localStorage.getItem('articulos') ) { 
//             this.articulos = JSON.parse( localStorage.getItem('articulos') );
//          }
//     }

//     agregarLocalStorage () {

//         this.getArticulo();
//         this.articulos.push(this.articulo)
//         localStorage.setItem( 'articulos', JSON.stringify( this.articulos ) )
//     }

//     eliminarArt (i) {

//         this.getArticulo();
//         this.articulos.splice(i,1);
//         localStorage.setItem( 'articulos', JSON.stringify( this.articulos ) );
//         this.mostrarArticulos();

//     }

//     mostrarArticulos () {

//         this.getArticulo();
//         listaArt.innerHTML ='';
        
//         for ( let i = 0; i < this.articulos.length; i++ ) {
            
//             const li = document.createElement('li');

//             li.innerHTML = `
//             <p>Articulo: ${this.articulos[i].nombre}</p>
//             <p>Precio: ${this.articulos[i].precio}</p>
//             <button class="btn btn-outline-danger" onclick="${this.eliminarArt(i)}">Eliminar</button>
//             `
//             listaArt.appendChild(li);
//         }

//         console.log(this.articulos);
//     }
// }



// const eventoForm = (e) => {
    
//     e.preventDefault();
    
//     const art = new Articulo( articulo.value, precio.value );
//     const articulos = new OperarArticulos(art);
//     articulos.agregarLocalStorage();
//     articulos.mostrarArticulos();
// }

// agregar.addEventListener( 'submit', eventoForm )
