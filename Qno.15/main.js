/*Changing Guest List:
You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.
You’ll have to think of someone else to invite.

• Start with your program from Exercise 14.
Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/
// make a guest list:
var guestsList = ["Dua", "Laiba", "Sara", "Haleema", "A.bari"];
// select the guest who is not come: 
var guestUnableToCome = guestsList[3];
// add a new guest in the replacement of guest who is not come:
guestsList.splice(3, 1, "Ahmed");
// print the message for each guest:
guestsList.forEach(function (guest) { return console.log("Hey ".concat(guest, " I'am inviting you for dinner.")); });
// print the guest who is coming:
console.log(guestUnableToCome, "unable to come.");
