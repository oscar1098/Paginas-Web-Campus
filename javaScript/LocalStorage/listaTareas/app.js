class Articulo {
    constructor(desc, precio) {
      this.descripcion = desc;
      this.precio = precio;
    }
  }
  
  class Carrito {
    constructor() {
      this.articulos = JSON.parse(localStorage.getItem('cartItems')) || [];
    }
  
    agregarAlCarrito() {
      let item = document.getElementById("compraInput").value;
      let precio = document.getElementById("precioInput").value;
      let newArt = new Articulo(item, precio);
      if (item && precio) {
        this.articulos.push(newArt);
        this.mostrarCarrito();
        localStorage.setItem("cartItems", JSON.stringify(this.articulos));
      }
    }
  
    mostrarCarrito() {
      var cartItemsList = document.getElementById('cartItems');
      cartItemsList.innerHTML = '';
  
      for (var i = 0; i < this.articulos.length; i++) {
        var cartItem = document.createElement('li');
        cartItem.textContent = this.articulos[i].descripcion + " - " + this.articulos[i].precio;
        cartItemsList.appendChild(cartItem);
      }
    }
  
    vaciarCarrito() {
      this.articulos = [];
      this.mostrarCarrito();
      localStorage.removeItem('cartItems');
    }
  }
  
  const carrito = new Carrito();
  carrito.mostrarCarrito();