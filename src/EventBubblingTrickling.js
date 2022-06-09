//if the boolean value is not passed, its taken as false (since nothng is a falsy value)
//false implies trickling wont happen ponly bubbling

document.querySelector("#grandparent").addEventListener(
  "click",
  (e) => {
    console.log("Grandparent Clicked!");
    //e.stopPropagation();
  },
  true
);

document.querySelector("#parent").addEventListener(
  "click",
  (e) => {
    console.log("Parent Clicked!");
  },
  true
);

document.querySelector("#child").addEventListener(
  "click",
  (e) => {
    console.log("Child Clicked!");
  },
  true
);
