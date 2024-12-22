//@ts-check
import { Game } from "../models/game";
import {
  searchAllGames,
  searchGamesById,
  saveGame,
  modifyGame,
} from "../repositories/gameRepository";

const fecha = new Date();

export const findAllGames = (): Array<Game> => {
  return searchAllGames();
};

export const findGameById = (id: number): Game => {
  return searchGamesById(id);
};

export const createGame = (game: Game): void => {
  game.date = fecha.toString();
  saveGame(game);
};

export const editGame = (id: number, game: Game): void => {
  modifyGame(id, game);
};
