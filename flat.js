const arr = [1, 2, [3, 4]];

const numArray = [1, 2, [3, 10, [11, 12]], [1, 2, [3, 4]], 5, 6];

// // To flat single level array
// const flattened1 = arr.flat();
// console.log(flattened1);

// // is equivalent to
// const flattened2 = arr.reduce((acc, val) => acc.concat(val), []);
// // [1, 2, 3, 4]
// console.log(flattened2);

// // or with decomposition syntax
// const flattener = arr => [].concat(...arr);
// // const flattened3 = arr.reduce(flattener);
// // console.log(flattened3);

console.log(numArray.flat());

function flattenArray(data) {
    console.log("Flatten called again");
    return data.reduce((acc, value) => {
      return acc.concat(Array.isArray(value) ? flattenArray(value) : value);
    }, []);
}

console.log(flattenArray(arr));