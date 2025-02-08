const input = require('prompt-sync')()

function main() {
    const choices = ['rock', 'paper', 'scissors'];
    const user = input('Pick "[rock, paper, scissors]": ').toLowerCase();

    if (!choices.includes(user)) {
        console.log('Invalid input. Please pick rock, paper, or scissors.');
        return;
    }

    const com_random = Math.floor(Math.random() * 3);
    const computer = choices[com_random];

    console.log(`You picked: ${user}`);
    console.log(`Computer picked: ${computer}`);

    const result = logic(user, computer);
    console.log(`Result: ${result}`);
}

function logic(player, comp) {
    if (player === comp) {
        return 'Tie';
    }

    const winConditions = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper',
    };

    if (winConditions[player] === comp) {
        return 'player win';
    } else {
        return 'comp win';
    }
}

while (true) {
    main();
    const playAgain = input('Do you want to play again? (yes/no): ').toLowerCase();
    if (playAgain !== 'yes') break;
}

console.log('Thanks for playing!');
