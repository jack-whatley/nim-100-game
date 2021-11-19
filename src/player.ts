class Player {

    name: string;
    won: boolean

    constructor(name: string, won: boolean) {

        this.name = name;
        this.won = won;

    }

    checkWin(a: number) {

        if (a === 100) {

            this.won = true;

        }

    }

}

export default Player;
