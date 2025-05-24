# 🍽️ API Restaurante – Menú Digital

Este proyecto es una API simple desarrollada en **Node.js** con **Express** para un restaurante ficticio. Cada ruta representa una sección del menú y devuelve información en formato JSON.

---

## 🎯 Funcionalidades

### Parte 1: Rutas Básicas (`GET`)
- `/entradas` – Lista de entradas
- `/platos-fuertes` – Lista de platos principales
- `/postres` – Lista de postres
- `/bebidas` – Lista de bebidas

### Parte 2: Rutas Dinámicas (`GET`)
- `/menu/:categoria` – Devuelve los items por categoría  
  📌 Ejemplo: `/menu/postres`
- `/item/:id` – Devuelve un ítem específico por ID  
  📌 Ejemplo: `/item/4`

### ✔️ Validaciones implementadas
- Categorías e ítems inexistentes devuelven un error 404 con mensaje personalizado.

---

## ▶️ Video de Demostración

📽 Mira cómo funciona el proyecto en este video:

🔗 [Ver en Loom](https://www.loom.com/share/07b1d0f4ab314559b70a6a2f5a9aa128)

---

## 🚀 Cómo ejecutar este proyecto

1. Clona el repositorio:
```bash
git clone https://github.com/JulioSoza/Menu-Digital.git

Instala las dependencias:
npm install

Ejecuta el servidor:
node index.js

Prueba las rutas con Postman o en tu navegador:
http://localhost:3000/entradas
http://localhost:3000/menu/bebidas
http://localhost:3000/item/5

🛠 Tecnologías usadas
Node.js

Express

Postman

Loom (para grabación de demo)


