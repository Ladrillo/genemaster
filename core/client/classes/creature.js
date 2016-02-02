import chai from 'chai';
let expect = chai.expect;
chai.should();

export class Creature {

    constructor(genetics, random) {

        let flipCoin = () => Math.floor(Math.random() * 2);
        let randomLife = () => Math.floor(Math.random() * 81) + 20;

        this.id = new Date().valueOf();

        if (!random) {
            this.lifePoints = randomLife();
            this.onWar = false;
            this.genetics = {
                fightGene: genetics.fightGene,
                interactGene: genetics.interactGene
            };
        }
        else {
            this.lifePoints = randomLife();
            this.onWar = false;
            this.genetics = {
                fightGene: genetics.fightGene[flipCoin()],
                interactGene: genetics.interactGene[flipCoin()]
            };
        }
        console.log(this);
    }
}

export function creatureTests() {

    describe('random Creature', function () {

        let randomCreature = new Creature({
            fightGene: ['dove', 'hawk'],
            interactGene: ['colaborate', 'defect'],
        }, true);

        it('should have id, lifePoints, onWar and genetics', function () {
            expect(randomCreature).to.have.all.keys('id', 'lifePoints', 'onWar', 'genetics');
        });
        it('should have genetics for fight and interactions', function () {
            expect(randomCreature.genetics).to.have.all.keys('fightGene', 'interactGene');
        });
        it('should have lifePoints between 20 - 100', function () {
            expect(randomCreature.lifePoints).to.be.within(20, 100);
        });
        it('should have a fightGene of either dove or hawk', function () {
            expect(randomCreature.genetics.fightGene).to.satisfy(e => e === 'dove' || e === 'hawk');
        });
        it('should have a interactGene of either colaborate or defect', function () {
            expect(randomCreature.genetics.interactGene).to.satisfy(e => e === 'colaborate' || e === 'defect');
        });
    });
    
    describe('non-random Creature', function () {

        let nonRandomCreature = new Creature({
            fightGene: 'dove',
            interactGene: 'defect'
        });

        it('should have id, lifePoints, onWar and genetics', function () {
            expect(nonRandomCreature).to.have.all.keys('id', 'lifePoints', 'onWar', 'genetics');
        });
        it('should have genetics for fight and interactions', function () {
            expect(nonRandomCreature.genetics).to.have.all.keys('fightGene', 'interactGene');
        });
        it('should have lifePoints between 20 - 100', function () {
            expect(nonRandomCreature.lifePoints).to.be.within(20, 100);
        });
        it('should have a fightGene of either dove or hawk', function () {
            expect(nonRandomCreature.genetics.fightGene).to.satisfy(e => e === 'dove' || e === 'hawk');
        });
        it('should have a interactGene of either colaborate or defect', function () {
            expect(nonRandomCreature.genetics.interactGene).to.satisfy(e => e === 'colaborate' || e === 'defect');
        });
    });

}
