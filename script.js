//Variables for the game
let player = {
    name: "Player",
    chips: 100
}
let cards = [];
let total = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageTag = document.getElementById("message");
let totalTag = document.getElementById("total");
let cardsTag = document.getElementById("cards");
let playerTag = document.getElementById("player");

playerTag.textContent = player.name + ": $" + player.chips;

//Functions for the BlackJackGame
//Random card draw
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if(randomNumber > 10) {
        return 10;
    }
    else if (randomNumber === 1) {
        return 11;
    }
    else  if (randomNumber <= 10) {
        return randomNumber;
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    total = firstCard + secondCard;
    renderGame();
}
//game logic
function renderGame() {
    cardsTag.textContent = "Cards: ";
    let i;
    for(i = 0; i < cards.length; i++) {
        cardsTag.textContent += cards[i] + " ";
    }

    totalTag.textContent = "Total: " + total;
    if(total < 21) {
        message = "Do you want to draw a new card?";
    }
    else if(total === 21) {
        message = "BlackJack!";
        hasBlackJack = true;
    }
    else {
        message = "You Busted! Game Over";
        isAlive = false;
    }
    messageTag.textContent = message;
}
//new card draw
function newCard() {
    if(isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        total += card;
        cards.push(card);
        renderGame();
    }
}