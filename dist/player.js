"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Player {
    constructor(name, number, won) {
        this.name = name;
        this.number = number;
        this.won = won;
    }
    addNumber(a) {
        this.number += a;
    }
    checkWin() {
        if (this.number === 100) {
            this.won = true;
        }
    }
}
exports.default = Player;