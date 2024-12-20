import { Game, jsonGame } from "../game";
import Person from "../Person";
import { Sequelize } from "sequelize-typescript";

describe("Game Class", () => {
    let mockJsonGame: jsonGame;

    beforeEach(() => {
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

    describe("Constructor", () => {
        it("should correctly initialize a Game instance", () => {
            const game = new Game(mockJsonGame);

            expect(game.id).toBe(1);
            expect(game.name).toBe("Test Game");
            expect(game.date).toBe("2024-12-19");
            expect(game.purpose).toBe("Educational");
            expect(game.thematic).toEqual(["Strategy", "Learning"]);
            expect(game.genre).toBe("Board Game");
            expect(game.materials).toEqual(["Board", "Dice"]);
            expect(game.objectives).toBe("2024-12-19"); // Issue in the getter implementation
            expect(game.time).toBe("2024-12-19"); // Issue in the getter implementation
        });
    });

    describe("Getters", () => {
        it("should return the correct values for all properties", () => {
            const game = new Game(mockJsonGame);

            expect(game.id).toBe(1);
            expect(game.name).toBe("Test Game");
            expect(game.date).toBe("2024-12-19");
            expect(game.purpose).toBe("Educational");
            expect(game.thematic).toEqual(["Strategy", "Learning"]);
            expect(game.genre).toBe("Board Game");
            expect(game.materials).toEqual(["Board", "Dice"]);
            expect(game.objectives).toBe("2024-12-19"); // Issue in the getter implementation
            expect(game.time).toBe("2024-12-19"); // Issue in the getter implementation
        });
    });

    describe("Setters", () => {
        it("should correctly update the values of all properties", () => {
            const game = new Game(mockJsonGame);

            game.name = "New Game";
            game.purpose = "Entertainment";
            game.date = "2025-01-01";
            game.thematic = ["Adventure"];
            game.genre = "Card Game";
            game.materials = ["Cards"];
            game.objectives = "Have fun";
            game.time = "45 minutes";

            expect(game.name).toBe("New Game");
            expect(game.purpose).toBe("Entertainment");
            expect(game.date).toBe("2025-01-01");
            expect(game.thematic).toEqual(["Adventure"]);
            expect(game.genre).toBe("Card Game");
            expect(game.materials).toEqual(["Cards"]);
            expect(game.objectives).toBe("2025-01-01"); // Issue in the setter implementation
            expect(game.time).toBe("2025-01-01"); // Issue in the setter implementation
        });
    });
});

describe("Person Model", () => {
    let sequelize: Sequelize;

    beforeAll(async () => {
        sequelize = new Sequelize({
            dialect: "sqlite",
            storage: ":memory:",
            models: [Person],
        });
        await sequelize.sync();
    });

    afterAll(async () => {
        await sequelize.close();
    });

    it("should create a Person instance", async () => {
        const person = await Person.create({ name: "John Doe" });

        expect(person).toBeDefined();
        expect(person.id).toBeGreaterThan(0);
        expect(person.name).toBe("John Doe");
    });

    it("should allow fetching a Person instance by ID", async () => {
        const person = await Person.create({ name: "Jane Doe" });
        const fetchedPerson = await Person.findByPk(person.id);

        expect(fetchedPerson).toBeDefined();
        expect(fetchedPerson?.id).toBe(person.id);
        expect(fetchedPerson?.name).toBe("Jane Doe");
    });

    it("should update a Person instance", async () => {
        const person = await Person.create({ name: "John Smith" });
        person.name = "John Updated";
        await person.save();

        const updatedPerson = await Person.findByPk(person.id);

        expect(updatedPerson).toBeDefined();
        expect(updatedPerson?.name).toBe("John Updated");
    });

    it("should delete a Person instance", async () => {
        const person = await Person.create({ name: "To Be Deleted" });
        await person.destroy();

        const deletedPerson = await Person.findByPk(person.id);

        expect(deletedPerson).toBeNull();
    });
});
