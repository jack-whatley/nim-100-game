"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Player {
    constructor(name, won) {
        this.name = name;
        this.won = won;
    }
    checkWin(a) {
        if (a === 100) {
            this.won = true;
        }
    }
}
exports.default = Player;
