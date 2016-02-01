export default class Encounter {

    fight(red, blue) {

        let winner = this.winnerByPoints(red, blue);
        let loser = red === winner ? blue : red;

        if (red.fightMode === 'hawk' && blue.fightMode === 'dove') {
            red.lifePoints += 50;
            blue.lifePoints += 0;
        }
        if (red.fightMode === 'hawk' && blue.fightMode === 'hawk') {
            winner.lifePoints += 50;
            loser.lifePoints -= 100;
        }
        if (red.fightMode === 'dove' && blue.fightMode === 'hawk') {
            red.lifePoints += 0;
            blue.lifePoints += 50;
        }
        if (red.fightMode === 'dove' && blue.fightMode === 'dove') {
            winner.lifePoints += 50;
            loser.lifePoints -= 0;
        }
    }

    interact(red, blue) {

        if (red.interactMode === 'colaborate' && blue.interactMode === 'colaborate') {
            red.lifePoints += 30;
            blue.lifePoints += 30;
        }
        if (red.interactMode === 'colaborate' && blue.interactMode === 'defect') {
            red.lifePoints -= 30;
            blue.lifePoints += 50;
        }
        if (red.interactMode === 'defect' && blue.interactMode === 'colaborate') {
            red.lifePoints += 50;
            blue.lifePoints -= 30;
        }
        if (red.interactMode === 'defect' && blue.interactMode === 'defect') {
            red.lifePoints -= 10;
            blue.lifePoints -= 10;
        }
    }

    winnerByPoints(red, blue) {

        return red.lifePoints > blue.lifePoints ? red : blue;
    }
}