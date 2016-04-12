var series = require('../data/series').data.results;
var counter = 0;


// Problem 1
console.log(++counter, 'Return an object for all "creators" on "Cable (1993 - 2002)". The keys should be the "role" assigned to each creator and the value is an array of the names.');

var solution = series.filter(function (serie) {
  return serie.title === "Cable (1993 - 2002)";
})[0].creators.items.reduce(function (acc, creator) {
  if ( acc[creator.role] ) {
    acc[creator.role].push(creator.name);
  } else {
    acc[creator.role] = [creator.name];
  }
  return acc;
}, {});

console.log(solution)


// Problem 2
console.log(++counter, 'Return an object where the keys are the series\' "title" and the value is an array of the characters in that series.');

var solution = series.reduce(function (acc, serie) {
  acc[serie.title] = serie.characters.items.map(function (char) {
    return char.name;
  });
  return acc;
}, {});

console.log(solution);


// Problem 3
console.log(++counter, 'Find which series started before the year 2000 which has the most available comics.');

var solution = series.filter(function (serie) {
  return serie.startYear < 2000;
}).reduce(function (serie1, serie2) {
  if ( serie1.comics.available > serie2.comics.available ) {
    return serie1;
  } else {
    return serie2;
  }
}).title;

console.log(solution);