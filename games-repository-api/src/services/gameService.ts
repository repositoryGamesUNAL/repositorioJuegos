//@ts-check
import Game from "../models/game"

export default class GameService { 
    private static _instance: null | GameService = null; 
    private _storage: Game[] = [] ;  

    constructor(){
    }

    static getInstance(): GameService | null {

        //see if any instance exist, if not then create it and return it 
        if(!this._instance){
            this._instance = new GameService();            
            return this._instance;
        }
        return null;
    }

    getGames(): object{
        let games:object = {};
        
        //defines the game object types
        let game:{
            id:number,
            name:string, 
            date:string, 
            purpose:string, 
            thematic:object, 
            genre:string, 
            materials:object, 
            objectives:string, 
            time:string} =
            {
            "id" : 0,
            "name" : "",
            "date" : "",
            "purpose" : "",
            "thematic" :{},
            "genre": "",
            "materials": {},
            "objectives" : "",
            "time": ""
        };
        for(let instance  of this._storage){

            //gives the game variable its values 
            game.id = instance.Id;
            game.name = instance.Name;
            game.date = instance.Date;
            game.purpose = instance.Purpose;
            game.thematic = instance.Thematic;
            game.genre = instance.Genre;
            game.materials = instance.Materials;
            game.objectives = instance.Objectives;
            game.time = instance.Time;


            //insert game into games
            games = {
                ...games,
                game
            }; 
        }
        const res: {status: number , games:object, message:string} = {
            "status": 0,
            "games": {},
            "message": ""
        }

        res.status = 201;
        res.games = games;
    
        return res;
    }

    getGame(id:number): object{
        let game:Game | null = null;
        const res:{status: number, game:object, message:string} = {
            "status": 0,
            "game": {},
            "message" : ""
        }
        for(let instance of this._storage) if( instance.Id === id) game = instance ;
        if(game){
            let instance:{id:number , name:string, date:string, descriptioon:string} = {

                "id" : game.Id,
                "name":game.Name,
                "date" : game.Date,
                "descriptioon" : game.Purpose
            };

            res.status = 201;
            res.game = game; 

        }else{
            res.status = 400;
            res.message = " the id doesn't exist";
            
        }
        return res;
    }

postGame(data:{name:string, description:string, date:string}): object
{
    const res:{status:number, game:object} = 
    {
        "status" : 0,
        "game" : {},
    }
    try{
        //take out the data
        const game:{id:number,name:string, description:string, date:string}= {
            id:this._storage.length + 1,
            name:data.name,
            description:data.description,
            date:data.date
        }
        
        if(!data.name || !data.description || !data.date) throw(Error("not enough data "));

        //create new game 
        const newGame:Game = new Game({
            id: game.id,
            name:game.name, 
            date:game.date, 
            purpose:game.description
        })

        //get it into the storage
        this._storage.push(newGame);
        res.status = 201;
        res.game = game;
    }
    catch(err){
        throw("bad request")
    }
    return res;
}

    editGame( id:number, changes:{name:string, description:string, fecha:string}): object
    {
        let game : Game|null  = null; 

        for(let i = 0; i<this._storage.length; i++){
            if(this._storage.at(i)?.Id == id) game = this._storage[i];
        }

        if(game)
            {
            if(changes["name"]) game.Name = changes["name"];
            if(changes["description"]) game.Purpose = changes["description"];
            if(changes["fecha"]) game.Date = changes["fecha"];
            return {
                "status": "201",
                "game":{
                    "id" : `${game.Id}`,
                    "date" : `${game.Date}`,
                    "description" : `${game.Purpose}`
                    }
                
                    
            };
        }
        else{
            throw("id not found");
        }
    }
}