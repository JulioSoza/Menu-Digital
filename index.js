const express = require('express');
const app = express();
const PORT = 3000;

// Datos hardcodeados
const menu = {
  entradas: [
    { id: 1, nombre: 'Bruschetta' },
    { id: 2, nombre: 'Sopa de tomate' }
  ],
  'platos-fuertes': [
    { id: 3, nombre: 'Lasaña' },
    { id: 4, nombre: 'Pollo al curry' }
  ],
  postres: [
    { id: 5, nombre: 'Tiramisú' },
    { id: 6, nombre: 'Helado artesanal' }
  ],
  bebidas: [
    { id: 7, nombre: 'Limonada' },
    { id: 8, nombre: 'Café' }
  ]
};

// Parte 1: Rutas Básicas
app.get('/entradas', (req, res) => res.json(menu.entradas));
app.get('/platos-fuertes', (req, res) => res.json(menu['platos-fuertes']));
app.get('/postres', (req, res) => res.json(menu.postres));
app.get('/bebidas', (req, res) => res.json(menu.bebidas));

// Parte 2: Rutas Dinámicas
app.get('/menu/:categoria', (req, res) => {
  const categoria = req.params.categoria.toLowerCase();
  if (menu[categoria]) {
    res.json(menu[categoria]);
  } else {
    res.status(404).json({ error: 'Categoría no encontrada' });
  }
});

app.get('/item/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = Object.values(menu).flat().find(el => el.id === id);

  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ error: 'Item no encontrado' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
