class Player{
    constructor(gameboard){
        gameboard = this.gameboard
    }
    attackOpponent(coordinate){
        if(this.gameboard.isCoordinateAttacked(coordinate)){
            throw new Error('This coordinate is already attacked')
        }
        this.gameboard.receiveAttacked(coordinate)
    }

}

module.exports = Player