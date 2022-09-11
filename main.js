const message = "Deakin University is a public university in Victoria, Australia.";

// returns index of 'is' 
const index = message.indexOf("university");
console.log('Index: ' + index);  

// returns number of characters in the message string
let length = message.length;
console.log("Length: " + length);

// check if message includes the string "Minh"
let result = message.includes("Minh");
console.log(result);

// finding character at index 4
let cut = message.charAt(4);
console.log("Character at index 4 is " + cut);

// convert message to uppercase
const upperMessage = message.toUpperCase();
console.log(upperMessage);