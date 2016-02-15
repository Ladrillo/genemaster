import chai from 'chai';
let expect = chai.expect;
chai.should();

import { Creature } from './creature';
import { config } from './config';

// shortcuts for fight points
let won = config.fight.won;
let lost = config.fight.lost;
let fled = config.fight.fled;

// shortcuts for interaction points
let suckered = config.interaction.suckered;
let cheated = config.interaction.cheated;
let colaborated = config.interaction.colaborated;
let defected = config.interaction.defected;

// fight mode genes
let hawkish = config.genes.fightGene[1];
let dovish = config.genes.fightGene[0];

// interaction mode genes
let colaborator = config.genes.interactGene[0];
let cheater = config.genes.interactGene[1];

export class Encounter {

    fight(red, blue) {

        let winner = this.winnerByPoints(red, blue);
        let loser = red === winner ? blue : red;

        if (red.genetics.fightGene === hawkish && blue.genetics.fightGene === dovish) {
            red.lifePoints += won;
            blue.lifePoints += fled;
        }
        if (red.genetics.fightGene === hawkish && blue.genetics.fightGene === hawkish) {
            winner.lifePoints += won;
            loser.lifePoints += lost;
        }
        if (red.genetics.fightGene === dovish && blue.genetics.fightGene === hawkish) {
            red.lifePoints += fled;
            blue.lifePoints += won;
        }
        if (red.genetics.fightGene === dovish && blue.genetics.fightGene === dovish) {
            winner.lifePoints += won;
            loser.lifePoints += fled;
        }
    }

    interact(red, blue) {

        if (red.genetics === colaborator && blue.genetics === colaborator) {
            red.lifePoints += colaborated;
            blue.lifePoints += colaborated;
        }
        if (red.genetics === colaborator && blue.genetics === cheater) {
            red.lifePoints += suckered;
            blue.lifePoints += cheated;
        }
        if (red.genetics === cheater && blue.genetics === colaborator) {
            red.lifePoints += cheated;
            blue.lifePoints += suckered;
        }
        if (red.genetics === cheater && blue.genetics === cheater) {
            red.lifePoints += defected;
            blue.lifePoints += defected;
        }
    }

    winnerByPoints(red, blue) {

        return red.lifePoints > blue.lifePoints ? red : blue;
    }
}

export function encounterTests() {
    
    let encounter = new Encounter();
    let cheatingHawk, cheatingDove, colaboratingHawk, colaboratingDove;
    
    describe('Encounter class', () => {
        
        let [a, b, c, d] = [50, 100, 150, 200];
        
        let setPlayers = () => {

            cheatingHawk = new Creature({
                fightGene: hawkish,
                interactGene: cheater
            }, false, a);

            cheatingDove = new Creature({
                fightGene: dovish,
                interactGene: cheater
            }, false, b);

            colaboratingHawk = new Creature({
                fightGene: hawkish,
                interactGene: colaborator
            }, false, c);

            colaboratingDove = new Creature({
                fightGene: dovish,
                interactGene: colaborator
            }, false, d);

            encounter = new Encounter();
        };

        it('hawk fighting hawk ends up badly for one', () => {
            
            setPlayers();
            encounter.fight(cheatingHawk, colaboratingHawk);
            expect(cheatingHawk.lifePoints).to.equal(a + lost);
            expect(colaboratingHawk.lifePoints).to.equal(c + won);
            
            setPlayers();
            encounter.fight(colaboratingHawk, cheatingHawk);
            expect(cheatingHawk.lifePoints).to.equal(a + lost);
            expect(colaboratingHawk.lifePoints).to.equal(c + won);
        });
        
        it('hawk fighting dove dove fleas', () => {
            
            setPlayers();
            encounter.fight(cheatingHawk, cheatingDove);
            expect(cheatingHawk.lifePoints).to.equal(a + won);
            expect(cheatingDove.lifePoints).to.equal(b + fled);
            
            setPlayers();
            encounter.fight(cheatingDove, cheatingHawk);
            expect(cheatingHawk.lifePoints).to.equal(a + won);
            expect(cheatingDove.lifePoints).to.equal(b + fled);
        });


    });
}

