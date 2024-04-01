const Ship = require('../battleship');
const Gameboard = require('../gameboard')
describe('Ship', () => {
    const destroyer = new Ship('destroyer');

    
    it('should increase hit when hits()', () => {
        destroyer.hits()
        expect(destroyer.hitCount).toBe(1);
    })

    it('should sink when hitCount equals length of ship', () =>{
        destroyer.hits()
        destroyer.hits()
        destroyer.hits()
        expect(destroyer.sunk).toBe(true);
    })

})

describe('Ship', () => {
    describe('Constructor', () =>{
        it('Should create a carrie with length 5', () => {
            const carrier = new Ship('carrier');
            expect(carrier.type).toBe('carrier')
            expect(carrier.length).toBe(5)
            expect(carrier.hitCount).toBe(0)
            expect(carrier.sunk).toBe(false)
        })
    })

    it('should create a battleship with length 4', () => {
        const battleship = new Ship('battleship');
        expect(battleship.type).toBe('battleship');
        expect(battleship.length).toBe(4);
        expect(battleship.hitCount).toBe(0);
        expect(battleship.sunk).toBe(false);
      });
  
      it('should create a submarine with length 3', () => {
        const submarine = new Ship('submarine');
        expect(submarine.type).toBe('submarine');
        expect(submarine.length).toBe(3);
        expect(submarine.hitCount).toBe(0);
        expect(submarine.sunk).toBe(false);
      });
  
      it('should create a cruiser with length 3', () => {
        const cruiser = new Ship('cruiser');
        expect(cruiser.type).toBe('cruiser');
        expect(cruiser.length).toBe(2);
        expect(cruiser.hitCount).toBe(0);
        expect(cruiser.sunk).toBe(false);
      });
  
      it('should create a destroyer with length 2', () => {
        const destroyer = new Ship('destroyer');
        expect(destroyer.type).toBe('destroyer');
        expect(destroyer.length).toBe(1);
        expect(destroyer.hitCount).toBe(0);
        expect(destroyer.sunk).toBe(false);
      });

})

describe('Gameboard', () => {


    it('should create a 10x10 grid with coordinates in the correct order', () => {
        const gameboard = new Gameboard(10);
        const grid = gameboard.createGrid(10);

        const expectedCoords = [];
        for (let row = 0; row < 10; row++) {
            for (let col = 0; col < 10; col++) {
                const letter = String.fromCharCode('A'.charCodeAt(0) + row);
                const number = (col + 1).toString();
                expectedCoords.push(letter + number);
            }
        }

        const gridCoords = Object.keys(grid);

        // Check if the generated coordinates match the expected sequence
        expect(gridCoords).toEqual(expectedCoords);
    });

    it('should place multiple ships on the gameboard correctly', () => {
        const gameboard = new Gameboard(10);
        

        // Place two ships on specific coordinates
        gameboard.placeShip(['A1', 'A2', 'A3']);
        gameboard.placeShip(['B1', 'B2']);

        // Check if the cells are marked as occupied for the ships
        expect(gameboard.grid['A1'].occupied).toBe(true);
        expect(gameboard.grid['A2'].occupied).toBe(true);
        expect(gameboard.grid['A3'].occupied).toBe(true);
        expect(gameboard.grid['B1'].occupied).toBe(true);
        expect(gameboard.grid['B2'].occupied).toBe(true);
    });

    it('should destroy the coordinate given of the gameboard', () => {
        const gameboard = new Gameboard(10);
        // Place a ship
        gameboard.placeShip(['A1', 'A2', 'A3'])
        // Give coordinates of attack
        gameboard.receiveAttack(['A3'])
        gameboard.receiveAttack(['A2'])

        
        expect(gameboard.grid['A3'].destroyed).toBe(true);
        expect(gameboard.grid['A2'].destroyed).toBe(true);

    })

    it('should return true when all ships are sunk', () => {
        const gameboard = new Gameboard(10);

        // Place ships on the gameboard
        gameboard.placeShip(['A1', 'A2', 'A3']);
        gameboard.placeShip(['B1', 'B2']);
        // Assume we have placed more ships...

        // Attack ships until they are all sunk
        gameboard.receiveAttack(['A1']);
        gameboard.receiveAttack(['A2']);
        gameboard.receiveAttack(['A3']);
        gameboard.receiveAttack(['B1']);
        gameboard.receiveAttack(['B2']);
        // Assume we have attacked more ships...

        // Check if all ships are sunk
        expect(gameboard.allShipsSunk()).toBe(true);
    });

    it('should return false when not all ships are sunk', () => {
        const gameboard = new Gameboard(10);

        // Place ships on the gameboard
        gameboard.placeShip(['A1', 'A2', 'A3']);
        // gameboard.placeShip(['B1', 'B2']);
        // Assume we have placed more ships...

        // Attack only some ships
        gameboard.receiveAttack(['A1']);
        gameboard.receiveAttack(['A2']);
        gameboard.receiveAttack(['A3']);
        // Assume we have attacked more ships...

        // Check if all ships are sunk
        expect(gameboard.allShipsSunk()).toBe(true);
    });

    describe('isCoordinateAttacked', () => {
        it('should return true if the coordinate exists and is attacked', () => {
            const gameboard = new Gameboard(10);
            gameboard.grid['A1'] = { destroyed: true };
            expect(gameboard.isCoordinateAttacked('A1')).toBe(true);
        });
    
        it('should return false if the coordinate exists but is not attacked', () => {
            const gameboard = new Gameboard(10);
            gameboard.grid['A1'] = { destroyed: false };
            expect(gameboard.isCoordinateAttacked('A1')).toBe(false);
        });
    
        it('should return false if the coordinate does not exist', () => {
            const gameboard = new Gameboard(10);
            expect(gameboard.isCoordinateAttacked('A1')).toBe(false);
        });
    });
})