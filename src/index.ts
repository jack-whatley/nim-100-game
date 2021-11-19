import PromptSync from "prompt-sync";
const prompt = PromptSync();

import Player from './player';

let players: Player[] = [];
const firstPlayer: number = Math.floor(Math.random() * 3);
let gameWon: boolean = false;
let roundNum: number = 1;

const createPlayer = (b: number) => {

    let playerName: string = prompt(`Enter your name player ${b + 1}: `);
    players.push(new Player(playerName, 0, false));

}

const takeTurn = (a: number, b: Player[]) => {

    

}

console.log('<--- Nim 100 Game --->');
console.log('Your goal is to be the first to 100...\n');

for (let i = 0; i < 2; i++) {

    createPlayer(i);

}

// console.log(players);

while (gameWon === false) {

    console.log(`\nRound number ${roundNum}: `);
    
    for (let i = 0; i < players.length; i++) {

        

    }

    

    roundNum++;

}

console.log(players);
