import chai from 'chai';
let expect = chai.expect;
chai.should();

import { Creature } from './creature';
import { config } from './config';

let interaction = config.interaction;
let genes = config.genes;
let fight = config.fight;
let interact = config.interact;

export class Encounter {

    fight([red, blue]) {

        let winner = this.winnerByPoints([red, blue]);
        let loser = red === winner ? blue : red;

        if (red.genetics.fightGene === genes.fightGene[1] && blue.genetics.fightGene === genes.fightGene[0]) {
            red.lifePoints += fight.won;
            blue.lifePoints += fight.fled;
        }
        if (red.genetics.fightGene === genes.fightGene[1] && blue.genetics.fightGene === genes.fightGene[1]) {
            winner.lifePoints += fight.won;
            loser.lifePoints += fight.lost;
        }
        if (red.genetics.fightGene === genes.fightGene[0] && blue.genetics.fightGene === genes.fightGene[1]) {
            red.lifePoints += fight.fled;
            blue.lifePoints += fight.won;
        }
        if (red.genetics.fightGene === genes.fightGene[0] && blue.genetics.fightGene === genes.fightGene[0]) {
            winner.lifePoints += fight.won;
            loser.lifePoints += fight.fled;
        }
        return [red, blue];
    }

    interact([red, blue]) {

        if (red.genetics.genes === genes.colaborateGene[0] && blue.genetics.genes === genes.colaborateGene[0]) {
            red.lifePoints += 30;
            blue.lifePoints += 30;
        }
        if (red.genetics.genes === genes.colaborateGene[0] && blue.genetics.genes === genes.colaborateGene[1]) {
            red.lifePoints -= 30;
            blue.lifePoints += 50;
        }
        if (red.genetics.genes === genes.colaborateGene[1] && blue.genetics.genes === genes.colaborateGene[0]) {
            red.lifePoints += 50;
            blue.lifePoints -= 30;
        }
        if (red.genetics.genes === genes.colaborateGene[1] && blue.genetics.genes === genes.colaborateGene[1]) {
            red.lifePoints -= 10;
            blue.lifePoints -= 10;
        }
    }

    winnerByPoints([red, blue]) {

        return red.lifePoints > blue.lifePoints ? red : blue;
    }
}

export function encounterTests() {

    describe('Encounter class', () => {

        let cheatingHawk = new Creature({
            fightGene: genes.fightGene[0],
            interactGene: genes.interactGene[1]
        }, false);
        let cheatingHawkInitialLife = cheatingHawk.lifePoints;

        let cheatingDove = new Creature({
            fightGene: genes.fightGene[0],
            interactGene: genes.interactGene[1]
        }, false);
        let cheatingDoveInitialLife = cheatingDove.lifePoints;
        
        let colaboratingHawk = new Creature({
            fightGene: genes.fightGene[0],
            interactGene: genes.interactGene[1]
        }, false);
        let colaboratingHawkInitialLife = colaboratingHawk.lifePoints;
        
        let colaboratingDove = new Creature({
            fightGene: genes.fightGene[0],
            interactGene: genes.interactGene[1]
        }, false);
        let colaboratingDoveInitialLife = colaboratingDove.lifePoints;
        
        let encounter = new Encounter();
        
        it('hawk fighting hawk ends up badly for one', () => {
            
             encounter.fight(cheatingHawk, colaboratingHawk);
             expect()
        });


    });
}

