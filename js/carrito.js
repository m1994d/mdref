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
    
    <button class="eliminar" data-index="${index}"><i class="fas fa-trash"></i> Eliminar</button>
`;

        contenedor.appendChild(productoDiv);
        total += item.precio; // Sumar el precio al total
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

function eliminarProducto(event) {
    const index = event.target.getAttribute('data-index'); // Obtener el índice correcto
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.splice(index, 1); // Eliminar producto del carrito
    localStorage.setItem('carrito', JSON.stringify(carrito)); // Actualizar `localStorage`
    mostrarCarrito(); // Refrescar la vista del carrito
}

// Cargar el carrito al iniciar la página
mostrarCarrito();
