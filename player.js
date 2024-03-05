class Player{
    constructor(gameboard){
        gameboard = this.gameboard
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