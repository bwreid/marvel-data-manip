var mystique = require('../data/mystique').data.results;
var counter = 0;


// Problem 1
console.log(++counter, 'For "Mystique", return the name of the all stories where the type is "cover".');

var solution = mystique.map(function (inst) {
  return inst.stories.items
}).map(function (comics) {
  if ( !comics[0] ) { return []; }

  return comics.filter(function (comic) {
    return comic.type === "cover";
  }).map(function (comic) {
    return comic.name;
  })
}).reduce(function (prev, next) {
  return prev.concat(next)
});

console.log(solution);


// Problem 2
console.log('\n' + ++counter, 'Return an array of all the thumbnails for the characters as full paths.');

var solution = mystique.map(function (char) {
  return char.thumbnail.path + '.' + char.thumbnail.extension;
});

console.log(solution);


// Problem 3
console.log('\n' + ++counter, 'Were any of the resources modified after the year 2000? Create a function that returns true or false to evaluate if so.');

var solution = mystique.some(function (char) {
  return new Date(char.modified) > new Date('2000','1','1');
});

console.log(solution);