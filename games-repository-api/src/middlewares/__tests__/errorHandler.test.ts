import { Request, Response, NextFunction } from "express";
import { logError, errorResponse } from "../errorHandler";

describe("Error Handler Middleware", () => {
    let mockRequest: Partial<Request>;
    let mockResponse: Partial<Response>;
    let mockNext: jest.Mock;

    beforeEach(() => {
        mockRequest = {
            method: "GET",
            originalUrl: "/api/test",
        };
        mockResponse = {
            statusCode: 200,
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
        mockNext = jest.fn();
    });

    describe("logError", () => {
        it("should log the error with timestamp, method, and endpoint", () => {
            const error = new Error("Test error");
            const consoleSpy = jest.spyOn(console, "log").mockImplementation();

            logError(error, mockRequest as Request, mockResponse as Response, mockNext);

            expect(consoleSpy).toHaveBeenCalledWith(
                expect.stringMatching(/\[.*\] ERROR in GET \/api\/test: Test error/)
            );
            expect(mockNext).toHaveBeenCalledWith(error);

            consoleSpy.mockRestore();
        });
    });

    describe("errorResponse", () => {
        it("should return a JSON response with the error message", () => {
            const error = new Error("Test error");

            errorResponse(error, mockRequest as Request, mockResponse as Response, mockNext);

            expect(mockResponse.status).toHaveBeenCalledWith(500); // Default status code
            expect(mockResponse.json).toHaveBeenCalledWith({
                error: true,
                message: "ERROR: Test error",
            });
            expect(mockNext).toHaveBeenCalledWith(error);
        });

        it("should use the current status code if already set", () => {
            mockResponse.statusCode = 400;
            const error = new Error("Bad Request");

            errorResponse(error, mockRequest as Request, mockResponse as Response, mockNext);

            expect(mockResponse.status).toHaveBeenCalledWith(400);
            expect(mockResponse.json).toHaveBeenCalledWith({
                error: true,
                message: "ERROR: Bad Request",
            });
            expect(mockNext).toHaveBeenCalledWith(error);
        });
    });
});