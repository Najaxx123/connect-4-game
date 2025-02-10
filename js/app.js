const gameCell01 = document.querySelector(".game-cell[data-x='0'][data-y='1']")


// Sélectionner toutes les gameCell via un querySelectorAll
// Ecouter les évenements
// Ajouter les jetons jaunes ou rouge
// Changer de joueur
// Mettre à jour le gameBoard

const redCircle = `<img src="./assets/Red Circle.svg" />`
const yellowCircle = `<img src="./assets/Yellow Circle.svg" />`

gameCell01.addEventListener("click", function() {
    gameCell01.innerHTML = redCircle
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
