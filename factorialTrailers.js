
function zeros (n)
{
 let counter=0;
 for(let i=5; n/i>1; i*=5){
   counter+=Math.floor(n/i);
   
 }
 return counter;
}

var trailers = zeros(24);

console.log("Trailers: ", trailers);