document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos();
});

document.getElementById('admin-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const nuevoProducto = {
        nombre: document.getElementById('nombre').value,
        precio: parseFloat(document.getElementById('precio').value),
        imagen: document.getElementById('imagen').value,
        categoria: document.getElementById('categoria').value,
        detalles: document.getElementById('detalles').value
    }; 

    await fetch('http://127.0.0.1:5501', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevoProducto)
    });

    alert('Producto agregado!');
    mostrarProductos(); 

    // Obtener productos existentes
    const productos = JSON.parse(localStorage.getItem('productos')) || [];
    productos.push(nuevoProducto); // Agregar nuevo producto a la lista
    localStorage.setItem('productos', JSON.stringify(productos)); // Actualizar localStorage

    alert('Producto agregado!'); // Confirmar que se agregó el producto

    // Limpiar el formulario
    document.getElementById('nombre').value = '';
    document.getElementById('precio').value = '';
    document.getElementById('imagen').value = '';
});


function mostrarProductos() {
    const productos = JSON.parse(localStorage.getItem('productos')) || [];
    const lista = document.getElementById('productos-lista');
    lista.innerHTML = '';

    productos.forEach((producto, index) => {
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('producto-item');
        productoDiv.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio.toFixed(2)}</p>
            <img src="${producto.imagen}" alt="${producto.nombre}" style="width: 100%; height: auto;">
            <button onclick="location.href='modificar.html?index=${index}'">Modificar</button>
            <button onclick="eliminarProducto(${index})">Eliminar</button>
        `;
        lista.appendChild(productoDiv);
    });
}

function modificarProducto(index) {
    const productos = JSON.parse(localStorage.getItem('productos')) || [];
    const producto = productos[index];

    // Pedir nuevos detalles del producto al usuario
    const nuevoNombre = prompt("Nuevo nombre:", producto.nombre);
    const nuevoPrecio = prompt("Nuevo precio:", producto.precio);
    const nuevaImagen = prompt("Nueva URL de imagen:", producto.imagen);

    // Validar los nuevos datos antes de actualizar
    if (nuevoNombre && !isNaN(nuevoPrecio) && nuevaImagen) {
        productos[index] = {
            nombre: nuevoNombre,
            precio: parseFloat(nuevoPrecio),
            imagen: nuevaImagen
        };
        
        localStorage.setItem('productos', JSON.stringify(productos)); // Actualiza localStorage
        mostrarProductos(); // Vuelve a mostrar la lista actualizada
    } else {
        alert("Por favor, proporciona información válida.");
    }
}

function eliminarProducto(index) {
    const productos = JSON.parse(localStorage.getItem('productos')) || [];
    productos.splice(index, 1); // Elimina el producto de la lista
    localStorage.setItem('productos', JSON.stringify(productos)); // Actualiza localStorage
    mostrarProductos(); // Vuelve a mostrar la lista actualizada
}
