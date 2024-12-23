// app.test.ts
import { Request, Response } from "express";
import { logError, errorResponse, gameNotFound } from "../../middlewares/errorMiddleware";

describe("errorMiddleware Tests", () => {
    let req: Partial<Request>;
    let res: Partial<Response>;
    let next: jest.Mock;

    beforeEach(() => {
        req = {
            method: "GET",
            originalUrl: "/test-endpoint",
        };
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
        next = jest.fn();
    });

    it("should call next with object error middleware", () => {
        const error = new Error("Test Error");
        console.log = jest.fn();

        logError(error, req as Request, res as Response, next);

        expect(console.log).toHaveBeenCalledWith(
            expect.stringMatching(/\[.*\] ERROR in GET \/test-endpoint: Test Error/)
        );
        expect(next).toHaveBeenCalledWith(error);
    });

    it("should return error response with errorResponse middleware when error message is provided", () => {
        const error = new Error("Specific error message");

        errorResponse(error, req as Request, res as Response, next);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({
            error: true,
            message: "ERROR: Specific error message",
        });
        expect(next).toHaveBeenCalledWith(error);
    });

    it("should return error response with default message when error message is empty", () => {
        const error = new Error("");

        errorResponse(error, req as Request, res as Response, next);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({
            error: true,
            message: "Error inesperado",
        });
        expect(next).toHaveBeenCalledWith(error);
    });

    it("should return 404 response with gameNotFound middleware", () => {
        const notFoundError = { message: "Game not found" };

        gameNotFound(notFoundError, req as Request, res as Response, next);

        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({
            error: "",
            message: "Game not found",
        });
    });
});
