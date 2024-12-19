import { Request, Response, NextFunction } from "express";
import { GameService } from "../services/gameService";
export class gameController {
  private static service: GameService = GameService.getInstance();

  static getAllGames(req: Request, res: Response, next: NextFunction): void {
    try {
      const data: object = gameController.service.findAllGames();
      res.status(200);
      res.json(data);
    } catch (err) {
      next(err);
    }
  }

  static getGameById(req: Request, res: Response, next: NextFunction): void {
    try {
      const { id } = req.params;
      const game = gameController.service.findGameById(Number(id));
      res.status(200);
      res.json(game);
    } catch (err) {
      next(err);
    }
  }

  static createGame(req: Request, res: Response, next: NextFunction): void {
    try {
      const  body  = req.body;
      const newGame = gameController.service.createGame(body);
      res.status(201);
      res.json(newGame);
    } catch (err) {
      next(err);
    }
  }

  static modifyGame(req: Request, res: Response, next: NextFunction): void {
    try {
      const { id } = req.params;
      const { body } = req;
      const data = gameController.service.editGame(Number(id), body);
      res.status(200);
      res.json(data);
    } catch (err) {
      next(err);
    }
  }
}
