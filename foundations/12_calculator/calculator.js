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
	let sum = 0 ; 
  for (const num of arr ){
    sum += num;
  }

  return sum;
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
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
