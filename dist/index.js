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
const createPlayer = (b) => {
    let playerName = prompt(`Enter your name player ${b + 1}: `);
    players.push(new player_1.default(playerName, 0, false));
};
console.log('<--- Nim 100 Game --->');
console.log('Your goal is to be the first to 100...\n');
for (let i = 0; i < 2; i++) {
    createPlayer(i);
}
// console.log(players);
console.log(`The player going first is: ${players[firstPlayer].name}.`);
