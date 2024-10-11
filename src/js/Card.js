export class Card {
    constructor(type, img = null, description, color, value = null) {
        this.type = type;
        this.value = value;
        this.img = img;
        this.color = color;
        this.description = description;
    }



    static generateDeck() {
        const deck = [];
        
        for (let i = 0; i < 4; i++) {
            var image = "./src/img/bomb.png";
            var description = "If you draw one and don't have a Defuse card, you lose.";
            var colorV = "black";
            deck.push(new Card('Bomb', image, description, colorV));
        }
    
        for (let i = 0; i < 6; i++) {
            var image = "./src/img/desfuse.png";
            var description = "You can keep all the ones you draw in your hand.";
            var colorV = "green";
            deck.push(new Card('Defuse', image, description, colorV));
        }
    
        for (let i = 0; i < 10; i++) {
            var image = "./src/img/skipTurn.png";
            var description = "They allow you to avoid drawing a card.";
            var colorV = "blue";
            deck.push(new Card('Skip turn', image, description, colorV));
        }
    
        for (let i = 0; i < 5; i++) {
            var image = "./src/img/nope.png";
            var description = "If an opponent wants to skip a turn, you can cancel it using this card; both are discarded.";
            var colorV = "red";
            deck.push(new Card('Nope', image, description, colorV));
        }
    
        for (let i = 0; i < 35; i++) {
            const value = Math.floor(Math.random() * 10) + 1; 
            var image = "./src/img/point.png";
            var description = "When generated, they can have a random value between 1 and 10. The one with the most points wins.";
            var colorV = "white";
            deck.push(new Card('Points', image, description, colorV, value));
        }
    
        return deck;
    }
}