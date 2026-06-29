const sumAll = function(...args) {
    args.sort((a,b) => a -b);
    if (args[0] < 0 || !Number.isInteger(args[0]) || !Number.isInteger(args[1])){
        return "ERROR";
    }
    let a = args[0];
    let b = args[1];
    let sum = 0;
    while (a <= b){
        sum += a;
        a++;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
