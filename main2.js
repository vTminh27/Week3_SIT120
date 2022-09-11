// array of numbers
const numberArray = [ 1, 2, 3, 4];

// array of strings
const stringArray = [ 'eat', 'play', 'sleep', 'dance', 'clean'];

// sorting elements in the alphabetical order
stringArray.sort();
console.log(stringArray); 

//finding the index position of string
const position = stringArray.indexOf('dance');
console.log("The  index is: " + position); 

// slicing the array elements
const newAct = stringArray.slice(3);
console.log(newAct); 

// concatenating two arrays
const concated = stringArray.concat(numberArray);
console.log(concated); // ["exercise", "sleep", "work", "eat"]

// removes the last element from numberArray
const removed = numberArray.pop();
console.log("The remove number is: " + removed);