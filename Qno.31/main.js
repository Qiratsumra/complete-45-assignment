/*No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/
// let userNames:string[]=["admin","user2","user4","user6"];
var userNames = [];
if (userNames.length === 0) {
    console.log("We need to find some user!");
}
else {
    console.log("Now we are gain some user!");
}
