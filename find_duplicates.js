
function findDuplicates(arr) {
    
    let store = {};
    //let objStore = {};    
        
    for (let i=0; i<arr.length; i++) {                
                 
        if (!store[arr[i]]) {
            store[arr[i]] = 1;
        }
        else {            
            store[arr[i]] += 1;
        }                        
    }
    
    Object.keys(store).forEach((prop) => {
        if (store[prop] > 1)
            console.log(prop, ":", store[prop])
    });
    
   /*           
    for (let i=0; i<store.length; i++) {        
        if (store[i] && store[i] > 1) {
            console.log(i, ":", store[i]);
        }        
    }    
        */
    
}

var arr = [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,1,2,3];

findDuplicates(arr);