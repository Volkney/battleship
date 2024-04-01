class Gameboard {
    constructor(size){
        this.size = 10
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

    isCoordinateAttacked(coordinate){
         // Check if the coordinate exists in the grid
    if (coordinate in this.grid && this.grid[coordinate]) {
        // If the coordinate exists, return its 'destroyed' property
        return this.grid[coordinate].destroyed;
    } else {
        // If the coordinate doesn't exist, it hasn't been attacked
        return false;
    }
    }

    isValidCoordinate(coordinate) {
        const pattern = /^[A-J][1-9]$|^[A-J]10$/;
    
        if (pattern.test(coordinate)) {
          const row = coordinate.charCodeAt(0) - 'A'.charCodeAt(0);
          const col = parseInt(coordinate.slice(1)) - 1;
    
          return row >= 0 && row < this.size && col >= 0 && col < this.size;
        }
    
        return false;
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