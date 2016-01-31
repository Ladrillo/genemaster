export default class Encounter {

    constructor(a, b) {

        this.a = a;
        this.b = b;
    }

    fight() {

        if (this.a.fightMode === 'hawk' && this.b.fightMode === 'dove') {
            this.a.lifePoints += 50;
            this.b.lifePoints += 0;
        }
        if (this.a.fightMode === 'hawk' && this.b.fightMode === 'hawk') {
            let winner = this.winnerByPoints();
            let loser = this.a === this.winnerByPoints() ? this.b : this.a;
            winner.lifePoints += 50;
            loser.lifePoints -= 100;
        }
        if (this.a.fightMode === 'dove' && this.b.fightMode === 'hawk') {
            this.a.lifePoints += 0;
            this.b.lifePoints += 50;
        }
        if (this.a.fightMode === 'dove' && this.b.fightMode === 'dove') {
            let winner = this.winnerByPoints();
            let loser = this.a === this.winnerByPoints() ? this.b : this.a;
            winner.lifePoints += 50;
            loser.lifePoints -= 0;
        }
    }

    winnerByPoints() {

        return this.a.lifePoints > this.b.lifePoints ? this.a : this.b;
    }
}