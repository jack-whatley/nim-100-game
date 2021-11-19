"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const player_1 = __importDefault(require("./player"));
let players = [];
let gameWon = false;
let mainNumber = 0;
const createPlayer = (b) => {
    let playerName = prompt(`Enter your name player ${b + 1}: `);
    players.push(new player_1.default(playerName, false));
};
const takeTurn = (a, b) => {
    console.log(`${b[a].name} it's your turn.`);
    let numAdd = parseInt(prompt('What number do you want to add? 1 to 10: '));
    while (isNaN(numAdd) || numAdd < 1 || numAdd > 10) {
        numAdd = parseInt(prompt('What number do you want to add? 1 to 10: '));
    }
    mainNumber += numAdd;
    console.log(`The number is now: ${mainNumber}`);
};
console.log('<--- Nim 100 Game --->');
console.log('Your goal is to be the first to 100...\n');
for (let i = 0; i < 2; i++) {
    createPlayer(i);
}
// console.log(players);
console.log(`\nThe game is starting; the main number is currently: ${mainNumber}`);
while (gameWon === false) {
    for (let i = 0; i < players.length; i++) {
        takeTurn(i, players);
        players[i].checkWin(mainNumber);
        if (players[i].won === true) {
            gameWon = true;
            break;
        }
        else if (mainNumber > 100) {
            gameWon = true;
            break;
        }
    }
}
let winningPlayer = players.find(b => b.won === true);
if (!!winningPlayer) {
    console.log(`Congratulations ${winningPlayer.name}, you have won!`);
}
else {
    console.log('Unfortunately nobody has won...');
}
