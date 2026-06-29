const removeFromArray = function(arr, ...restArgs) {
  
    for (const arg of restArgs){
        if (!arr.includes(arg)){
            continue;
        }
        let firstIndex = arr.indexOf(arg);
        while(firstIndex !== arr.lastIndexOf(arg)){
            arr.splice(arr.indexOf(arg), 1);
        }
        arr.splice(arr.indexOf(arg), 1);
    }
    return arr; 
    
};

// Do not edit below this line
module.exports = removeFromArray;
