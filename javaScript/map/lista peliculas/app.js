const btnAgregar = document.getElementById('btnAgregar'),
      btnListar = document.getElementById('btnListar'), 
      formAgregar = document.getElementById('formAgregar'),
      titulo = document.getElementById('titulo'),
      genero = document.getElementById('genero'),
      duracion = document.getElementById('duracion'),
      director = document.getElementById('director'),
      cuerpoTarjetas = document.getElementById('cuerpoTarjetas'),
      cerrarTarjetas = document.getElementById('cerrarTarjetas'),
      footer = document.querySelector('.footer'),
      arregloPeliculas = [];
      
let id = 0;
      
const agregarPeliculas = (event) =>{

    event.preventDefault()
          
    const mapPelicula = new Map;

    mapPelicula.set('id',`${id}`);
    mapPelicula.set('titulo',`${titulo.value}`);
    mapPelicula.set('genero',`${genero.value}`);
    mapPelicula.set('duracion',`${duracion.value}`);
    mapPelicula.set('director',`${director.value}`);

    arregloPeliculas.push(mapPelicula);
    id++

    formAgregar.reset();
}

const ListarPeliculas = () => {

    if ( arregloPeliculas.length > 0 ){

        if ( arregloPeliculas.length > 3 ){
            footer.classList.remove('footer')
        }else {
            footer.classList.add('footer')
        }

        cerrarTarjetas.classList.remove('btncerrarOculto');

        cuerpoTarjetas.innerHTML = '';
        let idElim = 0;
        
        for ( let pelicula of arregloPeliculas ){

            const col =  document.createElement('div'),
              div = document.createElement('div'),
              cardBody = document.createElement('div'),
              h5 = document.createElement('h5'),
              pG = document.createElement('p'),
              pDu = document.createElement('p'),
              pDi = document.createElement('p'),
              buttonEliminar = document.createElement('button');
    
            col.classList.add('col');
            div.classList.add('card','border','border-black');
            cardBody.classList.add('card-body','tarjeta');
            h5.classList.add('card-title','fw-bold');
            pG.classList.add('fw-semibold');
            pDu.classList.add('fw-semibold');
            pDi.classList.add('fw-semibold');
            buttonEliminar.classList.add('btnEliminar');
            buttonEliminar.textContent = 'Eliminar';
            buttonEliminar.type = 'button';
            buttonEliminar.id = `${idElim}`;

            cardBody.appendChild(h5);
            cardBody.appendChild(pG);
            cardBody.appendChild(pDu);
            cardBody.appendChild(pDi);
            cardBody.appendChild(buttonEliminar);
            div.appendChild(cardBody);
            col.appendChild(div);

            const tituloC =  pelicula.get('titulo');
            const generoC =  pelicula.get('genero');
            const duracionC =  pelicula.get('duracion');
            const directorC =  pelicula.get('director');

            h5.textContent = `${tituloC}`;
            pG.textContent = `Género: ${generoC}`;
            pDu.textContent = `Duración: ${duracionC}`;
            pDi.textContent = `Director: ${directorC}`;

            cuerpoTarjetas.appendChild(col);

            idElim++

            buttonEliminar.addEventListener( 'click', (event) =>{

                let idB = parseInt(event.target.id);

                arregloPeliculas.splice(idB,1)

                console.log(arregloPeliculas);

                ListarPeliculas()
                })
        }
    }else{
        cuerpoTarjetas.innerHTML = ''
    }
}

formAgregar.addEventListener('submit', agregarPeliculas);

btnListar.addEventListener('click', ListarPeliculas);

cerrarTarjetas.addEventListener('click', () => {
    
    cerrarTarjetas.classList.add('btncerrarOculto');
    cuerpoTarjetas.innerHTML = '';
})


/*
<div class="col">
            <div class="card border border-black">
                <div class="card-body tarjeta">
                <h5 class="card-title fw-bold">Titulo Pelicula</h5>
                    <p class="fw-semibold">Género:</p>
                    <p class="fw-semibold">Duración:</p>
                    <p class="fw-semibold">Director:</p>
                    <button class="btnEliminar">Eliminar</button> 
                </div>
            </div>
            </div>

*/


