import inquirer from "inquirer";
const choices = ["Rock", "Paper", "Scissor"];
const getPlayerChoice = async (playerNumber) => {
    const player = await inquirer.prompt([
        {
            name: "name",
            type: "list",
            message: `Player${playerNumber} Your Turn to Trick: `,
            choices: choices,
        },
    ]);
    return player;
};
const player1 = await getPlayerChoice(1);
const player2 = await getPlayerChoice(2);
if (player1.name === player2.name) {
    console.log("It's a tie!");
}
else if ((player1.name === "Rock" && player2.name === "Scissor") ||
    (player1.name === "Scissor" && player2.name === "Paper") ||
    (player1.name === "Paper" && player2.name === "Rock")) {
    console.log("Player1 is Win!");
}
else {
    console.log("Player2 is Win!");
}
