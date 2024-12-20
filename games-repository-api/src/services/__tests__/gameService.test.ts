import { Game, jsonGame } from "../../models/game";
import GameService from "../gameService";

describe("GameService", () => {
    let service: GameService;
    let mockJsonGame: jsonGame;

    beforeEach(() => {
        service = new GameService();
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

    describe("findAllGames", () => {
        it("should return all games in storage", () => {
            service.createGame({
                name: "Test Game",
                purpose: "Educational",
                thematic: ["Strategy"],
                genre: "Board Game",
                materials: ["Board"],
                objectives: "Learn",
                time: "30 minutes",
            });

            const result = service.findAllGames();

            expect(result.status).toBe(201);
            expect(result.games).toBeDefined();
            expect(typeof result.games).toBe("object");
            expect(result.message).toBe("succesful");
        });
    });

    describe("findGameById", () => {
        it("should return a game by ID", () => {
            service.createGame({
                name: "Test Game",
                purpose: "Educational",
                thematic: ["Strategy"],
                genre: "Board Game",
                materials: ["Board"],
                objectives: "Learn",
                time: "30 minutes",
            });

            const result = service.findGameById(1);

            expect(result.status).toBe(201);
            expect(result.games).toBeDefined();
            expect((result.games as jsonGame).name).toBe("Test Game");
            expect(result.message).toBe("succesfull");
        });

        it("should throw an error if the ID does not exist", () => {
            expect(() => service.findGameById(99)).toThrow("id doesn't exist");
        });
    });

    describe("createGame", () => {
        it("should create a new game", () => {
            const result = service.createGame({
                name: "Test Game",
                purpose: "Educational",
                thematic: ["Strategy"],
                genre: "Board Game",
                materials: ["Board"],
                objectives: "Learn",
                time: "30 minutes",
            });

            expect(result.status).toBe(201);
            expect(result.games).toBeDefined();
            expect((result.games as jsonGame).name).toBe("Test Game");
            expect(result.message).toBe("succesfull");
        });

        it("should throw an error if data is missing", () => {
            expect(() =>
                service.createGame({
                    name: "",
                    purpose: "",
                    thematic: [],
                    genre: "",
                    materials: [],
                    objectives: "",
                    time: "",
                })
            ).toThrow("bad request");
        });
    });

    describe("editGame", () => {
        it("should edit an existing game", () => {
            service.createGame({
                name: "Test Game",
                purpose: "Educational",
                thematic: ["Strategy"],
                genre: "Board Game",
                materials: ["Board"],
                objectives: "Learn",
                time: "30 minutes",
            });

            const result = service.editGame(1, { name: "Updated Game" });

            expect(result.status).toBe(201);
            expect(result.games).toBeDefined();
            expect((result.games as jsonGame).name).toBe("Updated Game");
            expect(result.message).toBe("succesfull");
        });

        it("should throw an error if the ID does not exist", () => {
            expect(() => service.editGame(99, { name: "Nonexistent Game" })).toThrow("id not found");
        });
    });
});
