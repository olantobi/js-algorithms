// const sum = (function() {
//     return function sum(...args) {
//         return args.reduce((a,b) => a+b);
//     };
// })();

// console.log(sum(1,2,3,5));

const reducer = (acc, val) => {
    console.log("Acc: ", acc, " :: Val: ", val);
    return acc + (val * 2);
}

const array1 = [1,2,3,4];

console.log(array1.reduce(reducer, 0));