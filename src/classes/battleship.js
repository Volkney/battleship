class Ship{
    constructor(type) {
        this.type = type;
        this.length = this.getShipLength(type);
        this.hitCount = 0;
        this.sunk = false;
    }

    getShipLength(type){
        switch (type){
            case 'carrier':
                return 5
            case 'battleship':
                return 4
            case 'submarine':
                return 3;
            case 'cruiser':
                return 2;
            case 'destroyer':
                return 1;
            default:
                throw new Error('invalid ship type')
        }
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