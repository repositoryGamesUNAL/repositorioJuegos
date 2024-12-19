import express from "express"
import { Application } from "express";
import initializeRoutes from "./routes";
import { logError,errorResponse } from "./middlewares/errorMiddleware";


const app:Application = express();
app.use(express.json()); //permite las solicitudes con body
initializeRoutes(app);
app.use(logError);//Error logging middleware
app.use(errorResponse);//Error handling middleware



export default app;