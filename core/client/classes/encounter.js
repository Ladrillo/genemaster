import chai from 'chai';
let expect = chai.expect;
chai.should();


export class Encounter {

    fight(red, blue) {

        let winner = this.winnerByPoints(red, blue);
        let loser = red === winner ? blue : red;

        if (red.genetics.fightGene === 'hawk' && blue.genetics.fightGene === 'dove') {
            red.lifePoints += 50;
            blue.lifePoints += 0;
        }
        if (red.genetics.fightGene === 'hawk' && blue.genetics.fightGene === 'hawk') {
            winner.lifePoints += 50;
            loser.lifePoints -= 100;
        }
        if (red.genetics.fightGene === 'dove' && blue.genetics.fightGene === 'hawk') {
            red.lifePoints += 0;
            blue.lifePoints += 50;
        }
        if (red.genetics.fightGene === 'dove' && blue.genetics.fightGene === 'dove') {
            winner.lifePoints += 50;
            loser.lifePoints -= 0;
        }
    }

    interact(red, blue) {

        if (red.genetics.interactGene === 'colaborate' && blue.genetics.interactGene === 'colaborate') {
            red.lifePoints += 30;
            blue.lifePoints += 30;
        }
        if (red.genetics.interactGene === 'colaborate' && blue.genetics.interactGene === 'defect') {
            red.lifePoints -= 30;
            blue.lifePoints += 50;
        }
        if (red.genetics.interactGene === 'defect' && blue.genetics.interactGene === 'colaborate') {
            red.lifePoints += 50;
            blue.lifePoints -= 30;
        }
        if (red.genetics.interactGene === 'defect' && blue.genetics.interactGene === 'defect') {
            red.lifePoints -= 10;
            blue.lifePoints -= 10;
        }
    }

    winnerByPoints(red, blue) {

        return red.lifePoints > blue.lifePoints ? red : blue;
    }
}