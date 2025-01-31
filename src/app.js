const express = require("express");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const swaggerSpec = require("./docs/swagger");
const productRoutes = require("./routes/productRoutes");

const app = express();

// Enable CORS (with default or custom settings)
app.use(cors());

// Middleware to proceses JSON
app.use(express.json());

// Rutes
app.use("/api", productRoutes);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

module.exports = app;