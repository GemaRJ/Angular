# Angular

# 🛒 Tienda Online con Carrito (Angular + TypeScript)

Este proyecto es la adaptación de mi **Tienda Online en JavaScript** a **Angular con TypeScript**, como parte de mi aprendizaje en desarrollo web moderno y buenas prácticas en SPA (Single Page Application).

La aplicación permite listar productos, añadirlos a un carrito de compras y gestionar cantidades y totales. Además, sirve como base para futuras implementaciones fullstack con usuarios y sesiones.

---

## 🔧 Tecnologías

- **Angular** (TypeScript)  
- **Bootstrap** para diseño responsive  
- **SweetAlert** para notificaciones y confirmaciones  
- **LocalStorage** para persistencia del carrito  
- **HTML5 / CSS3**  

---

## 📂 Estructura del proyecto

El proyecto sigue esta organización de carpetas y componentes:

- **src/app/components/**  
  - `product-list/` → Lista de productos  
  - `product-item/` → Tarjeta individual de producto  
  - `cart/` → Carrito de compra  

- **src/app/services/**  
  - `product.service.ts` → Gestión de productos y carrito  

- **src/app/models/**  
  - `product.model.ts` → Modelo de producto  

- **src/app/pages/**  
  - `home/` → Página principal  
  - `cart-page/` → Página de carrito  

- **src/assets/images/** → Imágenes de productos  

---

## ⚙️ Funcionalidades

- Listar productos dinámicamente desde un **servicio Angular**  
- Añadir productos al carrito y actualizar cantidades  
- Eliminar productos del carrito  
- Mostrar total acumulado y cantidad de artículos  
- Persistencia en `localStorage` para mantener datos entre recargas  

---

## 🌟 Inspiración y enlaces

Basado en mi proyecto original en JavaScript:  
[Ver proyecto JS original](https://github.com/GemaRJ/JavaScript/tree/main/PROYECTOS%20PERSONALES/Tienda_productos_carrito)

---

## 🚀 Próximos pasos (Fullstack)

- Integrar **usuarios y sesiones** para carrito personalizado  
- Conectar con **API real** para gestión de productos  
- Migrar a **fullstack Angular + Node.js / Express**  
- Posible integración con bases de datos MySQL o MongoDB  

---
