/*Intentional Error:
If you haven’t received an array index error in one of your programs yet, try to make one happen.
Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.*/
// error is here:
// let countries:number[]=["Pakistan","Turkey","Germany","Banladesh","Canada","Austria"];
var countries = ["Pakistan", "Turkey", "Germany", "Banladesh", "Canada", "Austria"];
countries.forEach(function (country) { return console.log("".concat(country)); });
