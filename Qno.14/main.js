/*Guest List:
If you could invite anyone, living or deceased, to dinner, who would you invite?
Make a list that includes at least three people you’d like to invite to dinner.
Then use your list to print a message to each person, inviting them to dinner.*/
// create a guest list:
var guests = ["Sara", "Haleema", "Ali", "Osman"];
guests.forEach(function (guest) { return console.log("Hey ".concat(guest, " I would like to invite you for dinner.")); });
