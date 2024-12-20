import { Game, jsonGame } from "../../models/game";
import { gamesRouter } from "../gamesRouter";
import { Request, Response } from "express";

describe("Games Router (without supertest)", () => {
    let mockRequest: Partial<Request>;
    let mockResponse: Partial<Response>;
    let mockJsonGame: jsonGame;
    let mockNext: jest.Mock;

    beforeEach(() => {
        mockRequest = {};
        mockResponse = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
        mockNext = jest.fn();
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

    const findRouteHandler = (path: string, method: string) => {
        const layer = gamesRouter.stack.find(
            (layer: any) => layer.route?.path === path && layer.route.methods[method]
        );
        return layer?.route?.stack[0].handle;
    };

    describe("GET /", () => {
        it("should return all games", () => {
            const service = {
                findAllGames: jest.fn().mockReturnValue([mockJsonGame]),
            };
            const routeHandler = findRouteHandler("/", "get");

            expect(routeHandler).toBeDefined();
            routeHandler!(mockRequest as Request, mockResponse as Response, mockNext);

            expect(mockResponse.status).toHaveBeenCalledWith(200);
            expect(mockResponse.json).toHaveBeenCalledWith([mockJsonGame]);
        });
    });

    describe("GET /:id", () => {
        it("should return a game by ID", () => {
            const service = {
                findGameById: jest.fn().mockReturnValue(mockJsonGame),
            };
            mockRequest.params = { id: "1" };

            const routeHandler = findRouteHandler("/:id", "get");

            expect(routeHandler).toBeDefined();
            routeHandler!(mockRequest as Request, mockResponse as Response, mockNext);

            expect(mockResponse.status).toHaveBeenCalledWith(200);
            expect(mockResponse.json).toHaveBeenCalledWith(mockJsonGame);
        });
    });

    describe("POST /", () => {
        it("should create a new game", () => {
            const service = {
                createGame: jest.fn().mockReturnValue(mockJsonGame),
            };
            mockRequest.body = mockJsonGame;

            const routeHandler = findRouteHandler("/", "post");

            expect(routeHandler).toBeDefined();
            routeHandler!(mockRequest as Request, mockResponse as Response, mockNext);

            expect(mockResponse.status).toHaveBeenCalledWith(201);
            expect(mockResponse.json).toHaveBeenCalledWith(mockJsonGame);
        });
    });

    describe("PATCH /:id", () => {
        it("should update a game", () => {
            const updatedGame = { ...mockJsonGame, name: "Updated Game" };
            const service = {
                editGame: jest.fn().mockReturnValue(updatedGame),
            };
            mockRequest.params = { id: "1" };
            mockRequest.body = { name: "Updated Game" };

            const routeHandler = findRouteHandler("/:id", "patch");

            expect(routeHandler).toBeDefined();
            routeHandler!(mockRequest as Request, mockResponse as Response, mockNext);

            expect(mockResponse.status).toHaveBeenCalledWith(200);
            expect(mockResponse.json).toHaveBeenCalledWith(updatedGame);
        });
    });
});
