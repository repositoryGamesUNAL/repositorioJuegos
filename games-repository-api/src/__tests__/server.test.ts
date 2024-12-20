import app from "../app";
import sequelize from "../config/database";
import { config } from "../config/general";

describe("Server Initialization", () => {
    const mockListen = jest.fn();
    const mockAuthenticate = jest.fn();
    const mockSync = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();

        jest.spyOn(app, "listen").mockImplementation(mockListen);
        jest.spyOn(sequelize, "authenticate").mockImplementation(mockAuthenticate);
        jest.spyOn(sequelize, "sync").mockImplementation(mockSync);
    });

    it("should start the server and authenticate the database", async () => {
        const port = config.port;

        mockAuthenticate.mockResolvedValueOnce(undefined);
        mockSync.mockResolvedValueOnce(undefined);

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

        await startServer();

        expect(mockAuthenticate).toHaveBeenCalledTimes(1);
        expect(mockSync).toHaveBeenCalledWith({ alter: true });
        expect(mockListen).toHaveBeenCalledWith(port, expect.any(Function));
    });

    it("should handle errors during server initialization", async () => {
        const errorMessage = "Database connection error";
        mockAuthenticate.mockRejectedValueOnce(new Error(errorMessage));

        const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(() => {});
        const processExitSpy = jest.spyOn(process, "exit").mockImplementation(() => {
            throw new Error("process.exit called");
        });

        const startServer = async () => {
            try {
                await sequelize.authenticate();
                await sequelize.sync({ alter: true });

                app.listen(config.port, () => {
                    console.log(`Servidor encendido! Escuchando en el puerto: ${config.port}`);
                });
            } catch (error) {
                console.error("Error al iniciar la aplicación:", error);
                process.exit(1);
            }
        };

        await expect(startServer()).rejects.toThrow("process.exit called");

        expect(mockAuthenticate).toHaveBeenCalledTimes(1);
        expect(consoleErrorSpy).toHaveBeenCalledWith("Error al iniciar la aplicación:", expect.any(Error));
        expect(processExitSpy).toHaveBeenCalledWith(1);

        consoleErrorSpy.mockRestore();
        processExitSpy.mockRestore();
    });
});
