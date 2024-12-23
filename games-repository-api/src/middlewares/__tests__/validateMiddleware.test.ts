// validateMiddleware.test.ts
import { Request, Response } from "express";
import {
    validateNewGame,
    validateGameChanges,
    validateId,
} from "../../middlewares/validateMiddleware";

describe("Validation Middlewares", () => {
    let req: Partial<Request>;
    let res: Partial<Response>;
    let next: jest.Mock;

    beforeEach(() => {
        req = {
            body: {},
            params: {},
        };
        res = {
            status: jest.fn().mockReturnThis(),
        };
        next = jest.fn();
    });

    describe("validateNewGame", () => {
        it("should call next with an error if a required field is missing", () => {
            req.body = { name: "Test Game" }; // Missing other required fields

            validateNewGame(req as Request, res as Response, next);

            expect(res.status).toHaveBeenCalledWith(400);
            expect(next).toHaveBeenCalledWith(expect.any(Error));
            expect(next.mock.calls[0][0].message).toContain("es requerido");
        });

        it("should call next without errors if all required fields are present and valid", () => {
            req.body = {
                name: "Test Game",
                concepts: "concept",
                purpose: "Test purpose",
                winner: "Test winner",
                genre: "genre",
                time: "time",
                level: "level",
                objectives: ["Objective 1"],
                thematic: ["Theme 1"],
                materials: ["Material 1"],
                rules: ["Rule 1"],
                teams: { min: 1, max: 4 },
                related: [{ description: "desc", url: "http://example.com" }],
            };

            validateNewGame(req as Request, res as Response, next);

            expect(next).toHaveBeenCalledWith();
        });

        it("should call next with an error if 'teams.min' is not a number", () => {
            req.body = {
                name: "Test Game",
                concepts: "concept",
                purpose: "purpose",
                winner: "winner",
                genre: "genre",
                time: "time",
                level: "level",
                objectives: ["Objective 1"],
                thematic: ["Theme 1"],
                materials: ["Material 1"],
                rules: ["Rule 1"],
                teams: { min: "not-a-number", max: 4 },
                related: [{ description: "desc", url: "http://example.com" }],
            };

            validateNewGame(req as Request, res as Response, next);

            expect(res.status).toHaveBeenCalledWith(400);
            expect(next).toHaveBeenCalledWith(expect.any(Error));
            expect(next.mock.calls[0][0].message).toContain("teams.min debe ser number");
        });

        it("should call next with an error if 'teams.max' is not a number", () => {
            req.body = {
                name: "Test Game",
                concepts: "concept",
                purpose: "purpose",
                winner: "winner",
                genre: "genre",
                time: "time",
                level: "level",
                objectives: ["Objective 1"],
                thematic: ["Theme 1"],
                materials: ["Material 1"],
                rules: ["Rule 1"],
                teams: { min: 1, max: "not-a-number" }, // `min` is valid
                related: [{ description: "desc", url: "http://example.com" }],
            };
        
            validateNewGame(req as Request, res as Response, next);
        
            expect(res.status).toHaveBeenCalledWith(400);
            expect(next).toHaveBeenCalledWith(expect.any(Error));
            expect(next.mock.calls[0][0].message).toContain("teams.max debe ser number");
        });        
    });

    describe("validateGameChanges", () => {
        it("should call next with an error if a field is invalid", () => {
            req.body = { invalidField: "Invalid value" };

            validateGameChanges(req as Request, res as Response, next);

            expect(res.status).toHaveBeenCalledWith(400);
            expect(next).toHaveBeenCalledWith(expect.any(Error));
            expect(next.mock.calls[0][0].message).toContain("no es válido");
        });

        it("should call next without errors if all fields are valid", () => {
            req.body = {
                name: "Updated Game",
                concepts: "Updated concept",
                purpose: "Updated purpose",
                rules: ["Updated Rule"],
            };

            validateGameChanges(req as Request, res as Response, next);

            expect(next).toHaveBeenCalledWith();
        });
    });

    describe("validateId", () => {
        it("should call next with an error if the id is invalid", () => {
            req.params = { id: "invalid" };

            validateId(req as Request, res as Response, next);

            expect(res.status).toHaveBeenCalledWith(400);
            expect(next).toHaveBeenCalledWith(expect.any(Error));
            expect(next.mock.calls[0][0].message).toContain("no es válido");
        });

        it("should call next without errors if the id is valid", () => {
            req.params = { id: "123" };

            validateId(req as Request, res as Response, next);

            expect(next).toHaveBeenCalledWith();
        });
        it("should call next with an error if 'related.description' is not a string", () => {
            req.body = {
                name: "Test Game",
                concepts: "concept",
                purpose: "purpose",
                winner: "winner",
                genre: "genre",
                time: "time",
                level: "level",
                objectives: ["Objective 1"],
                thematic: ["Theme 1"],
                materials: ["Material 1"],
                rules: ["Rule 1"],
                teams: { min: 1, max: 5}, 
                related: [{ description: 23456, url: "http://example.com" }],
            };

            validateNewGame(req as Request, res as Response, next);

            expect(res.status).toHaveBeenCalledWith(400);
            expect(next).toHaveBeenCalledWith(expect.any(Error));
            expect(next.mock.calls[0][0].message).toContain("related.description debe ser string");
        });

        it("should call next with an error if 'related.url' is not a string", () => {
            req.body = {
                name: "Test Game",
                concepts: "concept",
                purpose: "purpose",
                winner: "winner",
                genre: "genre",
                time: "time",
                level: "level",
                objectives: ["Objective 1"],
                thematic: ["Theme 1"],
                materials: ["Material 1"],
                rules: ["Rule 1"],
                teams: { min: 1, max: 5}, 
                related: [{ description: "desc", url: null }],
            };

            validateNewGame(req as Request, res as Response, next);

            expect(res.status).toHaveBeenCalledWith(400);
            expect(next).toHaveBeenCalledWith(expect.any(Error));
            expect(next.mock.calls[0][0].message).toContain("related.url debe ser string");
        });
    });

    describe("validateGameChanges", () => {
        it("should call next with an error if a field is invalid", () => {
            req.body = { invalidField: "Invalid value" };

            validateGameChanges(req as Request, res as Response, next);

            expect(res.status).toHaveBeenCalledWith(400);
            expect(next).toHaveBeenCalledWith(expect.any(Error));
            expect(next.mock.calls[0][0].message).toContain("no es válido");
        });

        it("should call next without errors if all fields are valid", () => {
            req.body = {
                name: "Updated Game",
                concepts: "Updated concept",
                purpose: "Updated purpose",
                rules: ["Updated Rule"],
            };

            validateGameChanges(req as Request, res as Response, next);

            expect(next).toHaveBeenCalledWith();
        });
    });

    describe("validateId", () => {
        it("should call next with an error if the id is invalid", () => {
            req.params = { id: "invalid" };

            validateId(req as Request, res as Response, next);

            expect(res.status).toHaveBeenCalledWith(400);
            expect(next).toHaveBeenCalledWith(expect.any(Error));
            expect(next.mock.calls[0][0].message).toContain("no es válido");
        });

        it("should call next without errors if the id is valid", () => {
            req.params = { id: "123" };

            validateId(req as Request, res as Response, next);

            expect(next).toHaveBeenCalledWith();
        });
    });
});
