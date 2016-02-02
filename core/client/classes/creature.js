import chai from 'chai';
let expect = chai.expect;
chai.should();

import { config } from './config';
let geneConfig = config.geneConfig;

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
        console.log(this, `random: ${random}`);
    }
}

export function creatureTests() {

    describe('non-random Creature', function () {

        let creature = new Creature({
            fightGene: geneConfig.fightGene[0],
            interactGene: geneConfig.interactGene[1]
        }, false);

        it('should have id, lifePoints, onWar and genetics', function () {
            expect(creature).to.have.all.keys('id', 'lifePoints', 'onWar', 'genetics');
        });
        it('should have genetics for fight and interactions', function () {
            expect(creature.genetics).to.have.all.keys('fightGene', 'interactGene');
        });
        it('should have lifePoints between 20 - 100', function () {
            expect(creature.lifePoints).to.be.within(20, 100);
        });
        it(`should have fightGene of either ${geneConfig.fightGene[0]} or ${geneConfig.fightGene[1]}`, function () {
            expect(creature.genetics.fightGene).to.satisfy(e =>
                e === `${geneConfig.fightGene[0]}` ||
                e === `${geneConfig.fightGene[1]}`);
        });
        it(`should have interactGene of either ${geneConfig.interactGene[0]} or ${geneConfig.interactGene[1]}`, function () {
            expect(creature.genetics.interactGene).to.satisfy(e =>
                e === `${geneConfig.interactGene[0]}` ||
                e === `${geneConfig.interactGene[1]}`);
        });
    });

    describe('random Creature', function () {

        let creature = new Creature(geneConfig, true);

        it('should have id, lifePoints, onWar and genetics', function () {
            expect(creature).to.have.all.keys('id', 'lifePoints', 'onWar', 'genetics');
        });
        it('should have genetics for fight and interactions', function () {
            expect(creature.genetics).to.have.all.keys('fightGene', 'interactGene');
        });
        it('should have lifePoints between 20 - 100', function () {
            expect(creature.lifePoints).to.be.within(20, 100);
        });
        it(`should have fightGene of either ${geneConfig.fightGene[0]} or ${geneConfig.fightGene[1]}`, function () {
            expect(creature.genetics.fightGene).to.satisfy(e =>
                e === `${geneConfig.fightGene[0]}` ||
                e === `${geneConfig.fightGene[1]}`);
        });
        it(`should have interactGene of either ${geneConfig.interactGene[0]} or ${geneConfig.interactGene[1]}`, function () {
            expect(creature.genetics.interactGene).to.satisfy(e =>
                e === `${geneConfig.interactGene[0]}` ||
                e === `${geneConfig.interactGene[1]}`);
        });
    });
}
