import { Request, Response, NextFunction } from "express";
import { validateNewGame, validateGameChanges, validateId } from "../middlewareGames";
describe("Validators", () => {
    let mockRequest: Partial<Request>;
    let mockResponse: Partial<Response>;
    let mockNext: jest.Mock;

    beforeEach(() => {
        mockRequest = {
            body: {},
            params: {},
        };
        mockResponse = {
            status: jest.fn().mockReturnThis(),
        };
        mockNext = jest.fn();
    });

    describe("validateNewGame", () => {
        it("should return an error if a required field is missing", () => {
            mockRequest.body = {
                name: "Game Name",
                purpose: "Purpose of the game",
                thematic: ["Education"],
                // Missing "genre", "materials", "objectives", "time"
            };

            validateNewGame(mockRequest as Request, mockResponse as Response, mockNext);

            expect(mockResponse.status).toHaveBeenCalledWith(400);
            expect(mockNext).toHaveBeenCalledWith(new Error("El campo \"genre\" es requerido."));
        });

        it("should pass validation if all required fields are provided", () => {
            mockRequest.body = {
                name: "Game Name",
                purpose: "Purpose of the game",
                thematic: ["Education"],
                genre: "Strategy",
                materials: ["Board", "Cards"],
                objectives: "Learn while playing",
                time: "60 minutes",
            };

            validateNewGame(mockRequest as Request, mockResponse as Response, mockNext);

            expect(mockNext).toHaveBeenCalled();
            expect(mockResponse.status).not.toHaveBeenCalled();
        });
    });

    describe("validateGameChanges", () => {
        it("should return an error if an invalid field is provided", () => {
            mockRequest.body = {
                invalidField: "Invalid value",
            };

            validateGameChanges(mockRequest as Request, mockResponse as Response, mockNext);

            expect(mockResponse.status).toHaveBeenCalledWith(400);
            expect(mockNext).toHaveBeenCalledWith(new Error("El campo \"invalidField\" no es válido."));
        });

        it("should pass validation if only valid fields are provided", () => {
            mockRequest.body = {
                name: "Updated Game Name",
                materials: ["New Board", "New Cards"],
            };

            validateGameChanges(mockRequest as Request, mockResponse as Response, mockNext);

            expect(mockNext).toHaveBeenCalled();
            expect(mockResponse.status).not.toHaveBeenCalled();
        });
    });

    describe("validateId", () => {
        it("should return an error if id is missing", () => {
            mockRequest.params = {};

            validateId(mockRequest as Request, mockResponse as Response, mockNext);

            expect(mockResponse.status).toHaveBeenCalledWith(400);
            expect(mockNext).toHaveBeenCalledWith(new Error("El id \"undefined\" no existe."));
        });

        it("should return an error if id is not a valid number", () => {
            mockRequest.params = { id: "abc" };

            validateId(mockRequest as Request, mockResponse as Response, mockNext);

            expect(mockResponse.status).toHaveBeenCalledWith(400);
            expect(mockNext).toHaveBeenCalledWith(new Error("El id \"abc\" no es válido."));
        });

        it("should pass validation if id is valid", () => {
            mockRequest.params = { id: "123" };

            validateId(mockRequest as Request, mockResponse as Response, mockNext);

            expect(mockNext).toHaveBeenCalled();
            expect(mockResponse.status).not.toHaveBeenCalled();
        });
    });
});
