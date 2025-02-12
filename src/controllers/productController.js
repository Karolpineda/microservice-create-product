// src/controllers/productController.js
const axios = require("axios"); // Importar axios
const Product = require("../models/productModel");
require("dotenv").config();  // Para acceder a las variables de entorno
const createProduct = async (req, res) => {
  try {
    // Extraemos los campos del body
    const { name, stock, createdBy, updatedBy } = req.body;

    // Validamos campos obligatorios (al menos name y createdBy)
    if (!name || !createdBy) {
      return res.status(400).json({
        message: "Faltan campos obligatorios (name, createdBy)."
      });
    }

    // Creamos el producto en la base de datos
    const newProduct = await Product.create({
      name,
      stock,
      createdBy,
      updatedBy
    });

    // Ahora llamamos al microservicio de notificaciones
    const notificationUrl = "http://localhost:8082/notifications/product-created";
    await axios.post(notificationUrl, {
      name: newProduct.name,
      stock: newProduct.stock,
      createdAt: newProduct.createdAt, // Fecha de creación
      emailTo: process.env.NOTIFICATION_EMAIL
    });

    return res.status(201).json({
      message: "Producto creado exitosamente y notificación enviada.",
      product: newProduct
    });
  } catch (error) {
    console.error("Error al crear producto:", error);
    return res.status(500).json({
      message: "Error interno del servidor."
    });
  }
};

module.exports = { createProduct };
