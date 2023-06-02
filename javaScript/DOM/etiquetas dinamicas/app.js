const padre = document.querySelector('#padre'),
      agregar = document.querySelector('#agregar'),
      eliminar = document.querySelector('#eliminar');
    
let contador= 0; 

agregar.addEventListener('click' , function () {
    contador++;
    const hijo = document.createElement('p'),  
          texto = document.createTextNode(`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque laboriosam totam deserunt esse nisi placeat, deleniti natus nulla laudantium, odit eos sunt impedit repudiandae aliquam, eveniet quae qui sequi labore. Este es el parrafo ${contador}`);
        
    hijo.appendChild(texto);
    padre.appendChild(hijo);
    hijo.id = contador;
})

eliminar.addEventListener('click', function(){

    let parrafo = document.getElementById(contador);
    padre.removeChild(parrafo)
    contador--;
})


// let cont = 1;
// eliminar.addEventListener('click',function(){
//     let parrafo = document.getElementById(cont);
//     padre.removeChild(parrafo)
//     cont++;
// })

