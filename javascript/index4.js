
let firstCard = getRandomCard()
let secondCard = getRandomCard()
//array -  ordered list of items
let cards = [firstCard,secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""


let messageEL=document.getElementById("message-el")
let sumEl= document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


function startgame(){
    rendergame()
}
function rendergame() {
    //render out firstCard and secondCard
    cardsEl.textContent = "Cards:"
    for(let i=0 ; i< cards.length;i++){
        cardsEl.textContent +=cards[i] + " "
    }
    //render out ALL the cards we have
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum == 21) {
        message = "wohoo! You've got Blackjack!"
        hasBlackJack=true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
   messageEL.textContent = message
}

function newCard() {
    console.log("Drawing a new card from the deck !")

    let card= getSelection()
    sum += card
    //push the card to the cards array
        cards.push(card)
    console.log(cards)
    rendergame()
}
