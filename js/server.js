const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Ruta para obtener productos desde el archivo db.json
app.get('/productos', (req, res) => {
    const productosPath = path.join(__dirname, 'db.json');
    fs.readFile(productosPath, 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).send('Error al leer los productos');
        }
        res.json(JSON.parse(data));
    });
});

// Ruta para agregar un producto al archivo db.json
app.post('/productos', express.json(), (req, res) => {
    const newProduct = req.body;
    const productosPath = path.join(__dirname, 'db.json');
    fs.readFile(productosPath, 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).send('Error al leer los productos');
        }
        const productos = JSON.parse(data);
        productos.push(newProduct);
        fs.writeFile(productosPath, JSON.stringify(productos, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Error al guardar el producto');
            }
            res.status(201).send('Producto agregado');
        });
    });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
