// pingController.test.ts
import { Request, Response } from "express";
import { getPing } from "../../middlewares/pingMiddleware";

describe("Ping Controller", () => {
    let req: Partial<Request>;
    let res: Partial<Response>;

    beforeEach(() => {
        req = {};
        res = {
            send: jest.fn(),
        };
    });

    it("should respond with 'pong'", () => {
        getPing(req as Request, res as Response);

        expect(res.send).toHaveBeenCalledWith("pong");
    });
});
