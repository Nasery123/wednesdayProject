const prompt = require("prompt-sync")();

const rows = 3;
const cols = 3;
const symbols_count = {
    A: 2,
    B: 4,
    C: 6,
    D: 8
}
const symbolValues = {
    A: 5,
    B: 4,
    C: 3,
    D: 2
}





const deposit = () => {
    while (true) {
        const depositAmount = prompt("enter your amount: ")
        const number = parseFloat(depositAmount);

        if (isNaN(number) || number <= 0) {
            console.log("please try a valid number")
        } else {
            return number;
        }
    }
};
const getNumberOfLines = () => {
    while (true) {
        const lines = prompt("enter the number of lines from (1-3:");
        const numberOfLines = parseFloat(lines);

        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("Invalid number");

        } else {
            return numberOfLines;
        }
    }
};
const getBet = (balance, lines) => {
    while (true) {
        const bet = prompt("enter your betper line: ");
        const numberBet = parseFloat(bet)

        if ((isNaN(numberBet)) || numberBet <= 0 || numberBet > balance / lines) {
            console.log("no avialable balance");
        } else {
            return numberBet;
        }
    }
};

const spin = () => {
    const symbols = [];
    for (const [sym, count] of Object.entries(symbols_count)) {
        for (let i = 0; i < count; i++) {
            symbols.push(sym);
        }
    }
    const reels = [];
    for (let i = 0; i < cols; i++) {
        reels.push([])
        const reelSym = [...symbols];
        for (let j = 0; j < rows; j++) {
            const randomIndex = Math.floor(Math.random() * reelSym.length);
            const selected = reelSym[randomIndex];
            reels[i].push(selected);
            reelSym.splice(randomIndex, 1);
        }
    }
    return reels;

}
const reels = spin();
console.log(reels)

let balance = deposit();
const numberOFlines = getNumberOfLines();
const bet = getBet(balance, numberOFlines);
