const mode = (dataArray) => dataArray.reduce((a, b, i, arr) =>
    (arr.filter(v => v === a).length > arr.filter(v => v === b).length ? a 
    : arr.filter(v => v === a).length < arr.filter(v => v === b).length ? a : a+','+b), null);

const arrayMode = (dataArray) => dataArray.reduce((a, b, i, arr) =>
    (arr.filter(v => v === a).length >= arr.filter(v => v === b).length ? a : b), null);

const testArray = ['Apple', 'Pear', 'Apple', 'Orange', 'Mango', 'Mango'];

let md = mode(testArray);
console.log(md);

// function timezonesToRange(timezones) {
//     const tally = {};
//     timezones.map((tz) => tally.hasOwnProperty(tz) ? tally[tz]++ : tally[tz] = 1);
    
//     return tally;
// }

// let tally = timezonesToRange(testArray);

// Math.max(tally.values);
// // console.log(Object.entries(tally));
// const results = filter(x => x[1] === Math.max(x[1]));

// console.log(results);
// // console.log(Object.values(tally));
