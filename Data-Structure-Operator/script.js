'use strict';
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (StarterIndex, MainIndex) {
    return [this.starterMenu[StarterIndex], this.mainMenu[MainIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderDelhivery: function ({
    time,
    starterIndex,
    address,
    mainIndex,
  }) /* object desturucture  */ {
    console.log(
      `Order is delivered! at ${time} on ${address} and the ${this.starterMenu[starterIndex]} and the menu is ${this.mainMenu[mainIndex]}`
    );
  },
  // pizzaIngredient: function (i1, i2, i3) {
  //   console.log(`Pizza is made up of using ${i1}, ${i2} and ${i3}`);
  // },
  // orderPizza: function (mainIntg, ...otherIntg) {
  //   console.log('Main ingredient ' + mainIntg);
  //   console.log('Other integredient ' + otherIntg);
  // },
};

// restaurant.orderPizza('mashroom', 'spinach', 'cheeze', 'sauce');
//....................................................

// let ingredient = [
//   prompt('Ingredient 1?'),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredient);
// restaurant.pizzaIngredient(...ingredient);

restaurant.orderDelhivery({
  time: '11:20',
  starterIndex: 2,
  address: 'Dehuroad',
  mainIndex: 1,
});

console.log(restaurant.orderDelhivery);

// Desturcting the objects

const { name, categories, mainMenu } = restaurant;
console.log(name, categories, mainMenu);

// changed the default name
const { name: RestroName, categories: Cata, mainMenu: main } = restaurant;
console.log(RestroName, Cata, main);

// set default values
const { menu: Menus = [], openingHours: hours = [] } = restaurant;
console.log(Menus, hours);

//mutating variable or switching variables
let a = 111;
let b = 99;
let c;
const obj = { a: 123, b: 234, c: 789 };
({ a, b, c } = obj);
console.log(a, b);

// nested objects
const {
  fri: { open: o, close: cl },
} = restaurant.openingHours;
console.log(o, cl);

//......................................
/*
const arr = [1, 2, 3];
//Destructuring
const [x, y, z] = arr;
console.log(x, y, z);

//......................................

console.log(restaurant.order(1, 2));
const [starterM, mainM] = restaurant.order(1, 2);

//......................................
//Desturturing above array
console.log(starterM, mainM);

//......................................
//Default value
let arrEl = [8, 9];
//default value assigned here
const [p = 1, q = 1, r = 1] = arrEl;
console.log(p, q, r);

//......................................
// nested array
const arrEl1 = [1, 2, [6, 7]];
const [i, , k, l] = arrEl1;
console.log(i, k, l);

*/

// Spread Operator -> copy array, merge array, worked like destuructung objects ( use in case of array or pass as an argu. to function). use at right hand side.
let arr = [1, 2, 3];
let newArr = [...arr, 9, 0];
console.log(newArr);

let NewArr = [...newArr, 0, 2, 4, 3];
console.log(...NewArr);

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

const newRestro = { foundedIn: 1998, ...restaurant, owner: 'Pratiksha' };
console.log(newRestro);

// Rest operator -> use at left hand side. Pack element in an array.

const arrR = [1, 2, 3, 4];
const [aR, bR, ...others] = arrR;
console.log(aR, bR, others);

const [Pizza, Risotto, ...otherFoods] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(Pizza, Risotto, otherFoods);

//rest operator used
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(1, 2, 3, 4);
add(1, 2);

// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:
1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1
const [player1, player2] = game.players;
console.log(player1, player2);

// 2
const [gk, ...fieldPlayers] = player1;
console.log(gk);
console.log(fieldPlayers);

//3
const allPlayers = [...player1, ...player2];
console.log(allPlayers);
//4
const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);
//5
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//6
const printGoals = function (players) {
  players.forEach((element) => {
    console.log(element);
  });
  console.log(`${players.length} goals were scored`);
};
printGoals(...game.players);

//7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

const menuM = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const [i,el] of menuM.entries()) {
  console.log(`${i + 1}: ${el}`);
}
