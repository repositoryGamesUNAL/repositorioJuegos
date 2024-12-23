import {
    findAllGames,
    findGameById,
    createGame,
    editGame,
} from "../../services/gameService";
import {
    searchAllGames,
    searchGamesById,
    saveGame,
    modifyGame,
} from "../../repositories/gameRepository";
import { Game, jsonGame } from "../../models/game";

jest.mock("../../repositories/gameRepository", () => ({
    searchAllGames: jest.fn(),
    searchGamesById: jest.fn(),
    saveGame: jest.fn(),
    modifyGame: jest.fn(),
}));

describe("Game Service", () => {
    const mockJsonGame: jsonGame = {
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
    };

    const mockGame = new Game(mockJsonGame);

    it("should return all games with findAllGames", () => {
        const games = [mockGame];
        (searchAllGames as jest.Mock).mockReturnValue(games);

        const result = findAllGames();

        expect(searchAllGames).toHaveBeenCalled();
        expect(result).toEqual(games);
    });

    it("should return a game by ID with findGameById", () => {
        (searchGamesById as jest.Mock).mockReturnValue(mockGame);

        const result = findGameById(1);

        expect(searchGamesById).toHaveBeenCalledWith(1);
        expect(result).toEqual(mockGame);
    });

    it("should create a new game with createGame", () => {
        const newJsonGame: jsonGame = {
            ...mockJsonGame,
            id: 0, // ID will be assigned during saving
            date: "", // Date will be set during creation
        };

        const newGame = new Game(newJsonGame);
        createGame(newGame);

        expect(newGame.date).toBeDefined();
        expect(saveGame).toHaveBeenCalledWith(newGame);
    });

    it("should edit a game with editGame", () => {
        const updatedGame: jsonGame = {
            ...mockJsonGame,
            name: "Updated Game",
        };

        const updatedGameInstance = new Game(updatedGame);

        editGame(1, updatedGameInstance);

        expect(modifyGame).toHaveBeenCalledWith(1, updatedGameInstance);
    });
});
