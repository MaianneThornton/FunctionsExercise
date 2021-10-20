// 1
function spookyGhost() {
  console.log(`Boo!!!`);
}
spookyGhost();

// 2
candy = (goal) => {
  console.log(`Get Candy`);
  console.log(`Get Candy`);
  console.log(`Get Candy`);
  console.log(`Get Candy`);
}
candy();

// 3
function werewolf (a, b){
  if (a === `Full` && b === `Moon`){
  console.log(`ARH-WOOO!`);
  } else {
    console.log(``);
  }
  
}
werewolf(`Full`, `Moon`);
// werewolf();

// 4
halloween = () => `October 31st`;
console.log(halloween());

// 5 
function isEnoughCandy (pieces) {
 if (pieces >= 31) {
   return true;
 } else if (pieces < 31) {
   return false;
 }
};
// isEnoughCandy(1);
// isEnoughCandy(31);

// 6
// candyCounter = nums => {
//   ([1, 2, 3]);
//   for (i = 0; i < num.length; i++){
//     total = total + num[i];
// }
// nums();


// 7
function mansion () {
const hauntedMansion = `Welcome, foolish mortals, to the Haunted Mansion!`
console.log(hauntedMansion);
}
mansion();

// 8
ghostbusters = () => 
console.log(`Who You Gonna Call?`);
ghostbusters();

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

// 11b
const upperCostumes = costumes.map(costumes => costumes.toUpperCase()); 
console.log(upperCostumes);


