function factorial(num) {
    if (num === 0)
        return 1;

    // return num * factorial(num-1);
    return BigInt(num) * BigInt(factorial(num-1));
}

function zeros (n)
{
 let counter=0;
 for(let i=5; n/i>1; i*=5){
   counter+=Math.floor(n/i);
   
 }
 return counter;
}


function trailerCalculator (num)
{
    if (num < 0)
        return -1;

 let count = 0;

 for(let i=5; num/i >= 1; i*=5) { 
     count += num/i;
 }

 return count;
}

let num = 25;
var fact = BigInt(factorial(num));

var zer = zeros(num);

var trailer = trailerCalculator(num);

// let trailers = fact / 10;
console.log("Recursive:");
console.log(fact);

console.log("Algo:");
console.log(zer);

console.log("Trailer:");
console.log(trailer);