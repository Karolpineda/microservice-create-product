const app = require("./app");
const sequelize = require("./config/db");

const PORT = process.env.PORT || 8081;

(async () => {
  try {
    // Synchronize the database (create tables if they do not exist)
    await sequelize.sync();
    console.log("Base de datos sincronizada.");

    // Start the server
    app.listen(PORT, () => {
      console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
  } catch (error) {
    console.error("Error al iniciar el servidor:", error);
  }
})();
