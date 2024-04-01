const Computer = require('../classes/computer')
const Gameboard = require('../classes/gameboard')
const Player = require('../classes/player')

const { spyOn } = require('@jest/globals')
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


    describe('Computer', () => {
        it('should have a gameboard size of 10', () => {
            // Create a Gameboard object with size 10
            const gameboard = new Gameboard(10);
    
            // Create a Computer object with the Gameboard object
            const computer = new Computer(gameboard);
    
            // Expect that the gameboard size is 10
            expect(computer.gameboard.size).toBe(10);
        });
    });

    describe('Computer', () => {
        it('should hit opponent\'s gameboard once', () => {
            const opponentGameboard = new Gameboard(10)
    
            // Create a Gameboard object for the computer
            const computerGameboard = new Gameboard(10);
            
            // create spy function on the class method
            const spyAttack = jest.spyOn(opponentGameboard, 'receiveAttack')
            // Create a Computer object with the Gameboard object
            const computer = new Computer(computerGameboard);
    
            // Call the attackOpponent method of the computer
            computer.attackOpponent(opponentGameboard);
            // Verify that the receiveAttack method was called once
            expect(spyAttack).toHaveBeenCalled();
            spyAttack.mockClear()
        });

        it('should attack opponent\'s gameboard with a valid coordinate', () => {
            const opponentGameboard = new Gameboard(10);
            const computerGameboard = new Gameboard(10);
        
            const spyAttack = jest.spyOn(opponentGameboard, 'receiveAttack');
        
            const computer = new Computer(computerGameboard);
            computer.attackOpponent(opponentGameboard);
        
            const attackedCoordinate = spyAttack.mock.calls[0][0];
            expect(opponentGameboard.isValidCoordinate(attackedCoordinate)).toBe(true);
        
            spyAttack.mockClear();
          });
    });

    describe('Player', () => {
        it('should hit opponent gameboard once', () => {
            const playerGameboard = new Gameboard(10);
            const opponentGameboard = new Gameboard(10);

            const receiveAttack = jest.spyOn(opponentGameboard, 'receiveAttack')
            const player = new Player(playerGameboard);    
            player.attackOpponent('A1', opponentGameboard);
            expect(receiveAttack).toHaveBeenCalledWith('A1');       
            receiveAttack.mockClear()
        });
    });

});
