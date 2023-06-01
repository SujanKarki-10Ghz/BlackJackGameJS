let cards = []; //array - ordered list of items
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

const messageEl = document.getElementById("message-el");
const sumEl = document.querySelector("#sum-el");
const cardEl = document.querySelector(".card-el");
let player = {
  //objects - store data in-depth - composite / complex data types
  name: "Per", // key : value pairs
  chips: 145,
  //   sayHello: function(){
  //     console.log("Heisen!");
  //   } // methods on objects.
};

const playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ":$" + player.chips;

function getRandomCards() {
  let randomNumbers = Math.ceil(Math.random() * 13); //math objects
  /*math.random gives number between 0 and 1 and * 10 gives number from 0 - 9.99999. Math.ceil rounds up the number*/
  if (randomNumbers > 10) {
    // conditional statements
    return 10;
  } else if (randomNumbers === 1) {
    //comparison operators
    return 11;
  } else return randomNumbers;
}

function renderGame() {
  cardEl.textContent = "Cards:";
  for (let i = 0; i < cards.length; i++) {
    //loops
    cardEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got BlackJack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game";
    isAlive = false;
  }
  messageEl.textContent = message;
}
function startGame() {
  isAlive = true;
  let firstCard = getRandomCards();
  let secondCard = getRandomCards();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    //logical operator
    let thirdCard = getRandomCards();
    sum += thirdCard;
    cards.push(thirdCard);
    renderGame();
  }
}

// let person = {
//     name: "per",
//     age: 12,
//     country: "Nepal",
//   };

//   function logData() {
//     let string = `${person.name} is ${person.age} years old and lives in ${person.country}`; //template literals
//     console.log(string);
//   }
//   logData();

// let largestCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];
// for(let i = 0; i<largestCountries.length; i++){
//   console.log(largestCountries[i]);
// }

//array methods pop, push, shift and unshift
// let largestCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];
// largestCountries.pop();
// largestCountries.push("Pakistan");
// largestCountries.shift();
// largestCountries.unshift("China");
// console.log(largestCountries);

//Logical operator use
// let dayOfMonth= 13;
// let weekday = "Friday";

// if(dayOfMonth ===13 && weekday ==="Friday"){
//   console.log("😱");
// }

// let hands = ["rock", "paper", "scissor"];

// function getRandom() {
//   let random = Math.floor(Math.random()*3);
//   return hands[random];
// }
// getRandom();
