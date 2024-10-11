import { Card } from "./Card.js"

// Crear la baraja y barajarla
let deck;
var createDeck = function() {
    function shuffleDeck(deck) {
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
        return deck;
    }
    deck = shuffleDeck(Card.generateDeck());
};
createDeck();


// Crear el html
const bodyElement = document.body;
const divElement = document.createElement("div");
divElement.classList.add("container");
bodyElement.appendChild(divElement);

const buttonElement = document.createElement('button');
buttonElement.classList.add("button");
buttonElement.innerText = "Shuffle Deck";
divElement.append(buttonElement);

const cardElement = document.createElement('div');
cardElement.classList.add("card");
const iconElement = document.createElement('img');
iconElement.classList.add("icon");

const typeElement = document.createElement('h1');
const valueElement = document.createElement('p');
valueElement.classList.add("value");



const topElement = document.createElement('div');
const textElement = document.createElement('div');
const descElement = document.createElement('p');

cardElement.append(topElement);
topElement.append(iconElement);
topElement.append(textElement);
textElement.append(typeElement);
textElement.append(descElement);
divElement.append(cardElement);


const centerElement = document.createElement('div');
const imageElement = document.createElement('img');
cardElement.append(centerElement);
centerElement.append(valueElement);
centerElement.append(imageElement);


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


cardElement.classList.add("hidden");


const resetElement = document.createElement('input');
resetElement.setAttribute('type', 'reset');
resetElement.setAttribute('value', 'Reset deck');
const textReset = document.createElement('h1');



// Funcion para mostrar la siguiente carta
buttonElement.addEventListener('click', function() {
    cardElement.classList.remove("hidden");
    buttonElement.innerText = "Draw Card";
    cardElement.classList.remove("black", "white", "green", "red", "blue");
    textReset.innerHTML = "";
    if (deck.length > 0) {
        const drawnCard = deck.pop();
        cardElement.classList.add(drawnCard.color);
        
        typeElement.innerText = drawnCard.type;
        valueElement.innerText = drawnCard.value ? `Value: ${drawnCard.value}` : '';
        imageElement.src = drawnCard.img;
        iconElement.src = drawnCard.img;
        descElement.innerText = drawnCard.description;
        
        typeElement2.innerText = drawnCard.type
        iconElement2.src = drawnCard.img;
        descElement2.innerText = drawnCard.description;
    } else {
        textReset.innerText = "No more cards left";
        cardElement.classList.add("hidden");
        divElement.appendChild(textReset);
        divElement.append(resetElement)
        resetElement.classList.remove("hidden");
        buttonElement.classList.add("hidden");
    }
});



// Resetear la baraja
resetElement.addEventListener('click', function() {
    createDeck();
    typeElement.innerText = "";
    valueElement.innerText = "";
    resetElement.classList.add("hidden");
    textReset.innerText = "";
    buttonElement.classList.remove("hidden");
    buttonElement.innerText = "Shuffle Deck";
});