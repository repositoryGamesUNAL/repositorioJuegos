// app.test.ts
import { Request, Response } from "express";
import { getAllGames, getGameById, postGame, modifyGame } from "../../middlewares/gameMiddleware";
import {
    findAllGames,
    findGameById,
    createGame,
    editGame,
} from "../../services/gameService";

jest.mock("../../services/gameService", () => ({
    findAllGames: jest.fn(),
    findGameById: jest.fn(),
    createGame: jest.fn(),
    editGame: jest.fn(),
}));

describe("Game Controller Tests", () => {
    let req: Partial<Request>;
    let res: Partial<Response>;
    let next: jest.Mock;

    beforeEach(() => {
        req = {};
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
        next = jest.fn();
    });

    it("should return all games with getAllGames", () => {
        const mockGames = [{ id: 1, name: "Chess" }];
        (findAllGames as jest.Mock).mockReturnValue(mockGames);

        getAllGames(req as Request, res as Response, next);

        expect(findAllGames).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(mockGames);
    });

    it("should return a game by ID with getGameById", () => {
        const mockGame = { id: 1, name: "Chess" };
        req.params = { id: "1" };
        (findGameById as jest.Mock).mockReturnValue(mockGame);

        getGameById(req as Request, res as Response, next);

        expect(findGameById).toHaveBeenCalledWith(1);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(mockGame);
    });

    it("should handle errors in getGameById", () => {
        const error = new Error("Game not found");
        req.params = { id: "999" };
        (findGameById as jest.Mock).mockImplementation(() => {
            throw error;
        });

        getGameById(req as Request, res as Response, next);

        expect(findGameById).toHaveBeenCalledWith(999);
        expect(next).toHaveBeenCalledWith(error);
    });

    it("should create a new game with postGame", () => {
        const mockGame = { id: 2, name: "Monopoly" };
        req.body = { name: "Monopoly" };
        (createGame as jest.Mock).mockReturnValue(mockGame);

        postGame(req as Request, res as Response, next);

        expect(createGame).toHaveBeenCalledWith(req.body);
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith(mockGame);
    });

    it("should handle errors in postGame", () => {
        const error = new Error("Invalid data");
        req.body = { name: "" };
        (createGame as jest.Mock).mockImplementation(() => {
            throw error;
        });

        postGame(req as Request, res as Response, next);

        expect(createGame).toHaveBeenCalledWith(req.body);
        expect(next).toHaveBeenCalledWith(error);
    });

    it("should modify a game with modifyGame", () => {
        const mockGame = { id: 1, name: "New Chess" };
        req.params = { id: "1" };
        req.body = { name: "New Chess" };
        (editGame as jest.Mock).mockReturnValue(mockGame);

        modifyGame(req as Request, res as Response, next);

        expect(editGame).toHaveBeenCalledWith(1, req.body);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(mockGame);
    });

    it("should handle errors in modifyGame", () => {
        const error = new Error("Game not found");
        req.params = { id: "999" };
        req.body = { name: "Invalid Game" };
        (editGame as jest.Mock).mockImplementation(() => {
            throw error;
        });

        modifyGame(req as Request, res as Response, next);

        expect(editGame).toHaveBeenCalledWith(999, req.body);
        expect(next).toHaveBeenCalledWith(error);
    });
});
