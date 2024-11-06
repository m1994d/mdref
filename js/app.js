// Mostrar productos desde el servidor
fetch('http://localhost:3000/productos')
  .then(response => response.json())
  .then(data => mostrarProductos(data))
  .catch(err => console.error('Error al obtener los productos:', err));

// Función para mostrar los productos
function mostrarProductos(productos) {
    const contenedor = document.getElementById('productos');
    contenedor.innerHTML = ''; // Limpiar el contenedor antes de agregar productos

    productos.forEach(producto => {
        const item = document.createElement('div');
        item.classList.add('producto');
        item.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>Precio: $${formatearPrecio(producto.precio)}</p>
            <p>${producto.detalles}</p>
            <button class="agregar-carrito" data-nombre="${producto.nombre}" data-precio="${producto.precio}" data-imagen="${producto.imagen}">Agregar al carrito</button>
        `;
        contenedor.appendChild(item);
    });

    // Agregar eventos a los botones de agregar al carrito
    document.querySelectorAll('.agregar-carrito').forEach(boton => {
        boton.addEventListener('click', agregarAlCarrito);
    });
}

// Función para formatear el precio (con separadores de miles)
function formatearPrecio(precio) {
    return precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'").replace(".", ",");
}

// Fetch de los productos desde el servidor
fetch('http://localhost:3000/productos')
  .then(response => response.json())
  .then(data => mostrarProductos(data))
  .catch(err => console.error('Error al obtener los productos:', err));


function agregarAlCarrito(event) {
    const nombre = event.target.getAttribute('data-nombre');
    const precio = parseFloat(event.target.getAttribute('data-precio'));
    const imagen = event.target.getAttribute('data-imagen');

    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push({ nombre, precio, imagen });
    localStorage.setItem('carrito', JSON.stringify(carrito));

    alert('Producto agregado al carrito!');
}