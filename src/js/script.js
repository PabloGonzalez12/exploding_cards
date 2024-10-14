import { Card } from "./Card.js";

// Function to create the deck and shuffle it
let deck;
var createDeck = function() {

    // Function to shuffle the deck using Fisher-Yates algorithm
    function shuffleDeck(deck) {
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]]; 
        }
        return deck;
    }

    // Generate and shuffle the deck
    deck = shuffleDeck(Card.generateDeck());
};
createDeck(); 

// Create HTML elements for the deck and the game interface
const bodyElement = document.body;
const divElement = document.createElement("div");
divElement.classList.add("container");
bodyElement.appendChild(divElement);

// Create the "Shuffle Deck" button
const buttonElement = document.createElement('button');
buttonElement.classList.add("button");
buttonElement.innerText = "Shuffle Deck";
divElement.append(buttonElement);

// Create elements to display the card
const cardElement = document.createElement('div');
cardElement.classList.add("card");

const iconElement = document.createElement('img');
iconElement.classList.add("icon");

const typeElement = document.createElement('h1');
const valueElement = document.createElement('p');
valueElement.classList.add("value");

// Create the top section of the card
const topElement = document.createElement('div');
const textElement = document.createElement('div');
const descElement = document.createElement('p');
cardElement.append(topElement);
topElement.append(iconElement);
topElement.append(textElement);
textElement.append(typeElement);
textElement.append(descElement);
divElement.append(cardElement);

// Create the center section of the card
const centerElement = document.createElement('div');
const imageElement = document.createElement('img');
cardElement.append(centerElement);
centerElement.append(valueElement);
centerElement.append(imageElement);

// Create the bottom section of the card
const bottomElement = document.createElement('div');
const textElement2 = document.createElement('div');
const typeElement2 = document.createElement('h1');
const descElement2 = document.createElement('p');
const iconElement2 = document.createElement('img');
iconElement2.classList.add("icon");

bottomElement.append(iconElement2);
textElement2.append(typeElement2);
textElement2.append(descElement2);
bottomElement.append(textElement2);
bottomElement.classList.add("bottom");
cardElement.append(bottomElement);

// Initially hide the card
cardElement.classList.add("hidden");

// Create reset button to reshuffle the deck
const resetElement = document.createElement('input');
resetElement.setAttribute('type', 'reset');
resetElement.setAttribute('value', 'Reset deck');
const textReset = document.createElement('h1');

// Event listener to draw a card 
buttonElement.addEventListener('click', function() {
    cardElement.classList.remove("hidden");
    buttonElement.innerText = "Draw Card";
    cardElement.classList.remove("black", "white", "green", "red", "blue");
    textReset.innerHTML = "";

    if (deck.length > 0) {
        const drawnCard = deck.pop();
        
        // Update the card display with the drawn card's details
        cardElement.classList.add(drawnCard.color);
        typeElement.innerText = drawnCard.type;
        valueElement.innerText = drawnCard.value ? `Value: ${drawnCard.value}` : '';
        imageElement.src = drawnCard.img;
        iconElement.src = drawnCard.img;
        descElement.innerText = drawnCard.description;

        typeElement2.innerText = drawnCard.type;
        iconElement2.src = drawnCard.img;
        descElement2.innerText = drawnCard.description;
    } else {
        // If no cards left, display message and show reset button
        textReset.innerText = "No more cards left";
        cardElement.classList.add("hidden");
        divElement.appendChild(textReset);
        divElement.append(resetElement);
        resetElement.classList.remove("hidden");
        buttonElement.classList.add("hidden");
    }
});

// Event listener to reset the deck when the reset button is clicked
resetElement.addEventListener('click', function() {
    createDeck();
    typeElement.innerText = "";
    valueElement.innerText = "";
    resetElement.classList.add("hidden");
    textReset.innerText = "";
    buttonElement.classList.remove("hidden");
    buttonElement.innerText = "Shuffle Deck";
});
