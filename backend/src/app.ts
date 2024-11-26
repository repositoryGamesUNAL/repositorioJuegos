import express from "express";
import pingRouter from "./routes/ping"

const app = express();

app.use(express.json()); //permite las solicitudes con body

app.use("/", pingRouter)

export default app;