const time = new Date;

// get day of the month
const date = time.getDate();
console.log("Today date: " + date); 

// get day of the week
const year = time.getFullYear();
console.log("This year: " + year); 

// get universal time
const utcDate = time.getUTCDate();
console.log("Universal time: " + utcDate); 

const event = new Date('Sep 11, 2022 23:49:30');
// set the date
event.setDate(20);
console.log("The new date is: " + event.getDate()); 

// Gets the day of the week
const day = time.getDay();
console.log("Today: " + day); 