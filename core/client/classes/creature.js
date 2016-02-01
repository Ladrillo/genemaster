import chai from 'chai';
let expect = chai.expect;
chai.should();

export class Creature {

    constructor(options, random, { lifePoints, fightMode, interactMode }) {

        this.id = new Date().valueOf();

        if (!random) {
            this.lifePoints = lifePoints;
            this.fightMode = fightMode;
            this.interactMode = interactMode;
        }
        else {
            let flipCoin = () => Math.floor(Math.random() * 2);
            let randomLife = () => Math.floor(Math.random() * 81) + 20;

            this.lifePoints = randomLife;
            this.fightMode = options.fightMode[flipCoin];
            this.interactMode = options.interactMode[flipCoin];
        }
    }
}

export function creatureTests() {

    describe('class Creature', function () {
        it('should generate valid creatures', function () {

            let testCreature = new Creature({
                fightMode: ['dove', 'hawk'],
                interactMode: ['colaborate', 'defect']
            }, true, null);

            expect(testCreature.lifePoints.to.be.above(19));
            expect(testCreature.lifePoints.to.be.below(101));
        });
    });

}
