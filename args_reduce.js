const sum = (function() {
    return function sum(...args) {
        return args.reduce((a,b) => a+b);
    };
})();

console.log(sum(1,2,3,5));