import app from "./app";
import { config } from "./config";
import sequelize from "./config/database";
const { port } = config;

const startServer = async () => {
    try {
        await sequelize.authenticate();
        
        await sequelize.sync({ alter: true });
    
        app.listen(port, () => {
            console.log(`Servidor encendido! Escuchando en el puerto: ${port}`);
        });
    } catch (error) {
        console.error("Error al iniciar la aplicación:", error);
        process.exit(1);
    }
};

startServer();