import PromptSync from "prompt-sync";
const prompt = PromptSync();

import Player from './player';

let players: Player[] = [];

const createPlayer = (b: number) => {

    let playerName: string = prompt(`Enter your name player ${b + 1}: `);
    players.push(new Player(playerName, 0, false));

}

console.log('<--- Nim 100 Game --->');
console.log('Your goal is to be the first to 100...\n');

for (let i = 0; i < 2; i++) {

    createPlayer(i);

}

console.log(players);
