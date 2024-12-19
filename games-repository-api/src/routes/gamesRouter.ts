
import express, { Router, Request, Response } from "express" 
import {GameService, GameServiceType} from "../services/gameService"
import { validateId,validateNewGame,validateGameChanges } from "../middlewares/middlewareGames";

export const gamesRouter:Router  = express.Router() 
const service:GameServiceType = GameService.getInstance();

gamesRouter.get("/", (req:Request , res:Response , next:any): any => {
    try{
        if(service){
            const data:object = service.findAllGames()
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
gamesRouter.get("/:id",validateId, (req:Request , res:Response, next:any): any => {

    try{
        if(service){
            const {id} =req.params;
            const game = service.findGameById(Number(id));
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

gamesRouter.post("/",validateNewGame,(req:Request , res:Response, next:any): any => {
    try{
        if(service){
        const body = req.body;
        const newGame = service.createGame(body);
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

gamesRouter.patch("/:id",validateGameChanges, (req:Request , res:Response, next:any):any  => {

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