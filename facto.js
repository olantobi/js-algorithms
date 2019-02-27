function zeros (n) {
  
    var fact = BigInt(factorial(n));
    console.log(fact);
    let factString = fact.toString();
    console.log(factString);
    let zeroCounter = 0;  
    
    for (var i=factString.length-1; i>0; i--) {
        if (factString[i] !== '0') {
          break;
        } 
      
       zeroCounter++;
    }
    
    return zeroCounter;
  }
  
  function factorial(num) {
    if (num === 0) {
      return 1;
    }
    
    return BigInt(num) * BigInt(factorial(num-1));
  }
  
  let count = zeros(1000);
  console.log("CCount: "+count);