function formatearPrecio(precio) {
    return precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'").replace(".", ",");
}

function mostrarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const contenedor = document.getElementById('carrito');
    contenedor.innerHTML = '';

    let total = 0; // Inicializar total

    carrito.forEach((item, index) => {
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('producto');
        productoDiv.innerHTML = `
            <img src="${item.imagen}" alt="${item.nombre}">
            <h3>${item.nombre}</h3>
            <p>Precio: $${formatearPrecio(item.precio)}</p>
            <button class="eliminar" data-index="${index}"><i class="fas fa-trash"></i>Eliminar</button> <!-- Botón de eliminar -->
        `;
        contenedor.appendChild(productoDiv);
        total += item.precio; // Asegúrate de que 'precio' sea un número
    });

    // Mostrar total
    const totalDiv = document.createElement('div');
    totalDiv.classList.add('total');
    totalDiv.innerHTML = `<h3>Total: $${formatearPrecio(total)}</h3>`;
    contenedor.appendChild(totalDiv);

    // Añadir eventos de eliminar
    const botonesEliminar = document.querySelectorAll('.eliminar');
    botonesEliminar.forEach(boton => {
        boton.addEventListener('click', eliminarProducto);
    });
}


function agregarAlCarrito(event) {
    const nombre = event.target.getAttribute('data-nombre');
    const precio = parseFloat(event.target.getAttribute('data-precio'));
    const imagen = event.target.getAttribute('data-imagen');

    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push({ nombre, precio, imagen });
    localStorage.setItem('carrito', JSON.stringify(carrito));

    alert('Producto agregado al carrito!');
}

function eliminarProducto(event) {
    const index = event.target.closest('.eliminar').getAttribute('data-index'); // Asegura que se obtenga el índice correcto
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.splice(index, 1); // Eliminar producto
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito(); // Volver a mostrar el carrito
}

// Cargar el carrito al iniciar la página
mostrarCarrito();
