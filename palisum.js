var palindromeChainLength = function(n) {
  
    let counter = 0;
    
    while (!isPalindrome(n.toString())) {
        counter++;
        n = getReverseSum(n);
      }
    
    return counter;
  };
  
  function getReverseSum(n) {
      let nString = n.toString();  
      let nReverse = nString.split('').reverse().join('');
      let sum = n + parseInt(nReverse);

      return sum;
  }
  
  function isPalindrome(text) {
      var textArr = text.split('');
      if (text === textArr.reverse().join(''))
          return true;
      else 
          return false;
  }
  
  let val = palindromeChainLength(8); 
  console.log("Val: "+val);