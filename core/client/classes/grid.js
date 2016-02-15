import chai from 'chai';
let expect = chai.expect;
chai.should();


export class Grid {

    constructor(x, y) {

        this.squares = [];
        for (let i = 1; i <= x; i++) {
            for (let j = 1; j <= y; j++) {
                this.squares.push({
                    name: `${i},${j}`,
                    coords: { x: i, y: j },
                    occupied: false,
                    occupant: [null, null]
                });
            }
        }
    }
}

export function gridTests() {

    describe('grid', function () {

        let squares = [2, 3];
        let nOfSquares = squares[0] * squares[1];
        let testGrid = new Grid(...squares);
        // console.log('test grid -> ', testGrid);

        it('should generate grids with correct number of squares', function () {
            expect(testGrid.squares.length).to.equal(nOfSquares);
        });
    });
}