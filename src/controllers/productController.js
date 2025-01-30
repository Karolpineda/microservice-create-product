const Product = require("../models/productModel");

const createProduct = async (req, res) => {
  try {
    // We extract the fields from the body
    const { name, stock, createdBy, updatedBy } = req.body;

    // Validate mandatory fields (at least name and createdBy)
    if (!name || !createdBy) {
      return res.status(400).json({
        message: "Faltan campos obligatorios (name, createdBy)."
      });
    }

    const newProduct = await Product.create({
      name,
      stock,
      createdBy,
      updatedBy
    });

    return res.status(201).json({
      message: "Producto creado exitosamente.",
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
