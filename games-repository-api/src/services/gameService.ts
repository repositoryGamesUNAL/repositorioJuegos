//@ts-check
import { Game, jsonGame, newGame, changesOfGame, GameType } from "../models/game"

const fecha = new Date().getTime
export type jsonRequestReturn = {status:number, games: object, message:string};
export class GameService {
    private static _instance: GameService;
    private _storage: Game[];

    constructor() {
        this._storage = [];
    }

    static getInstance(): GameService {
        //see if any instance exist, if not then create it and return it 
        if (this._instance == null){
            this._instance == new GameService();
        }
        return this._instance;
    }

    findAllGames(): jsonRequestReturn {
        const ans: jsonRequestReturn = {
            status:0,
            games:{},
            message:""
        };

        //defines the game object types
        const game: jsonGame = {
            id: 0,
            name: "",
            date: "",
            purpose: "",
            thematic: [],
            genre: "",
            materials: [],
            objectives: "",
            time: ""
        };
        for (let instance of this._storage) {
            const {id, name, date, purpose, thematic, genre, materials, objectives, time} = instance;

            //gives the game variable its values 
            game.id= id;
            game.name= name;
            game.date= date;
            game.purpose= purpose;
            game.thematic= thematic;
            game.genre= genre;
            game.materials= materials;
            game.objectives= objectives;
            game.time= time;

            //insert game into totalGames
            ans.games = 
            {
                ...ans.games,
                game
            };
        }
        ans.status = 201;
        ans.message = "succesful";
        return ans;
    }

    findGameById(id: number): jsonRequestReturn {
        let game: GameType = null;
        const res: jsonRequestReturn = {
            "status": 0,
            "games": {},
            message: ""
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
            res.games = game;
            res.message = "succesfull"
            return res;

        } else {
            throw (new Error("id doesn't exist"));
        }
    }

    createGame(data: newGame): jsonRequestReturn {
        console.log(data)
        const res:jsonRequestReturn =
        {
            status: 0,
            games: {},
            message: ""
        }
        try {
            //verify if there is any missing argument 
            for (let atrib in data) if (!data[atrib as keyof newGame]) throw (new Error("not enough data"));

            //obtain the current hour of creation
            const now: Date = new Date();
            const options: object = { timeZone: 'America/Bogota', day: '2-digit', month: '2-digit', year: 'numeric' };
            const formattedDate = new Intl.DateTimeFormat('en-GB', options).format(now);

            const id:number = this._storage.length + 1; 
            const {name , purpose, thematic, genre, materials, objectives, time} = data;

            //create new game 
            const newGame: Game = new Game({
                id: id,
                name: name,
                date: formattedDate,
                purpose: purpose,
                thematic: thematic,
                genre: genre,
                materials: materials,
                objectives: objectives,
                time: time
            })

            //get it into the storage
            this._storage.push(newGame);
            res.status = 201;
            res.games = {
                id: id,
                ...data
            };
            res.message = "succesfull";
        }
        catch (err) {
            throw (new Error("bad request" + err));
        }
        return res;
    }

    editGame(id: number, changes: changesOfGame): jsonRequestReturn {
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
                            game.thematic = <string[]>changes[key as keyof changesOfGame];
                            break;
                        case 'genre':
                            game.genre = <string>changes[key as keyof changesOfGame];
                            break;
                        case 'materials':
                            game.materials = <string[]>changes[key as keyof changesOfGame];
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

            const ans: jsonRequestReturn = {   
                status: 201,
                games: {
                    id: `${id}`,
                    name: `${name}`,
                    date: `${date}`,
                    purpose: `${purpose}`,
                    thematic: `${thematic}`,
                    genre: `${genre}`,
                    materials: `${materials}`,
                    objectives: `${objectives}`,
                    time: `${time}`
                },
                message: "succesfull"
            }
            return ans;
        }
        else {
            throw(new Error("id not found"));
        }
    }
}
export default GameService;