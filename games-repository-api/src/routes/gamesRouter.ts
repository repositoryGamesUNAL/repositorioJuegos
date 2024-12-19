import express, { Router, Request, Response } from "express";
import {
  validateId,
  validateNewGame,
  validateGameChanges,
} from "../middlewares/validateMiddleware";
import {
  getAllGames,
  getGameById,
  postGame,
  modifyGame,
} from "../middlewares/gameMiddleware";
import { gameNotFound } from "../middlewares/errorMiddleware";
import app from "../app";

export const gamesRouter: Router = express.Router();

gamesRouter.get("/", getAllGames);
gamesRouter.get("/:id", validateId, getGameById, gameNotFound);
gamesRouter.post("/", validateNewGame, postGame);
gamesRouter.patch("/:id", validateGameChanges, modifyGame, gameNotFound);

export default gamesRouter;
