//@ts-check
import { Game } from "../models/game";
import {
  searchAllGames,
  searchGamesById,
  saveGame,
  modifyGame,
} from "../repositories/gameRepository";
import { jsonGame } from "../models/game";

const fecha = new Date();

export const findAllGames = (): Array<Game> => {
  return searchAllGames();
};

export const findGameById = (id: number): Game => {
  return searchGamesById(id);
};

export const createGame = (game: Game): jsonGame => {
  game.date = fecha.toString();
  saveGame(game);
  const { 
    id,
    name,
    concepts,
    purpose,
    objectives, 
    materials, 
    rules,
    winner, 
    genre, 
    time,
    teams,
    level,
    related,
    thematic,
    description,
    date } = game;
    return { 
      id,
      name,
      concepts,
      purpose,
      objectives, 
      materials, 
      rules,
      winner, 
      genre, 
      time,
      teams,
      level,
      related,
      thematic,
      description,
      date }
};

export const editGame = (id: number, game: Game): jsonGame => {
  modifyGame(id, game);
  const { name,
    concepts,
    purpose,
    objectives, 
    materials, 
    rules,
    winner, 
    genre, 
    time,
    teams,
    level,
    related,
    thematic,
    description,
    date } = game;
    return { 
      id,
      name,
      concepts,
      purpose,
      objectives, 
      materials, 
      rules,
      winner, 
      genre, 
      time,
      teams,
      level,
      related,
      thematic,
      description,
      date }
};
