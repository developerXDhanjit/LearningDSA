/* unordered , key-value pairs  */

/* Big O for objects 
insertion - O(1)
removal - O(1)
searching - O(N) --> for the values  preety rare to use
access - O(1)

methods :-
Object.keys -> O(n)
Object.values -> O(n)
Object.entries -> O(n)
Object.hasOwnProperty -> O(1)

*/

let programmer = {
    firstName : "Dhanjit",
    isGood : true,
    favoriteLanguages : ["Javascript" , "Python"]
}

console.log(programmer);
console.log(Object.keys(programmer));
console.log(Object.values(programmer));
console.log(Object.entries(programmer));
console.log(programmer.hasOwnProperty('firstName')); //returns booleans
