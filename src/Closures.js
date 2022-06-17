function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  return y;
}
var z = x();
console.log(z); // value of z is entire code of function y.

/* 
In above code, When y is returned, not only is the function returned but the entire closure (fun y + its lexical
    scope) is returned and put inside z. So when z is used somewhere else in program, it still remembers var a
    inside x()

 Thus In simple words, we can say:
    A closure is a function that has access to its outer function scope even after the function has returned.
    Meaning, A closure can remember and access variables and arguments reference of its outer function even after
    the function has returned. */



/* 
    function createFunc() {
      const name = [1, 2, 3];
      const nameFunc = [];
      for (var i = 0; i < name.length; i++) {
        //console.log(name[i])
        nameFunc.push(function () {
          console.log(name[i]);
          console.log(name, i);
        });
      }
      return nameFunc;
    }
    const confi = createFunc();
    confi[0](); */    