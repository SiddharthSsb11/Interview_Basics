/* const obj = {
  value: 5,
  printThis: function () {
    console.log(this);
  },
};

obj.printThis(); */

//1

const object = {
  message: "Hello, World!",
  getMessage() {
    const message = "Hello, Earth!";
    return this.message;
  },
};
console.log(object.getMessage()); // What is logged?

//2
function Pet(name) {
  this.name = name;
  this.getName = () => this.name;
}

const cat = new Pet("Fluffy");
console.log(cat.getName()); // What is logged? //Fluffy
const { getName } = cat;
console.log(getName()); // What is logged? //Fluffy

//3
const object2 = {
  message: "Hello, World!",
  logMessage() {
    console.log(this.message); // What is logged?
  },
};
setTimeout(object2.logMessage, 1000);

//4
const object3 = {
  who: "World",
  greet() {
    return `Hello, ${this.who}!`;
  },
  farewell: () => {
    return `Goodbye, ${this.who}!`;
  },
};
console.log(object3.greet()); // What is logged?
console.log(object3.farewell()); // What is logged?

//5
var len = 4;
function callback() {
  console.log(this.length); // What is logged?
}
const object5 = {
  len: 5,
  method(callback) {
    callback();
  }
};
object5.method(callback, 1, 2); //ANS 4

//6
var length = 4;
function callback() {
  console.log(this.length); // What is logged?
}
const object4 = {
  length: 5,
  method() {
    arguments[0]();
  }
};
object4.method(callback, 1, 2); //ANS 3