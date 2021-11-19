import PromptSync from "prompt-sync";
const prompt = PromptSync();

import Player from './player';

let players: Player[] = [];
let gameWon: boolean = false;
let mainNumber: number = 0;

const createPlayer = (b: number) => {

    let playerName: string = prompt(`Enter your name player ${b + 1}: `);
    players.push(new Player(playerName, false));

}

const takeTurn = (a: number, b: Player[]) => {

    console.log(`\n${b[a].name} it's your turn.`);
    let numAdd: number = parseInt(prompt('What number do you want to add? 1 to 10: '));

    while (isNaN(numAdd) || numAdd < 1 || numAdd > 10) {

        numAdd = parseInt(prompt('What number do you want to add? 1 to 10: '));

    }

    mainNumber += numAdd;

    console.log(`The number is now: ${mainNumber}`);

}

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

            gameWon = true
            break;

        } else if (mainNumber > 100) {

            gameWon = true;
            break;
    
        }

    }

}

let winningPlayer = players.find(b => b.won === true);

if (!!winningPlayer) {

    console.log(`\nCongratulations ${winningPlayer.name}, you have won!`);

} else {

    console.log('\nUnfortunately nobody has won...');

}
