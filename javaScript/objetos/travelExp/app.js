const agregarPasajeros = document.getElementById('agregarPasajeros'),  //formulario pasajeros
      identi = document.getElementById('identi'), // Input Identificacion del pasajero
      nombrePersona = document.getElementById('nombrePersona'), // Input Nombre del pasajero
      apellido = document.getElementById('apellido'), // Input Apellido del pasajero
      telefono = document.getElementById('telefono'), // Input Telefono del pasajero
      correo = document.getElementById('correo'), // Input correo del pasajero
      fecha = document.getElementById('fecha'), // Input fecha de nacimiento del pasajero
      nacionalidad = document.getElementById('nacionalidad'), // Input nacionalidad del pasajero
      listar = document.getElementById('listar'), // Boton listar pasajeros
      buscar = document.getElementById('buscar'), // Input barra de busqueda de pasajeros
      botonBuscar = document.getElementById('botonBuscar'), // Boton buscar pasajeros
      modalPasajero = document.getElementById('modalPasajero'), // Nombre del pasajero en el modal
      cerrarTablaPasajeros = document.getElementById('cerrarTablaPasajeros'), // Cerrar tabla de pasajeros
      padreTablaPasajeros = document.getElementById('padreTablaPasajeros'), // padre tabla psasajeros

      agregarDestino = document.getElementById('agregarDestino'), // Formulario rutas
      valorTiquete = document.getElementById('valorTiquete'), // Input valor de la ruta
      ciudadOrigen = document.getElementById('ciudadOrigen'), // Input ciudad de origen
      ciudadDestino = document.getElementById('nombreRuta'), // Input ciudad destino
      puntosFide = document.getElementById('puntosFide'), // Input puntos fidelizacion
      padreTablaDestino = document.getElementById('padreTablaDestino'), // Padre tabla tabla rutas

      agregarCompra = document.getElementById('agregarCompra'), // Formulario compra de tiquetes
      selectPasajero = document.getElementById('selectPasajero'), // Select de pasajero
      contenidoCompra = document.getElementById('contenidoCompra'), // Modal contenido de la compra

      padreTablaFidelizacion = document.getElementById('padreTablaFidelizacion'), // Padre tabla fidelizacion

      arregloPasajeros = [],
      arregloRutas = [];
      
      let idPasajero = 0; // id pasajero para llevar control de eliminar y editar

      const agregarPasajerosArreglo = (event) => {   // Agrega pasajeros al arreglo pasajeros

        event.preventDefault();

        const pasajero = {};

        pasajero['id'] = idPasajero;
        pasajero['identi'] = identi.value;
        pasajero['nombre'] = nombrePersona.value;
        pasajero['apellido'] = apellido.value;
        pasajero['telefono'] = telefono.value;
        pasajero['correo'] = correo.value;
        pasajero['fecha'] = fecha.value;
        pasajero['nacionalidad'] = nacionalidad.value;
        pasajero['fidelizacion'] = 0;               // control puntos de fidelizacion
        idPasajero++;

        agregarPasajeros.reset();
        arregloPasajeros.push(pasajero);
      }


      const listarPasajeros = () => {   //Listar pasajeros del arregloPasajeros en el DOM

        if (arregloPasajeros.length === 0){     // Valida que hayan pasajeros
            alert('No hay usuarios en el sistema');
            return;}

        padreTablaPasajeros.innerHTML = ''; //Limpia la tabla pasajeros del DOM

        for ( pasajero of arregloPasajeros ){   // Recorre el arreglo de pasajeros

            const   // creacion de las etiquetas
                  tdIden = document.createElement('th'),
                  tdNom = document.createElement('td'),
                  tdApe = document.createElement('td'),
                  tdTel = document.createElement('td'),
                  tdCorr = document.createElement('td'),
                  tdFecha = document.createElement('td'),
                  tdNAcio = document.createElement('td'),
                  tdBotones = document.createElement('td'),
                  botonEli = document.createElement('button'),
                  botonEdi = document.createElement('button');
                  hijoTablaPasajeros = document.createElement('tr');

                  tdBotones.classList.add('text-center', 'w-25');
                  botonEdi.classList.add('btn', 'btn-sm',  'btn-warning', 'm-1');
                  botonEli.classList.add('btn', 'btn-sm',  'btn-danger', 'm-1');

                  botonEdi.setAttribute("data-bs-toggle","modal");
                  botonEdi.setAttribute("data-bs-target","staticBackdrop");

                  botonEdi.id = `${pasajero.id}`
                  botonEli.id = `${pasajero.id}`

                  tdIden.textContent = `${pasajero.identi}`;
                  tdNom.textContent = `${pasajero.nombre}`;
                  tdApe.textContent = `${pasajero.apellido}`;
                  tdTel.textContent = `${pasajero.telefono}`;
                  tdCorr.textContent = `${pasajero.correo}`;
                  tdFecha.textContent = `${pasajero.fecha}`;
                  tdNAcio.textContent = `${pasajero.nacionalidad}`;
                  botonEdi.textContent = 'Editar';
                  botonEli.textContent = 'Eliminar';

                  tdBotones.appendChild(botonEdi);
                  tdBotones.appendChild(botonEli);
                  
                  hijoTablaPasajeros.appendChild(tdIden);
                  hijoTablaPasajeros.appendChild(tdNom);
                  hijoTablaPasajeros.appendChild(tdApe);
                  hijoTablaPasajeros.appendChild(tdTel);
                  hijoTablaPasajeros.appendChild(tdCorr);
                  hijoTablaPasajeros.appendChild(tdFecha);
                  hijoTablaPasajeros.appendChild(tdNAcio);
                  hijoTablaPasajeros.appendChild(tdBotones);

                  padreTablaPasajeros.appendChild(hijoTablaPasajeros);

            //Creacion de la tabla en el DOM
            




                    botonEli.addEventListener('click', (event) => {

                        let idBorrar = event.target.id;

                        for ( pasajero of arregloPasajeros ){

                            if ( pasajero.id == idBorrar ){
                                let indiceBorrar = arregloPasajeros.indexOf( pasajero );
                                arregloPasajeros.splice(indiceBorrar,1);
                                if ( arregloPasajeros.length === 0 ){
                                    padreTablaPasajeros.innerHTML = '';
                                }else{
                                    listarPasajeros();
                                }

                            }
                        }
                    })

                
               


        }
      }

      agregarPasajeros.addEventListener('submit',agregarPasajerosArreglo);

      listar.addEventListener('click',listarPasajeros)





    //   <tr> tabla pasajero
    //       <th>13234234243</th>
    //       <td>MarkMarkMarkMark</td>
    //       <td>OttosMarkMark</td>
    //       <td>@mdosMarkMark</td>
    //       <td>@mdosMarkMarkMarkMarkMark</td>
    //       <td>@mdosMarkMark</td>
    //       <td>@mdosMarkMarkMarkMark</td>
    //       <td class="text-center w-25">
    //         <button type="button" class="btn btn-sm  btn-warning m-1" data-bs-toggle="modal"
    //           data-bs-target="#staticBackdrop" id="editarForm">
    //           Editar
    //         </button>
    //         <button class="btn btn-sm  btn-danger m-1" type="button" id="eliminar">Eliminar</button>
    //       </td>
    //     </tr>

    // <tr>  tabla rutas
    //       <td>OttosMarkMark</td>
    //       <td>@mdosMarkMark</td>
    //       <td>@mdosMarkMarkMarkMarkMark</td>
    //       <td>@mdosMarkMark</td>
    //       <td>@mdosMarkMarkMarkMark</td>
    //       <td>@mdosMarkMarkMarkMark</td>
    //       <td class="text-center w-25">
    //         <button class="btn btn-sm  btn-danger m-1" type="button" id="eliminar">Eliminar</button>
    //       </td>
    //     </tr>

    // <tr>  tabla fidelizacion
    //     <td>OttosMarkMark</td>
    //     <td>@mdosMarkMark</td>
    //   </tr>