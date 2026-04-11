# 🛍️ Angular Shop – SPA E-commerce

Aplicación **Single Page Application (SPA)** desarrollada con **Angular** que simula una tienda online con catálogo de productos, carrito de compra y formulario de contacto con historial.

🔗 **Demo en producción:**  
👉 https://angular-one-tau-51.vercel.app/productos

---

## 🚀 Features

- 🔄 Consumo de API externa (DummyJSON)
- 🛒 Carrito de compra con estado compartido
- 🔍 Filtros dinámicos (categoría, marca, precio)
- 📄 Detalle de producto desplegable
- 📩 Formulario con validación + historial persistente
- 💾 Uso de `localStorage`
- ⚡ Navegación SPA sin recargas
- 📱 Diseño responsive

---

## 🧱 Tech Stack

- Angular  
- TypeScript  
- HTML / CSS  
- Bootstrap  
- SweetAlert2  
- Vercel  

---

## 📂 Arquitectura

```text
components/
  ├── productos   → catálogo + filtros
  ├── carrito     → gestión de compra
  └── contacto    → formulario + historial

services/
  ├── api.ts      → consumo de API
  └── cart.ts     → estado global del carrito
