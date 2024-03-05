class Computer{
    constructor(gameboard){
        this.gameboard = gameboard
    }

    attackOpponent(opponent) {
        const coordinate = this.generateRandomCoordinate(); // call generateRandomCoordinate method
        if (!this.gameboard.isCoordinateAttacked(coordinate)) {
            opponent.gameboard.receiveAttack(coordinate);
        }
        return coordinate;
    }
    generateRandomCoordinate(){
        const row = Math.floor(Math.random * this.gameboard.size)
        const column = Math.floor(Math.random * this.gameboard.size)
        return this.convertToCoordinate(row, column)
    }


    convertToCoordinate(row, column) {
        const letter = String.fromCharCode('A'.charCodeAt(0) + row);
        const number = (column + 1).toString();
        return letter + number;
    }
}

module.exports = Computer