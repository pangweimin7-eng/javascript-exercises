/*
Write a function filterRange(arr, a, b) that gets an array arr,
looks for elements with values higher or equal to a and 
lower or equal to b and return a result as an array.

The function should not modify the array. 
It should return the new array.
*/

function filterRange(arr, a, b){
    return arr.filter((num) => (num >= a && num < b));
}

const arr = [1,2,3,4,5,6];
console.log(filterRange(arr, 2, 4));