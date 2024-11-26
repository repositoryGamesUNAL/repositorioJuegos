import { Request, Response } from "express";

export class pingController {
    static getPing(req: Request, res: Response): void {
        res.send("pong")
    }
}