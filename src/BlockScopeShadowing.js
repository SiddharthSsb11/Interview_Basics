//BLOCK SCOPE
/* 
{
  var a = 10;
  let b = 20;
  const c = 30;

  console.log(a) // Here let and const are hoisted in Block scope, // While, var is hoisted in Global scope.
  console.log(b)
  console.log(c)
}


console.log(a)
console.log(b)  // Uncaught ReferenceError: b is not defined
 */

//SHADOWING

//Case 1
/* var a = 100;
{
  var a = 10; // same name as global var
  let b = 20;
  const c = 30;
  console.log(a); // 10
  console.log(b); // 20
  console.log(c); // 30
}
console.log(a); */ // 10, instead of the 100 we were expecting. So block "a" modified val of
//global "a" as well. In console, only b and c are in block space. a initially is in global
//space(a = 100), and when a = 10 line is run, a is not created in block space, but replaces
//100 with 10 in global space itself.
//If one has same named variable outside the block, the variable inside the block shadows the outside variable.
//This happens only for var

//Case 2

/* let b = 100;
{
var a = 10;
let b = 20;
const c = 30;
console.log(b); // 20
}
console.log(b); */ // 100, Both b's are in separate spaces (one in Block(20) and one in
//Script(another arbitrary mem space)(100)). Same is also true for *const* declarations.

//Same for functions
/* const c = 100;
function x() {
  const c = 10;
  console.log(c); // 10
}
x();
console.log(c); */ // 100 //same for functions

//Illegal Shadowing

//Case 1

/* let a = 20;
{
var a = 20;
} */
// Uncaught SyntaxError: Identifier 'a' has already been declared
//We cannot shadow let with var. But it is valid to shadow a let using a let. However, we can shadow var with let.
//All scope rules that work in function are same in arrow functions too.


//Case 2

//Since var is function scoped, it is not a problem with the code below.
let a = 20;
function x() {
var a = 20;
}
