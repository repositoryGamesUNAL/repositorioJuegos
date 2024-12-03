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
            const res: {status: number , data:object} = {
            "status": 0,
            "data": {},
            
        }

        res.status = 201;
        res.data = games;

        return res;
    }

    getGame(id:number): object{
        let game:Game | null = null;
        const res:{status: number, data:object} = {
            "status": 0,
            "data": {},
        }
        for(let instance of this._storage) if( instance.Id === id) game = instance ;
        if(game){
            let instance:{
                id:number, 
                name:string, 
                date:string, 
                descriptioon:string} = {

                "id" : game.Id,
                "name":game.Name,
                "date" : game.Date,
                "descriptioon" : game.Purpose
            };

            res.status = 201;
            res.data = game; 
            return res;

        }else{
            throw(new Error("id doesn't exist")); 
        }
    }

    postGame(data:{name:string, 
        date:string, 
        purpose:string, 
        thematic:object, 
        genre:string, 
        materials:object, 
        objectives:string, 
        time:string}): object
    {
        const res:{status:number, data:object} = 
        {
            "status" : 0,
            "data" : {},
        }
        try{
            //take out the data
            const game:{id:number,
                name:string, 
                date:string, 
                purpose:string, 
                thematic:object, 
                genre:string, 
                materials:object, 
                objectives:string, 
                time:string}= {
                id:this._storage.length + 1,
                name:data.name,
                date:data.date,
                purpose:data.purpose,
                thematic: data.thematic,
                genre:data.genre,
                materials:data.materials,
                objectives:data.objectives,
                time:data.time
            }
            
            if(!data.name || !data.purpose || !data.date || !data.thematic || !data.genre || !data.materials || !data.objectives || !data.time) throw(new Error("not enough data"));

            //create new game 
            const newGame:Game = new Game({
                id : game.id,
                name : game.name,
                date : game.date,
                purpose : game.purpose,
                thematic : game.thematic,
                genre : game.genre,
                materials : game.materials,
                objectives : game.objectives,
                time : game.time
            })

            //get it into the storage
            this._storage.push(newGame);
            res.status = 201;
            res.data = game;
        }
        catch(err){
            throw(new Error("bad request"));
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
                "data":{
                    "id" : `${game.Id}`,
                    "date" : `${game.Date}`,
                    "description" : `${game.Purpose}`
                    }   
            };
        }
        else{
            throw(new Error("id not found"));
        }
    }
}