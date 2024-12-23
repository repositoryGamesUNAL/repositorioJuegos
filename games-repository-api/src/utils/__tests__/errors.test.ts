// customError.test.ts
import { CustomError } from "../errors";

describe("CustomError", () => {
    it("should create a CustomError with a message and statusCode", () => {
        const message = "Test error message";
        const statusCode = 404;

        const error = new CustomError(message, statusCode);

        expect(error).toBeInstanceOf(Error);
        expect(error).toBeInstanceOf(CustomError);
        expect(error.message).toBe(message);
        expect(error.statusCode).toBe(statusCode);
        expect(error.name).toBe("CustomError");
    });

    it("should preserve the stack trace", () => {
        const message = "Another test error message";
        const statusCode = 500;

        const error = new CustomError(message, statusCode);

        expect(error.stack).toContain("CustomError");
    });

    it("should allow setting a custom name", () => {
        const error = new CustomError("Custom message", 400);
        error.name = "AnotherError";

        expect(error.name).toBe("AnotherError");
    });
});
