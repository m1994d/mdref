document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const index = urlParams.get('index');
    const productos = JSON.parse(localStorage.getItem('productos')) || [];
    
    if (index !== null) {
        const producto = productos[index];
        document.getElementById('nombre').value = producto.nombre;
        document.getElementById('precio').value = producto.precio;
        document.getElementById('imagen').value = producto.imagen;
    }

    document.getElementById('modificar-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const nuevoNombre = document.getElementById('nombre').value;
        const nuevoPrecio = parseFloat(document.getElementById('precio').value);
        const nuevaImagen = document.getElementById('imagen').value;

        if (index !== null && nuevoNombre && !isNaN(nuevoPrecio) && nuevaImagen) {
            productos[index] = { nombre: nuevoNombre, precio: nuevoPrecio, imagen: nuevaImagen };
            localStorage.setItem('productos', JSON.stringify(productos));
            alert('Producto actualizado!');
            window.location.href = 'admin.html'; // Regresar a la lista de productos
        } else {
            alert("Por favor, proporciona información válida.");
        }
    });
});
