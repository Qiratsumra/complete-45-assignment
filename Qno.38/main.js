/*Cities:
Write a function called describe_city() that accepts the name of a city and its country.
The function should print a simple sentence, such as Karachi is in Pakistan.
Give the parameter for the country a default value.
Call your function for three different cities, at least one of which is not in the default country.*/
function describe_city(city, country) {
    console.log("".concat(city, " is in ").concat(country, "."));
}
;
describe_city("Lahore", "Pakistan");
describe_city("Karachi", "Pakistan");
describe_city("Quetta", "Pakistan");
describe_city("Sukkar", "Pakistan");