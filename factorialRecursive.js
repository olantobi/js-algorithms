function factorial(num) {
    if (num === 0)
        return 1;

    return num * factorial(num-1);
}

// var num = 5;

// console.log(num, '! = ', factorial(num));