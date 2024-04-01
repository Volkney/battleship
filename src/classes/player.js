class Player{
    constructor(gameboard){
        gameboard = this.gameboard
    }
    
    placePlayerShips(){
        const ships = [
            {type: 'carrier', length: 5, coordinates: []},

            {type: 'battleship', length: 4, coordinates: []},

            {type: 'submarine', length: 3, coordinates: []},

            {type: 'cruiser', length: 2, coordinates: []},

            {type: 'destroyer', length: 1, coordinates: []},
        ]

        
    }

    attackOpponent(coordinate, opponentGameboard) {
        if (!opponentGameboard) {
            throw new Error('Gameboard is not set');
        }

        if (opponentGameboard.isCoordinateAttacked(coordinate)) {
            throw new Error('This coordinate is already attacked');
        }
        
        opponentGameboard.receiveAttack(coordinate);
    }


}

module.exports = Player