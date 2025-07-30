/**
 * The Rock 🪨, Paper 🧻, or Scissors ✂️ Game
 * This game will be played between the computer and human. Once Human will select Rock, Paper, or Scissors
 * and in the next turn the computer will select Rock, Paper, or Scissors.
 * The Winner will be selected based on these rules:
 * - Rock can Break Scissors => Rock Wins
 * - Paper can wrap Rock => paper Wins
 * - Scissors can cut Paper => Scissors Wins
 * Ask the input from user and randomly select a computer selection to continue the game.
 */

// generate a random number
// function randomNumber() {
//   return Math.floor(Math.random() * 3);
// }

// function gamePlay() {
//   try {
//     let userSelection = "Rock";
//     let computerChoices = ["rock", "paper", "scissor"];
//     let computerSelection = computerChoices[randomNumber()];

//     userSelection = userSelection.toLowerCase();
//     if (
//       (userSelection === "rock" && computerSelection === "scissor") ||
//       (userSelection === "paper" && computerSelection === "rock") ||
//       (userSelection === "scissor" && computerSelection === "paper")
//     ) {
//       console.log("Oh Ho... User Wins!!!!");
//     } else if (
//       (userSelection === "scissor" && computerSelection === "rock") ||
//       (userSelection === "rock" && computerSelection === "paper") ||
//       (userSelection === "paper" && computerSelection === "scissor")
//     ) {
//       console.log("Oh Ho... Computer Wins!!!!");
//     } else if (userSelection === computerSelection) {
//       console.log("The Game is a Tie");
//     } else {
//       console.log("Please check the input, We didn't understand it.");
//     }
//     console.log(` User  vs  Computer`);
//     console.log(` ${userSelection}  vs  ${computerSelection}`);
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// ## 1. Change the RPS Project
// Change the if-else to switch-case .

// function gamePlay() {
//   try {
//     let userSelection = "Rock";
//     let computerChoices = ["rock", "paper", "scissor"];
//     let computerSelection = computerChoices[randomNumber()];

//     userSelection = userSelection.toLowerCase();

//     switch (`${userSelection}:${computerSelection}`) {
//       case "rock:scissor":
//       case "paper:rock":
//       case "scissor:paper":
//         console.log("Oh Ho... User Wins!!!!");
//         break;
//       case "scissor:rock":
//       case "rock:paper":
//       case "paper:scissor":
//         console.log("Oh Ho... Computer Wins!!!!");
//         break;
//       case "scissor:scissor":
//       case "rock:rock":
//       case "paper:paper":
//         console.log("The Game is a Tie");
//         break;
//       default:
//         console.log("Please check the input, We didn't understand it.");
//     }
//     console.log(` User  vs  Computer`);
//     console.log(` ${userSelection}  vs  ${computerSelection}`);
//   } catch (error) {
//     console.error(error.message);
//   }
// }
// gamePlay();

/**
 * Let us play a number guessing game.
 * You will ask user for a number between 1 to 10. Once user will enter a number,
 * you will tell user if the entered number is lower or higher. With this information,
 * user will change the number and finally guess the right number. You also need to show
 * the number of attempts made by users to rach to this right guess.
 */

// let Max_number = 10;
// let Min_Number = 1;
// function startSecretNumberGame() {
//   let secretNumber = Math.floor(Math.random() * 10 + 1);
//   console.log(secretNumber);
//   let attempts = 0;
//   let lives = 10;

//   while (attempts < lives) {
//     try {
//       let userGuessing = prompt("Guess a number between 1 to 10");
//       userGuessing = Number(userGuessing);
//       if (
//         typeof userGuessing !== "number" ||
//         isNaN(userGuessing) ||
//         userGuessing < Min_Number ||
//         userGuessing > Max_number
//       )
//         throw new Error("invalid input");

//       attempts++;
//       if (userGuessing === secretNumber) {
//         console.log(
//           `OH..Ya! You win! You guessed the right number in ${attempts} attempt(s).`
//         );
//         break;
//       } else if (userGuessing < secretNumber) {
//         console.log("Your guess is too low.");
//       } else {
//         console.log("Your guess is too high.");
//       }

//       if (attempts === lives) {
//         console.log(`Sorry, you lost! The correct number was ${secretNumber}.`);
//       }
//     } catch (error) {
//       console.error("Error:", error.message);
//     }
//   }

//   let playAgain = prompt("do you wan play again enter Yes/No") || "no";
//   console.log(playAgain);
//   if (playAgain.toLowerCase() === "yes") {
//     startSecretNumberGame();
//   } else {
//     console.log("see you latter");
//   }
// }

// startSecretNumberGame();
