var characters = require('../data/characters').data.results;
var counter = 0;


// Problem 1
console.log(++counter, 'Print out every name to the terminal.');

characters.forEach(function (char) {
  console.log(char.name);
});


// Problem 2
console.log(++counter, 'Get a list of every character and their ID, as an object.');

var solution = characters.map(function (char) {
  var obj = {};
  obj[char.name] = char.id;

  return obj;
});

console.log(solution);


// Problem 3
console.log(++counter, 'Get a list of every character and their description, as an object. Remove any characters without a description.');

var solution = characters.filter(function (char) {
  return char.description;
}).map(function (char) {
  var obj = {};
  obj[char.name] = char.description;
  return obj;
});

console.log(solution);


// Problem 4
console.log(++counter, 'Return an array of all the names of the comics "Adam Warlock" has been in.');

var solution = characters.filter(function (char) {
  return char.name === "Adam Warlock";
})[0].comics.items.map(function (comic) {
  return comic.name;
});

console.log(solution);


// Problem 5
console.log(++counter, 'Return the name of all characters who are "available" in less than 10 comics.');

var solution = characters.filter(function (char) {
  return char.comics.available < 10;
}).map(function (char) {
  return char.name;
});

console.log(solution);