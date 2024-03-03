const Computer = require('./computer')
const Gameboard = require('./gameboard')
const Player = require('./player')
describe('Computer', () => {
    let gameboard;

    describe('Computer Player', () => {
        it('should create a computer player', () => {
            const computerPlayer = new Computer(gameboard);
    
            // Assert that computerPlayer is an instance of the Computer class
            expect(computerPlayer).toBeInstanceOf(Computer);
        });
    });

    describe('Opponent Gameboard', () => {
        it('should create a properly initialized opponent gameboard', () => {
            // Create an opponent gameboard
            const opponentGameboard = new Gameboard(10);
    
            // Check the size of the grid
            expect(Object.keys(opponentGameboard.grid).length).toBe(100); // Assuming a 10x10 grid
    
            // Check the initialization of all cells in the grid
            Object.values(opponentGameboard.grid).forEach(cell => {
                // Each cell should have properties 'occupied' and 'destroyed' initialized to false
                expect(cell).toEqual({ occupied: false, destroyed: false });
            });
    
            // Check the initialization of missedAttacks array
            expect(opponentGameboard.missedAttacks).toEqual([]);
        });
    });

    it('should attack opponent with a valid coordinate', () => {
        const opponentGameboard = new Computer(gameboard); // Create a gameboard for the opponent
        const computerGameboard = new Player(gameboard);
        const computerPlayer = new Computer(computerGameboard);
        const coordinate = computerPlayer.attackOpponent(opponentGameboard);
        
        // Verify that the coordinate is within the expected range
        expect(coordinate).toMatch(/[A-J][1-9]|10/);
    });

    // it('should not attack the same coordinate twice', () => {
    //     const opponentGameboard = new Gameboard(10); // Create a gameboard for the opponent
    //     const computerPlayer = new Computer(gameboard);
    //     const attackedCoordinates = new Set();

    //     // Attack opponent multiple times
    //     for (let i = 0; i < 100; i++) {
    //         const coordinate = computerPlayer.attackOpponent({ gameboard: opponentGameboard });
    //         // Verify that the coordinate hasn't been attacked before
    //         expect(attackedCoordinates.has(coordinate)).toBe(false);
    //         // Add the coordinate to the set of attacked coordinates
    //         attackedCoordinates.add(coordinate);
    //     }
    // });
});
