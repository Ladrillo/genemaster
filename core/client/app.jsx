import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Creature from './classes/creature';
import Encounter from './classes/encounter';




let a = new Creature({ lifePoints: 60, fightMode: 'dove' });
let b = new Creature({ lifePoints: 50, fightMode: 'hawk' });

let encounter = new Encounter(a, b);

encounter.fight();

console.log(a, b);