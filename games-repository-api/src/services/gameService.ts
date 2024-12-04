//@ts-check
import { Game, jsonGame, newGame, changesOfGame, GameType } from "../models/game"

const fecha = new Date().getTime
export type GameServiceType = GameService | null;
export class GameService {
    private static _instance: GameServiceType;
    private _storage: Game[];

    constructor() {
        this._storage = [];
    }

    static getInstance(): GameServiceType {

        //see if any instance exist, if not then create it and return it 
        if (!this._instance) {
            this._instance = new GameService();
            return this._instance;
        }
        return null;
    }

    findAllGames(): object {
        let games: object = {};

        //defines the game object types
        let game: jsonGame = {
            id: 0,
            name: "",
            date: "",
            purpose: "",
            thematic: {},
            genre: "",
            materials: {},
            objectives: "",
            time: ""
        };
        for (let instance of this._storage) {

            //gives the game variable its values 
            game.id = instance.id;
            game.name = instance.name;
            game.date = instance.date;
            game.purpose = instance.purpose;
            game.thematic = instance.thematic;
            game.genre = instance.genre;
            game.materials = instance.materials;
            game.objectives = instance.objectives;
            game.time = instance.time;

            //insert game into games
            games = {
                ...games,
                game
            };
        }
        const res: { status: number, data: object } = {
            "status": 0,
            "data": {},

        }

        res.status = 201;
        res.data = games;

        return res;
    }

    findGameById(id: number): object {
        let game: GameType = null;
        const res: { status: number, data: object } = {
            "status": 0,
            "data": {},
        }
        for (let instance of this._storage) if (instance.id === id) game = instance;
        if (game) {
            const {id, name, date, purpose, thematic, genre, materials, objectives, time} = game;
            let instance: jsonGame = {
                id: id,
                name: name,
                date: date,
                purpose: purpose,
                thematic: thematic,
                genre: genre,
                materials: materials,
                objectives: objectives,
                time: time
            };

            res.status = 201;
            res.data = game;
            return res;

        } else {
            throw (new Error("id doesn't exist"));
        }
    }

    createGame(data: newGame): object {
        const res: { status: number, data: object } =
        {
            "status": 0,
            "data": {},
        }
        try {
            //verify if there is any missing argument 
            for (let atrib in data) if (data[atrib as keyof newGame]) throw (new Error("not enough data"));

            //obtain the current hour of creation
            const now: Date = new Date();
            const options: object = { timeZone: 'America/Bogota', day: '2-digit', month: '2-digit', year: 'numeric' };
            const formattedDate = new Intl.DateTimeFormat('en-GB', options).format(now);


            //create new game 
            const newGame: Game = new Game({
                id: this._storage.length + 1,
                name: data.name,
                date: formattedDate,
                purpose: data.purpose,
                thematic: data.thematic,
                genre: data.genre,
                materials: data.materials,
                objectives: data.objectives,
                time: data.time
            })

            //get it into the storage
            this._storage.push(newGame);
            res.status = 201;
            res.data = {
                id: this._storage.length,
                ...data
            };
        }
        catch (err) {
            throw (new Error("bad request"));
        }
        return res;
    }

    editGame(id: number, changes: changesOfGame): object {
        let game: GameType = null;

        for (let i = 0; i < this._storage.length; i++) {
            if (this._storage[i].id == id) game = this._storage[i];
        }
        if (game) {
            for (const key in changes) {
                if (changes[key as keyof changesOfGame]) {
                    // Using a type check to ensure we are setting valid keys
                    switch (key) {
                        case 'name':
                            game.name = <string>changes[key as keyof changesOfGame];
                            break;
                        case 'purpose':
                            game.purpose = <string>changes[key as keyof changesOfGame];
                            break;
                        case 'thematic':
                            game.thematic = <object>changes[key as keyof changesOfGame];
                            break;
                        case 'genre':
                            game.genre = <string>changes[key as keyof changesOfGame];
                            break;
                        case 'materials':
                            game.materials = <object>changes[key as keyof changesOfGame];
                            break;
                        case 'objectives':
                            game.objectives = <string>changes[key as keyof changesOfGame];
                            break;
                        case 'time':
                            game.time = <string>changes[key as keyof changesOfGame];
                            break;
                        default:
                            break; // If key is not valid for this class, do nothing
                    }
                }
            }
            if (changes["name"]) game.name = changes["name"];
            const {id, name, date, purpose, thematic, genre, materials, objectives, time} = game;
            return {
                status: "201",
                data: {
                    id: `${id}`,
                    name: `${name}`,
                    date: `${date}`,
                    purpose: `${purpose}`,
                    thematic: `${thematic}`,
                    genre: `${genre}`,
                    materials: `${materials}`,
                    objectives: `${objectives}`,
                    time: `${time}`
                }
            };
        }
        else {
            throw(new Error("id not found"));
        }
    }
}
export default GameService;