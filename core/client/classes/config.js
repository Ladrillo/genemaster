let config = (function () {
    
    return {
        genes: {
            fightGene: ['dove', 'hawk'],
            interactGene: ['colaborate', 'cheat']
        },
        interaction: {
            colaborated: 30,
            suckered: -30,
            cheated: 40,
            defected: -10
        },
        fight: {
            won: 50,
            fled: 0,
            lost: -100
        }
    };
}());

export { config };