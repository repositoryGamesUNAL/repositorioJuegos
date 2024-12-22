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
    thematic, } = gameModified;
  data[gameIndex].name = name ?? data[gameIndex].name;
  data[gameIndex].concepts = concepts ?? data[gameIndex].concepts;
  data[gameIndex].purpose = purpose ?? data[gameIndex].purpose;
  data[gameIndex].objectives = objectives ?? data[gameIndex].objectives;
  data[gameIndex].materials = materials ?? data[gameIndex].materials;
  data[gameIndex].rules = rules ?? data[gameIndex].rules;
  data[gameIndex].winner = winner ?? data[gameIndex].winner;
  data[gameIndex].genre = genre ?? data[gameIndex].genre;
  data[gameIndex].teams = teams ?? data[gameIndex].teams; 
  data[gameIndex].level = level ?? data[gameIndex].level;
  data[gameIndex].related = related ?? data[gameIndex].related;
  data[gameIndex].thematic = thematic ?? data[gameIndex].thematic;
};
