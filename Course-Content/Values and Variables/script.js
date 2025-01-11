/* VALUES AND VARIABLES
A value is any piece of data like a number, string, 
or boolean. For example, 7, "Hello, World!", or true or false are values.

A variable is like a labeled container that stores a 
value so you can use it later. In JavaScript, we define 
variables using the let or const keywords.

The keyword let is used to declare variables that 
can change their value later:

let is flexible (you can update the value).
Variable names must start only with a letter, underscore _, 
or dollar sign $ and cannot include spaces.
*/

const userName = "Gio";
let userAge = 16;
let student = true;
const userBirthDate = "15.02.2006";

console.log(userAge);
console.log(student);

userAge = 17;
student = false;

console.log(userAge);
console.log(student);
