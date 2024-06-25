/*More Guests: 
You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. 
Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. 
• Use append() to add one new guest to the end of your list. 
• Print a new set of invitation messages, one for each person in your list.*/


let guestLists :string[] = ["Feroz","Zaheer","Abari"];

// add a new guest in the starting of an array;
guestLists.unshift("Ali");

// add a new guest in the ending of an array;
guestLists.push("Humza")

// add a new guest in the middle of an array;
let totalGuests = guestLists;
totalGuests.splice(2,0,"Hadi");

// priny the message for the guest;
 totalGuests.forEach(totalGuest=> console.log(`${totalGuest} you are invited for grand dinner`))

