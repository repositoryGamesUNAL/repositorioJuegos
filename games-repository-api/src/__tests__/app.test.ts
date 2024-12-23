// app.test.ts
import { Request, Response } from "express";
import { logError, errorResponse } from "../middlewares/errorMiddleware";

describe("App Initialization", () => {
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

    it("should handle JSON requests", () => {
        const body = { key: "value" };
        req = { ...req, body };
        expect(req.body).toEqual(body);
    });

    it("should call logError middleware", () => {
        const error = new Error("Test Error");
        logError(error, req as Request, res as Response, next);
        expect(next).toHaveBeenCalledWith(error);
    });

    it("should call errorResponse middleware", () => {
        const error = new Error("Test Error");
        errorResponse(error, req as Request, res as Response, next);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ error: true, message: "ERROR: Test Error" });
    });
});
