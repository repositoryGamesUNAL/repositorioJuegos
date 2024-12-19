import { Game } from "../models/game";

const data: Array<Game> = [];

export const searchAllGames = () => {
  return data;
};

export const searchGamesById = (id: number): Game => {
  const game = data.find((game: Game) => game.id === id);
  if (!game) {
    throw new Error(`resourse with id ${id} doesn't found`);
  }
  return game;
};

export const saveGame = (game: Game): void => {
  game.id = data.length + 1;
  data.push(game);
};

export const modifyGame = (id: number, gameModified: Game): void => {
  const gameIndex = data.findIndex((game: Game) => game.id === id);
  if (gameIndex === -1) {
    throw new Error(`resourse with id ${id} doesn't found`);
  }
  const { name, purpose, thematic, genre, materials, objectives, time } =
    gameModified;
  data[gameIndex].name = name;
  data[gameIndex].purpose = purpose;
  data[gameIndex].thematic = thematic;
  data[gameIndex].genre = genre;
  data[gameIndex].materials = materials;
  data[gameIndex].objectives = objectives;
  data[gameIndex].time = time;
};
