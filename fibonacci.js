function fibonacci(count) {
    if (count < 3)
        return 1;
    else
        return fibonacci(count-1) + fibonacci(count-2);
    
}

console.log("Fibonacci: ", fibonacci(50));