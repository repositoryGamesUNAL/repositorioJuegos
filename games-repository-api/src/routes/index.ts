import { Application, Router} from "express"
import pingRouter from "./ping"
import gamesRouter from "../routes/gamesRouter"

export default function initializeRoutes(app:Application){
    /*
    the iea is to use this function in the future to initialize all the routers that we create in routes folder
    example: 
        router.use(*imported router*)
    */
    const router:Router = Router();//router for app initial route
   app.use("/", router);
   router.use("/games", gamesRouter )
   router.use(pingRouter)
}