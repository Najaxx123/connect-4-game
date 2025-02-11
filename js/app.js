const gameCell01 = document.querySelector(".game-cell[data-x='0'][data-y='1']")
const gameCells = document.querySelectorAll(".game-cell")


// Sélectionner toutes les gameCell via un querySelectorAll
// Ecouter les évenements
// Ajouter les jetons jaunes ou rouge
// Changer de joueur
// Mettre à jour le gameBoard

const redCircle = `<img src="./assets/counter-red-large.svg" />`
const yellowCircle = `<img src="./assets/Yellow Circle.svg" />`

gameCell01.addEventListener("click", function() {
    gameCell01.innerHTML = redCircle
})

gameCells.forEach(function($gameCell) {
    $gameCell.addEventListener("click", function() {
        $gameCell.innerHTML = redCircle
    })
})
let gameBoard = [
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""]
]

const x = 0

  gameCells.forEach(function($gameCell) {
    $gameCell.addEventListener("click", function() {

        for (let i = 5; i >= 0; i--) {
            if (gameBoard[i][x] === "") {
              console.log("C'est vide");
            } else {
              console.log("C'est pas vide")
            }
          }
    })
  })
