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

// Resto del código...

  
  
  document.getElementById('busqueda').addEventListener('input', (e) => {
    const filtro = e.target.value.toLowerCase();
    const productosFiltrados = productos.filter(prod => prod.nombre.toLowerCase().includes(filtro));
    mostrarProductos(productosFiltrados);
  });
  
  mostrarProductos(productos);
  
  function formatearPrecio(precio) {
    return precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'").replace(".", ",");
}
