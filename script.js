// 1
function spookyGhost() {
  console.log(`Boo!!!`); // Boo!!!
}
spookyGhost();

console.log("========");

// 2
function candy(goal) {
  console.log(goal);
  console.log(goal);
  console.log(goal);
  console.log(goal);
  //OR
  // console.log(goal, goal, goal, goal);

}
candy(`Get Candy`);
/*
Get Candy
Get Candy
Get Candy
Get Candy
*/

console.log("========");

// 3
function werewolf(a, b) {
  if (a === `Full` && b === `Moon`) {
    console.log(`ARH-WOOO!`);
  }

  // Using a Ternary
  // console.log((a === `Full` && b === `Moon`) ? `ARH-WOOO!` : "");

}
werewolf(`Full`, `Moon`); // ARH-WOOO!
werewolf(`Crescent`, `Moon`); // Does NOT display anything in the terminal/console


console.log("========");


// 4
function halloween() {
  return `October 31st`;
}
console.log(halloween()); // October 31st

console.log("========");

// 5 
function isEnoughCandy(pieces) {
  if (pieces >= 31) {
    return true;
  } else {
    return false;
  }

  // USING A TERNARY
  // return (pieces >= 31 ? true : false)
};
console.log(isEnoughCandy(31)); // true
console.log(isEnoughCandy(1)); // false

console.log("========");


// 6
function candyCounter(nums) {
  let total = 0;
  for (i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  return total;

  // USING A FOR OF LOOP
  // let total = 0;
  // for (number of nums) {
  //   total += number;
  // }
  // return total;
}
console.log(candyCounter([1, 2, 3])); // 6


console.log("========");

// 7
const hauntedMansion = function () {
  console.log("Welcome, foolish mortals, to the Haunted Mansion!");
}
hauntedMansion(); // Welcome, foolish mortals, to the Haunted Mansion!

console.log("========");

// 8
ghostbusters = () =>
  `Who You Gonna Call?`;

// USING PARENTHESIS
// ghostbusters = () => (
//   `Who You Gonna Call?`
//   );

console.log(ghostbusters()); // Who You Gonna Call?


// 9
// QUESTION: If a let or const variable is created/declared inside a function, loop, or conditional can the value of it be accessed outside of the function, loop, or conditional?
// NO

// 10
// QUESTION: If a let or const variable is created/declared outside the scope of a function called change and the value of the variable is updated inside the change function, then (assuming the function has been run) could the updated value of the variable be accessed outside of the function
// YES


// 11a
const costumes = [
  "Ghost",
  "Princess",
  "Pirate"
];

console.log("========");

// 11b
const upperCostumes = costumes.map(i => i.toUpperCase());

// Using a Declaration Function
// const upperCostumes = costumes.map(function(i){
//   return i.toUpperCase();
// });

console.log(upperCostumes); // [ 'GHOST', 'PRINCESS', 'PIRATE' ]

console.log("========");

// BONUS SECTION
// 12a
const stephenKingMovies = [
  "The Shining",
  "Christine",
  "It",
  "The Mist",
  "Creepshow",
  "Pet Cemetary"
];
console.log(stephenKingMovies);