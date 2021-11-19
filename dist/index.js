"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const player_1 = __importDefault(require("./player"));
let players = [];
const firstPlayer = Math.floor(Math.random() * 3);
let gameWon = false;
let roundNum = 1;
const createPlayer = (b) => {
    let playerName = prompt(`Enter your name player ${b + 1}: `);
    players.push(new player_1.default(playerName, 0, false));
};
const takeTurn = (a, b) => {
    let playerNum = parseInt(prompt(`Enter a number between 1 and 10 ${b[a].name}: `));
    while (isNaN(playerNum) || playerNum < 1 || playerNum > 10) {
        playerNum = parseInt(prompt(`Enter a number between 1 and 10 ${b[a].name}: `));
    }
    b[a].addNumber(playerNum);
};
console.log('<--- Nim 100 Game --->');
console.log('Your goal is to be the first to 100...\n');
for (let i = 0; i < 2; i++) {
    createPlayer(i);
}
// console.log(players);
while (gameWon === false) {
    console.log(`\nRound number ${roundNum}: `);
    for (let i = 0; i < players.length; i++) {
        takeTurn(i, players);
        players[i].printNumber();
        players[i].checkWin();
        if (players[i].won === true) {
            gameWon = true;
        }
    }
    if (players[0].number > 100 && players[1].number > 100) {
        let player1Diff = players[0].number - 100;
        let player2Diff = players[1].number - 100;
        if (player1Diff > player2Diff) {
            players[1].won = true;
            gameWon = true;
        }
        else if (player1Diff < player2Diff) {
            players[0].won = true;
            gameWon = true;
        }
    }
    roundNum++;
}
console.log(players);
