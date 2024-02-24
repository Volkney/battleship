class Gameboard {
    constructor(size){
        this.size = size
        this.grid = this.createGrid(size)
        this.missedAttacks = []
    }
    
    createGrid(size){
        const grid = {}
        const letters = 'ABCDEFGHIJ' // Letter A to J
        for (let i = 0;i < size; i++) {
            for (let j = 0; j <size; j++){
            const letter = letters[i]
            const number = (j + 1).toString()
            const coord = letter + number
            grid[coord] = { occupied: false, destroyed: false}
            }
        }
        return grid
    }

    placeShip(coordinates) {
        for (const coord of coordinates) {
            this.grid[coord].occupied = true
        }
    }

    receiveAttack(coordinates) {
        
        if(this.grid[coordinates].occupied){
            this.grid[coordinates].destroyed = true
        }
        else {
            this.grid[coordinates].destroyed = true
            this.missedAttacks.push(coordinates)

        }
    }

    allShipsSunk() {
        // Iterate over all coordinates in the grid
        for (const coord of Object.keys(this.grid)) {
            // Check if the cell is occupied by a ship and not destroyed
            if (this.grid[coord].occupied && !this.grid[coord].destroyed) {
                // If any such cell is found, return false (not all ships are sunk)
                return false;
            }
        }
        return true
    }
    

}



module.exports = Gameboard;