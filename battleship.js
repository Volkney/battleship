class Ship{
    constructor(length) {
        this.length = length;
        this.hitCount = 0;
        this.sunk = false;
    }

    hits() {
        this.hitCount++;
        if (this.hitCount === this.length){
            this.sunk = true;
        }
    }
    isSunk(){
        return this.sunk;
    }
}

module.exports = Ship;