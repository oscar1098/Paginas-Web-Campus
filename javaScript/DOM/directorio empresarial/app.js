const agregar       = document.getElementById('agregar'),
      nombre        = document.getElementById('nombre'),
      email         = document.getElementById('email'),
      telefono      = document.getElementById('telefono'),
      botonEliminar = document.getElementById('botonEliminar'),
      idEliminar    = document.getElementById('idEliminar');
      padreTabla    = document.getElementById('padreTabla');

let num = 1;

const agregarUsario = (event) => {

    event.preventDefault();

    const hijo          = document.createElement('tr'),
          tagth         = document.createElement('th'),
          tagtdNombre   = document.createElement('td'),
          tagtdEmail    = document.createElement('td'),
          tagtdTelefono = document.createElement('td');
    
    hijo.classList.add('table-secondary', 'tabla');
    hijo.id = num;

    tagth.textContent = `${num}`;
    tagtdNombre.textContent =`${nombre.value}`;
    tagtdTelefono.textContent = `${telefono.value}`;
    tagtdEmail.textContent = `${email.value}`;

    hijo.appendChild(tagth);
    hijo.appendChild(tagtdNombre);
    hijo.appendChild(tagtdTelefono);
    hijo.appendChild(tagtdEmail);

    padreTabla.appendChild(hijo);

    nombre.value = '';
    email.value = '';
    telefono.value = '';

    num++;
}

const elimiarUsario = () => {
    let hijoEliminar = document.getElementById(idEliminar.value);

    padreTabla.removeChild(hijoEliminar);

    idEliminar.value = '';
}

agregar.addEventListener('submit', agregarUsario);

botonEliminar.addEventListener('click', elimiarUsario);