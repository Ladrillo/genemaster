import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';

import { Creature } from './classes/creature';
import Encounter from './classes/encounter';



// let a = new Creature({ lifePoints: 1, fightMode: 'hawk', interactMode: 'defect' });
// let b = new Creature({ lifePoints: 100, fightMode: 'hawk', interactMode: 'defect' });
//
// let encounter = new Encounter(a, b);
//
// encounter.interact(a, b);
//
// console.log(a, b);