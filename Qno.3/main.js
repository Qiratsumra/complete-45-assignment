// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var personName = "qirat saeed";
// coverting the person name in lower case:
console.log(personName.toLowerCase());
// coverting the person name in upper case:
console.log(personName.toUpperCase());
// coverting the person name in title case:
// step no.1:
var word = personName.split(" ");
// step no.2:
var titleCase = " ";
// step no.3:
for (var i = 0; i < word.length; i++) {
    titleCase += word[i].charAt(0).toUpperCase() + word[i].slice(1).toLowerCase() + " ";
}
console.log(titleCase);
