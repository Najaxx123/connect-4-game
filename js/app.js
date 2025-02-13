const gameCells = document.querySelectorAll(".game-cell");

// Sélectionner toutes les gameCell via un querySelectorAll
// Ecouter les évenements
// Ajouter les jetons jaunes ou rouge
// Changer de joueur
// Mettre à jour le gameBoard

const redCircle = `<img src="./assets/counter-red-large.svg" />`;
const yellowCircle = `<img src="./assets/counter-yellow-large.svg" />`;


let currentPlayer = "r"
let gameBoard = [
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""]
];



gameCells.forEach(function ($gameCell) {
  $gameCell.addEventListener("click", function () {
    const dataX = $gameCell.getAttribute("data-x");

    for (let i = 5; i >= 0; i--) {
      if (gameBoard[i][dataX] === "") {
        console.log("C'est vide");

        gameBoard[i][dataX] = currentPlayer

        const $selectedCell = document.querySelector(`.game-cell[data-x='${dataX}'][data-y='${i}']`)
        

        if (currentPlayer === "r") {
          $selectedCell.innerHTML = redCircle
          currentPlayer = "y"
        } else {
          $selectedCell.innerHTML = yellowCircle
          currentPlayer = "r"
        }
 
        return;
      } else {
        console.log("C'est pas vide" + gameBoard[i][dataX]);
      }
    }


  });
});
