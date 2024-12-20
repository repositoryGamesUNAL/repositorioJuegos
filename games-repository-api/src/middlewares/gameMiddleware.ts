import { Request, Response, NextFunction } from "express";
import {
  findAllGames,
  findGameById,
  createGame,
  editGame,
} from "../services/gameService";

export const getAllGames = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const data: object = findAllGames();

  res.status(200).json(data);
};
export const getGameById = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const { id } = req.params;
    const game = findGameById(parseInt(id));

    res.status(200).json(game);
  } catch (err) {
    next(err);
  }
};
export const postGame = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const body = req.body;
    const newGame = createGame(body);

    res.status(201).json(newGame);
  } catch (err) {
    next(err);
  }
};
export const modifyGame = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const {
      params: { id },
    } = req;
    const { body } = req;

    const data = editGame(parseInt(id), body);

    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};
