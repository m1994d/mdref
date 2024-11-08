# 🛒 Tienda Geek

![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=white&style=for-the-badge)
![JSON](https://img.shields.io/badge/-JSON-000000?logo=json&logoColor=white&style=for-the-badge)
![CSS](https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white&style=for-the-badge)
![HTML](https://img.shields.io/badge/-HTML5-E34F26?logo=html5&logoColor=white&style=for-the-badge)

<details>
   <summary>Descripción</summary>

**Tienda Geek** es una aplicación web que permite a los usuarios navegar, buscar y agregar productos a un carrito de compras. Los administradores pueden agregar, modificar y eliminar productos, y los clientes pueden ver detalles y realizar búsquedas por categoría.

</details>

<details>
   <summary>Características</summary>
   
   - **Carrito de Compras**: Los clientes pueden agregar productos al carrito y ver el total.
   - **Administración de Productos**: Se pueden agregar, editar y eliminar productos desde el panel de administración.
   - **Búsqueda y Filtrado**: Los productos pueden ser filtrados por categoría o buscados por nombre.
   - **Persistencia de Datos**: Utiliza `db.json` para almacenar los productos creados, permitiendo que se mantengan al recargar la página.
   - 
</details>



<details>

<summary>Implementación</summary> 

### Estructura del Proyecto
- **HTML**: Estructura base de las páginas (`index.html`, `admin.html`, `carrito.html`, `modificar.html`, `login.html`).
- **CSS**: Diseño responsivo y estilo futurista para la interfaz de usuario.
- **JavaScript**: Lógica para manipular el carrito, la administración de productos, y el manejo de almacenamiento en `localStorage` o `db.json`.

### Configuración de `db.json` y JSON Server
Para simular una base de datos, se implementó `JSON Server`, que utiliza `db.json` como archivo de almacenamiento.

1. **Instalación de JSON Server**:
   ```bash
   npm install -g json-server

2. **Inicio del servidor**:

    ```bash

    json-server --watch db.json --port 3000

> Esto permite realizar operaciones CRUD sobre http://localhost:3000/productos.
</details>
<details>

<summary>Uso</summary>


1.Clona este repositorio:

    git clone <URL_DEL_REPOSITORIO>

2. Instala JSON Server.
3. Corre el servidor JSON:

    ```bash

    json-server --watch db.json --port 3000

Accede a la aplicación en tu navegador para interactuar con el catálogo de productos.
Tecnologías Utilizadas

    HTML5: Estructura de las páginas.
    CSS3: Estilo visual.
    JavaScript: Lógica de la aplicación.
    JSON Server: Simulación de la base de datos.
</details>




Desarrollador por <sup>MadTech</sup>

