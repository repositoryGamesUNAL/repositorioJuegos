
import express, { Router, Request, Response } from "express" 
import GameService from "../services/gameService"

export const gamesRouter:Router  = express.Router() 
const service:GameService | null = GameService?.getInstance();

gamesRouter.get("/",function (req:Request , res:Response , next:any): any {
    try{
        if(service){
            const data:object = service.getGames()
            res.status(200) 
            res.json(data)
        }else{
            throw(Error("no service"))
        }
    }
    catch(err){
        next(err);
    }
})
gamesRouter.get("/:id", function (req:Request , res:Response, next:any): any {

    try{
        if(service){
            const {id} =req.params;
            const game = service.getGame(Number(id));
            res.status(200)
            res.json(game);

        }else{
            throw(Error("no service"))
        }
    }
    catch(err){
        next(err);
    }
})

gamesRouter.post("/",function (req:Request , res:Response, next:any): any {
    try{
        if(service){
        const {body} = req.body;
        const newGame = service.postGame(body);
        res.status(201);
        res.json(newGame); 
        
        }else{
            throw(Error("no service"))
        }
    }
    catch(err){
        next(err);
    }
})

gamesRouter.patch("/:id", function (req:Request , res:Response, next:any): any {

    try{
        
        if(service){
            const {id} = req.params
            const {body} = req;
            const data = service.editGame(Number(id), body);
            res.status(200);
            res.json(data);
        }else{
            throw(Error("no service"))
        }
    }
    catch(err){
        next(err);
    }
})

export default gamesRouter;