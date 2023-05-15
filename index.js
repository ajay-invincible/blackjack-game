// variable to enter and exit game
let outGame = document.querySelector("#out-game")
let inGame = document.querySelector("#in-game")

// variable to set player name
let playerName
let playerEl = document.getElementById("player-el")

// variable for cards and sum element
let cards = []
let cardsEl = document.getElementById("cards-el")
let sum = 0
let sumEl = document.getElementById("sum-el")

// variable for alive in game and has blackjack
let isAlive = false
let hasBlackJack = false

// message showing element
let messageEl = document.getElementById("message-el")

// new card button selection
let newBtn = document.querySelector("#new-btn")

// this will start the game
function startGame() {
    playerName = document.getElementById("player-name").value
    if (playerName == "") {
        alert("Please enter your name to start the game!")
    } else {
        playerEl.textContent = "Player Name : " + playerName
        outGame.style.display = "none"
        inGame.style.display = "block"
        messageEl.textContent = "Draw Cards!"
    }
}

// to draw cards from deck
function drawCards() {
    isAlive = true
    document.getElementById("draw-btn").style.display = "none"
    document.getElementById("new-btn").style.display = "block"

    // creating 2 card variables assigning their value using randomCard() function
    let card1 = getRandomCard()
    let card2 = getRandomCard()

    // assigning cards value
    cards = [card1, card2]

    // assigning sum of cards value
    sum = card1 + card2
    
    renderGame()
}

// rendering cards on display
function renderGame() {
    cardsEl.textContent = "Cards : "

    // assigning cards value in HTMl element
    for(let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    // assigning sum value in HTMl element
    sumEl.textContent = "Sum : " + sum

    // sum of cards and message display
    checkSum()
}

// to generate random cards
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if(randomNumber > 10) {
        return 10;
    } else if(randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
}

// checks sum and displays message
function checkSum() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack! You Won!"
        hasBlackJack = true
        newBtn.style.display = "none"
    } else {
        message = "You're out of the game!"
        isAlive = false
        newBtn.style.display = "none"
    }
    messageEl.textContent = message
}

// to restart the game with same player
function restart() {
    isAlive = true
    hasBlackJack = false
    cardsEl.textContent = "Cards : "
    sumEl.textContent = "Sum : "
    document.getElementById("draw-btn").style.display = "block"
    messageEl.textContent = "Draw Cards!"
 }

// draw a new card
function newCard() {
    if(isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        cards.push(card)
        sum += card
        renderGame()
    }
}


// to exit the game
function exit() {
    location.reload()
}