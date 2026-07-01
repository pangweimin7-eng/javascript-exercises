const add = function(...args){
  let sum = 0 ; 
  for (const arg of args){
    sum += arg;      

  }
  
  return sum;
}

const subtract = function(num1, ...args) {
  let k = num1; 
  for (const arg of args){
    k -= arg;
  }

  return k ;
};

const sum = function(arr) {
	return arr.reduce((acc, curr) => acc + curr, 0)
};

const multiply = function(arr) {
  return arr.reduce((acc, curr) => acc * curr, 1);
};

const power = function(n1, n2) {
	return n1**n2;
};

const factorial = function(n) {
  return (n <= 1) ? 1 : n * factorial(n-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
