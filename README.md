# microservice-create-product

Este proyecto es un microservicio creada con Node.js-Express que permite eliminar productos de una base de datos. El servicio está configurado para ejecutarse dentro de un contenedor Docker, lo que facilita su despliegue y portabilidad.

## Tecnologías utilizadas
- Node.js
- Docker
- Sequelize (ORM)
- MySQL (para la base de datos)

## Descripción

Este microservicio permite realizar operaciones CRUD sobre productos en una base de datos. El punto final principal que proporciona es para CREAR productos.

## Requisitos

Para ejecutar este proyecto, necesitas tener instalados los siguientes programas:

- [Docker]
- [Visual Studio Code]
- **Node.js**: La versión mínima recomendada es la 14.

## Dependencias

- **Sequelize**: ORM para la interacción con la base de datos.
- **MySQL2**: Para conectarse a MySQL.
- **Express**: Framework web para Node.js.
- **dotenv**: Para gestionar variables de entorno.


## Steps to Run the Project

### 1. Clone the Repository

If you haven't downloaded the project yet, clone or download it from GitHub:

```bash
[git clone https://github.com/Jimmy9812/LenguajeGo.git](https://github.com/Karolpineda/microservice-create-product.git)
```
### 2. Construir la imagen Docker
En el directorio del proyecto, ejecuta el siguiente comando para construir la imagen Docker:

```bash
[docker build -t <tu usuario>/microservice-delete-product
```

### 3. Ejecutar el proyecto

```bash
npm run start

```
La aplicación se ejecuta en: http://localhost:8081

## Uso de la API
### Crear un producto
Endpoint: POST /api/products/
Este endpoint permite crear un producto de la base de datos utilizando.
