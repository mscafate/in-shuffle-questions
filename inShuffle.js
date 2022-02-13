//initialize deck
var deck = [];

//create the deck
function createDeck() {
  for (let i = 1; i < 53; i++) {
    deck.push(i);
  }
}

//one shuffle
function inShuffle() {
  const half = Math.ceil(deck.length / 2);
  const firstHalf = deck.slice(0, half);
  const secondHalf = deck.slice(-half);
  const newDeck = [];
  for (let i = 0; i < firstHalf.length; i++) {
    newDeck.push(secondHalf[i]);
    newDeck.push(firstHalf[i]);
  }
  deck = newDeck;
}

//Question 1
function sevenShuffles() {
  for (let i = 1; i < 8; i++) {
    inShuffle();
  }
  document.getElementById("answer-one").innerHTML = deck.indexOf(1);
  document.getElementById("array").innerHTML = deck;
}

//Question 2
function firstToBottom() {
  //var val = 0;
  for (let i = 1; i < 100; i++) {
    inShuffle();
    if (deck[51] === 1) {
      console.log(i);
      document.getElementById("answer-two").innerHTML = i;
      document.getElementById("array").innerHTML = deck;
      console.log(deck);
      break;
    }
  }
}

//Question 3
function firstTouchLast() {
  for (let i = 1; i < 100; i++) {
    inShuffle();
    if (
      deck.indexOf(1) - deck.indexOf(52) === 1 ||
      deck.indexOf(52) - deck.indexOf(1) === 1
    ) {
      console.log(i);
      document.getElementById("answer-three").innerHTML = i;
      document.getElementById("array").innerHTML = deck;
      break;
    }
  }
}

createDeck();
