import {Game} from "../models/game"
export type allGamesReturn = {status:number, games: Array<Game>, message:string};
export type gameReturn = {status:number, game: Game | undefined, message:string};