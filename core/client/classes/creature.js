import chai from 'chai';
let expect = chai.expect;
chai.should();

import { config } from './config';
let genes = config.genes;

let flipCoin = () => Math.floor(Math.random() * 2);
let randomLife = () => Math.floor(Math.random() * 81) + 20;


export class Creature {

    constructor(genetics, random, lifepoints) {
        
        this.id = new Date().valueOf();
        this.lifePoints = lifepoints || randomLife();
        this.onWar = false;

        if (!random) {

            this.genetics = {
                fightGene: genetics.fightGene,
                interactGene: genetics.interactGene
            };
        }
        else {

            this.genetics = {
                fightGene: genetics.fightGene[flipCoin()],
                interactGene: genetics.interactGene[flipCoin()]
            };
        }
        // console.log(this, `random: ${random}`);
    }
}

export function creatureTests() {

    let tests = creature => {

        it('should have id, lifePoints, onWar and genetics', () => {
            expect(creature).to.have.all.keys('id', 'lifePoints', 'onWar', 'genetics');
        });

        it('should have genetics for fight and interactions', () => {
            expect(creature.genetics).to.have.all.keys('fightGene', 'interactGene');
        });

        it('should have lifePoints between 20 - 100', () => {
            expect(creature.lifePoints).to.be.within(20, 100);
        });

        it(`should have fightGene of either ${genes.fightGene[0]} or ${genes.fightGene[1]}`, () => {

            expect(creature.genetics.fightGene).to.satisfy(e =>
                e === `${genes.fightGene[0]}` ||
                e === `${genes.fightGene[1]}`);
        });

        it(`should have interactGene of either ${genes.interactGene[0]} or ${genes.interactGene[1]}`, () => {

            expect(creature.genetics.interactGene).to.satisfy(e =>
                e === `${genes.interactGene[0]}` ||
                e === `${genes.interactGene[1]}`);
        });
    };

    describe('creature class', () => {

        describe('non-random Creature', () => {

            let creature = new Creature({
                fightGene: genes.fightGene[0],
                interactGene: genes.interactGene[1]
            }, false);

            tests(creature);
        });

        describe('random Creature', () => {

            let creature = new Creature(genes, true);

            tests(creature);
        });
    });
}
