// Advanced arrays
// https://sdras.github.io/array-explorer/

const array = [1, 2, 3, 4];

// you can do for (loops) and forEach (loop)

const newArray = array.forEach((num) => {
    num * 2;
})

console.log(newArray); // here nothing really happens besides returning undefined and array is still the same

const array = [1, 2, 3, 4];
const double = [];

const newArray = array.forEach((num) => {
    double.push(num * 2);
})

console.log('forEach', double);

// map, filter, reduce

// map = forEach, difference is 'map' expects a return. 'Map' changes the array, with 'forEach' you create your own array. 'Map' is simpler and you don't mutate the data

const mapArray = array.map((num) => {
    return num * 2;
})

console.log('map', mapArray);

const mapArray = array.map((num) => {
    return num * 2;
})

// ===

const mapArray = array.map(num => num * 2);

// filter (returns a NEW array)

const filterArray = array.filter(num => {
    return num > 5;
})

// ===

const filterArray = array.filter(num => num > 5);
const filterArray = array.filter(num => num < 5);
const filterArray = array.filter(num => num === 5);

// reduce (returns a NEW array)

const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num
}, 0);