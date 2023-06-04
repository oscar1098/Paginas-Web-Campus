const   formularioAgregar = document.getElementById('formularioAgregar')
        nombre = document.getElementById('nombre'),
        telefono = document.getElementById('telefono'),
        correo = document.getElementById('correo'),
        padreTabla = document.getElementById('padreTabla'),
        eliminar = document.getElementById('eliminar'),
        editarBoton = document.getElementById('editarBoton'),
        formularioEditar = document.getElementById('formularioEditar')
        editarNombre = document.getElementById('editarNombre'),
        editarTelefono = document.getElementById('editarTelefono'),
        editarCorreo = document.getElementById('editarCorreo');

let num = 1;

const agregarUsuario = (event) => {

    event.preventDefault();

    const hijoTabla = document.createElement('tr'),
          numTabla = document.createElement('th'),
          nombreTabla = document.createElement('td'),
          telefonoTabla = document.createElement('td'),
          correoTabla = document.createElement('td'),
          botonTabla = document.createElement('td'),
          botonEditar = document.createElement('button'),
          botonEliminar = document.createElement('button');

    botonTabla.classList.add('text-center', 'w-25');

    botonEditar.id = 'editarForm';
    botonEditar.classList.add('btn','btn-sm','btn-warning','m-1');
    botonEditar.type = 'button';
    botonEditar.setAttribute('data-bs-toggle','modal');
    botonEditar.setAttribute('data-bs-target','#staticBackdrop');

    botonEliminar.id = 'eliminar';
    botonEliminar.classList.add('btn','btn-sm','btn-danger', 'm-1');
    botonEliminar.type = 'button';

    numTabla.textContent = num;
    nombreTabla.textContent = nombre.value;
    telefonoTabla.textContent = telefono.value;
    correoTabla.textContent = correo.value;
    botonEditar.textContent = 'Editar';
    botonEliminar.textContent = 'Eliminar'

    botonTabla.appendChild(botonEditar);
    botonTabla.appendChild(botonEliminar);
    hijoTabla.appendChild(numTabla);
    hijoTabla.appendChild(nombreTabla);
    hijoTabla.appendChild(telefonoTabla);
    hijoTabla.appendChild(correoTabla);
    hijoTabla.appendChild(botonTabla);
    padreTabla.appendChild(hijoTabla);

    nombre.value = '';
    telefono.value = '';
    correo.value = '';

    num++;

    const traerInformacion = () =>{

        const editarUsuario = (event) => {
            
            const hermanos = hijoTabla.children;
        
            event.preventDefault();
            
            valorCambio = [ 'no cuenta',editarNombre.value, editarTelefono.value, editarCorreo.value]; 
            
            for ( let i = 1; i <= 3; i++){
                hermanos[i].textContent  = ( valorCambio[i] === '' ) ? hermanos[i].textContent : valorCambio[i];
            }
            
            editarNombre.value = '';
            editarTelefono.value = '';
            editarCorreo.value = '';

            formularioEditar.removeEventListener('submit',editarUsuario);
        }
        
        formularioEditar.addEventListener('submit',editarUsuario);
    }

    const eliminarUsuario = () => {
        hijoTabla.remove();
    }

    botonEditar.addEventListener('click',traerInformacion);

    botonEliminar.addEventListener('click', eliminarUsuario);
}

formularioAgregar.addEventListener('submit', agregarUsuario);

{/* <tr >
    <th>1</th>
    <td>Mark</td>
    <td>Ottos</td>
    <td>@mdos</td>
    <td class="text-center w-25">
        <button type="button" class="btn btn-sm  btn-warning m-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop" id="editarForm">
            Editar
        </button>
        <button class="btn btn-sm  btn-danger m-1" type="button" id="eliminar">Eliminar</button>
    </td>
</tr> */}