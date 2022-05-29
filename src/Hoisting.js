// Even before code is executed memory is allocated
//to each and every function and variable

/* If we use arrow function it get assigned just like variable --> undefined */

/* var x=7;
//console.log(getNames2)

function getNames() { 
    console.log("Hoisting JS");
}

var getNames2 = () => {
    console.log("From Arrow JS");
}


getNames();
console.log(getNames)
console.log(x);
 */

var x = 1;
a();
b(); // we are calling the functions before defining them. This will work properly, as seen in Hoisting.

console.log(x);

function a() {
  var x = 10; // local scope because of separate execution context
  console.log(x);
}

function b() {
  var x = 100;
  console.log(x);
}
