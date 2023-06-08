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

      const agregarUsuarios = (event) => {   // Agrega pasajeros al arreglo pasajeros

        event.preventDefault();

        const pasajero = {};

        pasajero['id'] = idPasajero;
        pasajero['nombre'] = nombrePersona;
        pasajero['apellido'] = apellido;
        pasajero['telefono'] = telefono;
        pasajero['correo'] = correo;
        pasajero['fecha'] = fecha;
        pasajero['nacionalidad'] = nacionalidad;


      }



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