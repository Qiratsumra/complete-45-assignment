/*More Guests: 
You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. 
Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. 
• Use append() to add one new guest to the end of your list. 
• Print a new set of invitation messages, one for each person in your list.*/

// make a guest list:
let guestsList:string[]=["Dua","Laiba","Sara","Haleema","A.bari","Saad"];

// select the guest who is not come: 
let guestUnableToCome=guestsList[3];

// add a new guest in the replacement of guest who is not come:
guestsList.splice(3,1,"Ahmed");

// add a new guest in the starting of the list:
guestsList.unshift("Saeed");

// add a new guest in the ending of the list:
guestsList.push("Ali");

// add a new guest in middle of the list:
let middleGuest=Math.floor(guestsList.length/2)
guestsList.splice(middleGuest,0,"Qirat");

// print the message for the guest who unable to come:
console.log(guestUnableToCome,"is not join us for grand dinner");
 
// print a message of great new:
console.log("Great New!");

guestsList.forEach(guest=>console.log(`HEY! ${guest} I'm invinting you for a grand dinner.`));


