import express, { Router, Request, Response } from "express";
import {
  validateId,
  validateNewGame,
  validateGameChanges,
} from "../middlewares/middlewareGames";
import { gameController } from "../controllers/gameController";

export const gamesRouter: Router = express.Router();

gamesRouter.get("/", gameController.getAllGames);
gamesRouter.get("/:id", validateId, gameController.getGameById);
gamesRouter.post("/", validateNewGame, gameController.createGame);
gamesRouter.patch("/:id", validateGameChanges, gameController.modifyGame);

export default gamesRouter;
