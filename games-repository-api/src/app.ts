import express from "express"
import { Application } from "express";
import initializeRoutes from "./routes";

const app:Application = express();

app.use(express.json()); //permite las solicitudes con body

initializeRoutes(app);

export default app;