import { Game, jsonGame } from "../models/game";
import GameService from "../services/gameService";
import { Request, Response } from "express";
import app from "../app";

class CustomError extends Error {
    constructor(message: string, public statusCode: number) {
        super(message);
        this.name = "CustomError";
    }
}

describe("App Initialization and Middleware", () => {
    let mockRequest: Partial<Request>;
    let mockResponse: Partial<Response>;
    let mockNext: jest.Mock;

    beforeEach(() => {
        mockRequest = {};
        mockResponse = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
            send: jest.fn(),
        };
        mockNext = jest.fn();
    });

    it("should initialize the app and respond to a valid route", () => {
        const pingHandler = app._router.stack.find(
            (layer: any) => layer.route?.path === "/ping" && layer.route.methods.get
        )?.route.stack[0].handle;

        expect(pingHandler).toBeDefined();
        pingHandler!(mockRequest as Request, mockResponse as Response, mockNext);

        expect(mockResponse.status).not.toHaveBeenCalledWith(400);
        expect(mockResponse.send).toHaveBeenCalledWith("pong");
    });

    it("should handle a route that does not exist", () => {
        const notFoundHandler = app._router.stack.find(
            (layer: any) => layer.route?.path === "/nonexistent" && layer.route.methods.get
        );

        expect(notFoundHandler).toBeUndefined();
    });

    it("should trigger logError middleware on an error", () => {
        const errorHandler = app._router.stack.find(
            (layer: any) => layer.name === "logError"
        )?.handle;

        expect(errorHandler).toBeDefined();
        const error = new CustomError("Test Error", 500);
        errorHandler!(error, mockRequest as Request, mockResponse as Response, mockNext);

        expect(mockResponse.status).toHaveBeenCalledWith(500);
        expect(mockResponse.json).toHaveBeenCalledWith({
            error: true,
            message: "ERROR: Test Error",
        });
    });
});

describe("GameService", () => {
    let service: GameService;
    let mockJsonGame: jsonGame;

    beforeEach(() => {
        service = new GameService();
        mockJsonGame = {
            id: 1,
            date: "2024-12-19",
            name: "Test Game",
            purpose: "Educational",
            thematic: ["Strategy", "Learning"],
            genre: "Board Game",
            materials: ["Board", "Dice"],
            objectives: "Teach collaboration",
            time: "30 minutes",
        };
    });

    describe("findAllGames", () => {
        it("should return all games in storage", () => {
            service.createGame({
                name: "Test Game",
                purpose: "Educational",
                thematic: ["Strategy"],
                genre: "Board Game",
                materials: ["Board"],
                objectives: "Learn",
                time: "30 minutes",
            });

            const result = service.findAllGames();

            expect(result.status).toBe(201);
            expect(result.games).toBeDefined();
            expect(typeof result.games).toBe("object");
            expect(result.message).toBe("succesful");
        });
    });

    describe("findGameById", () => {
        it("should return a game by ID", () => {
            service.createGame({
                name: "Test Game",
                purpose: "Educational",
                thematic: ["Strategy"],
                genre: "Board Game",
                materials: ["Board"],
                objectives: "Learn",
                time: "30 minutes",
            });

            const result = service.findGameById(1);

            expect(result.status).toBe(201);
            expect(result.games).toBeDefined();
            expect((result.games as jsonGame).name).toBe("Test Game");
            expect(result.message).toBe("succesfull");
        });

        it("should throw a CustomError if the ID does not exist", () => {
            expect(() => service.findGameById(99)).toThrow(CustomError);
            expect(() => service.findGameById(99)).toThrow("id doesn't exist");
        });
    });

    describe("createGame", () => {
        it("should create a new game", () => {
            const result = service.createGame({
                name: "Test Game",
                purpose: "Educational",
                thematic: ["Strategy"],
                genre: "Board Game",
                materials: ["Board"],
                objectives: "Learn",
                time: "30 minutes",
            });

            expect(result.status).toBe(201);
            expect(result.games).toBeDefined();
            expect((result.games as jsonGame).name).toBe("Test Game");
            expect(result.message).toBe("succesfull");
        });

        it("should throw a CustomError if data is missing", () => {
            expect(() =>
                service.createGame({
                    name: "",
                    purpose: "",
                    thematic: [],
                    genre: "",
                    materials: [],
                    objectives: "",
                    time: "",
                })
            ).toThrow(CustomError);
            expect(() =>
                service.createGame({
                    name: "",
                    purpose: "",
                    thematic: [],
                    genre: "",
                    materials: [],
                    objectives: "",
                    time: "",
                })
            ).toThrow("bad request");
        });
    });

    describe("editGame", () => {
        it("should edit an existing game", () => {
            service.createGame({
                name: "Test Game",
                purpose: "Educational",
                thematic: ["Strategy"],
                genre: "Board Game",
                materials: ["Board"],
                objectives: "Learn",
                time: "30 minutes",
            });

            const result = service.editGame(1, { name: "Updated Game" });

            expect(result.status).toBe(201);
            expect(result.games).toBeDefined();
            expect((result.games as jsonGame).name).toBe("Updated Game");
            expect(result.message).toBe("succesfull");
        });

        it("should throw a CustomError if the ID does not exist", () => {
            expect(() => service.editGame(99, { name: "Nonexistent Game" })).toThrow(CustomError);
            expect(() => service.editGame(99, { name: "Nonexistent Game" })).toThrow("id not found");
        });
    });
});
