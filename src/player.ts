class Player {

    name: string;
    number: number;
    won: boolean

    constructor(name: string, number: number, won: boolean) {

        this.name = name;
        this.number = number;
        this.won = won;

    }
    
    addNumber(a: number) {

        this.number += a;

    } 
    
    checkWin() {

        if (this.number === 100) {

            this.won = true;

        }

    }

}

export default Player;
