// gameReturnTypes.test.ts
import { Game } from "../../models/game";
import { allGamesReturn, gameReturn } from "../../utils/responseTypes";

describe("Response Types", () => {
    const mockGame: Game = new Game({
        id: 1,
        name: "Test Game",
        concepts: "Test Concepts",
        purpose: "Test Purpose",
        objectives: ["Objective 1"],
        materials: ["Material 1"],
        rules: ["Rule 1"],
        winner: "Test Winner",
        genre: "Test Genre",
        time: "30 mins",
        teams: { min: 2, max: 4 },
        level: "Easy",
        related: [{ description: "Test Description", url: "http://example.com" }],
        date: "2024-12-22",
        thematic: ["Thematic 1"],
    });

    it("should correctly define allGamesReturn type", () => {
        const response: allGamesReturn = {
            status: 200,
            games: [mockGame],
            message: "Success",
        };

        expect(response.status).toBe(200);
        expect(response.games).toHaveLength(1);
        expect(response.games[0]).toBeInstanceOf(Game);
        expect(response.message).toBe("Success");
    });

    it("should correctly define gameReturn type with a game", () => {
        const response: gameReturn = {
            status: 200,
            game: mockGame,
            message: "Success",
        };

        expect(response.status).toBe(200);
        expect(response.game).toBeInstanceOf(Game);
        expect(response.message).toBe("Success");
    });

    it("should correctly define gameReturn type with undefined game", () => {
        const response: gameReturn = {
            status: 404,
            game: undefined,
            message: "Game not found",
        };

        expect(response.status).toBe(404);
        expect(response.game).toBeUndefined();
        expect(response.message).toBe("Game not found");
    });
});
