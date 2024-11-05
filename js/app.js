const productos = JSON.parse(localStorage.getItem('productos')) || [];
mostrarProductos(productos);

function mostrarProductos(filtrados) {
    const contenedor = document.getElementById('productos');
    contenedor.innerHTML = ''; // Limpia el contenedor antes de agregar productos
    filtrados.forEach(producto => {
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

    // Agregar evento al botón
    const botonesAgregar = document.querySelectorAll('.agregar-carrito');
    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', agregarAlCarrito);
    });
}

function agregarAlCarrito(event) {
    const nombre = event.target.getAttribute('data-nombre');
    const precio = parseFloat(event.target.getAttribute('data-precio')); // Asegurarse de que sea número
    const imagen = event.target.getAttribute('data-imagen');

    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push({ nombre, precio, imagen });
    localStorage.setItem('carrito', JSON.stringify(carrito));

    alert('Producto agregado al carrito!');
}

document.getElementById('busqueda').addEventListener('input', (e) => {
    const filtro = e.target.value.toLowerCase();
    const productosFiltrados = productos.filter(prod => prod.nombre.toLowerCase().includes(filtro));
    mostrarProductos(productosFiltrados);
});

mostrarProductos(productos);

function formatearPrecio(precio) {
    return precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'").replace(".", ",");
}

document.getElementById('filtro-categoria').addEventListener('change', (e) => {
  const categoriaSeleccionada = e.target.value;
  const productosFiltrados = categoriaSeleccionada === "Todos" 
      ? productos 
      : productos.filter(prod => prod.categoria === categoriaSeleccionada);
  mostrarProductos(productosFiltrados);
});

fetch('http://localhost:3000/productos')
  .then(response => response.json())
  .then(data => mostrarProductos(data));
