
//CASE 1

//Reference Error are thrown when variables are in temporal dead zone.

/* 
console.log(a); // ReferenceError: Cannot access 'a' before initialization
console.log(b); // prints undefined as expected
let a = 10;
console.log(a); // 10
var b = 15;
console.log(window.a); // undefined
console.log(window.b); // 15 */


//CASE 2

//Syntax Error doesn't even let us run single line of code.
/* 
let a = 10;
let a = 100; //this code is rejected upfront as SyntaxError. (duplicate declaration)
//------------------
let a = 10;
var a = 100; // this code also rejected upfront as SyntaxError. (can't use same name in the same scope */


//CASE 3


/* let a;
a = 10;
console.log(a) // 10. Note declaration and assigning of a is in different lines.
//------------------
const b;
b = 10;
console.log(b); // SyntaxError: Missing initializer in const declaration. (This type of declaration won't work with const. const b = 10 only will work)
//------------------
lectures.md 26/05/2022
17 / 57
const b = 100;
b = 1000; //this gives us TypeError: Assignment to constant variable */



/////////////////////////////////////////////////////////////////////


/* 
Types of Error: Syntax, Reference, and Type.
Uncaught ReferenceError: x is not defined at ...
This Error signifies that x has never been in the scope of the program. This literally means that x was
never defined/declared and is being tried to be accesed.
Uncaught ReferenceError: cannot access 'a' before initialization
This Error signifies that 'a' cannot be accessed because it is declared as 'let' and since it is not assigned
a value, it is its Temporal Dead Zone. Thus, this error occurs.
Uncaught SyntaxError: Identifier 'a' has already been declared
This Error signifies that we are redeclaring a variable that is 'let' declared. No execution will take place.
Uncaught SyntaxError: Missing initializer in const declaration
This Error signifies that we haven't initialized or assigned value to a const declaration.
Uncaught TypeError: Assignment to constant variable
This Error signifies that we are reassigning to a const variable. */