//console.log(a);
//console.log(fn());
//var a = 20;
var a = 22;
function c(){
    console.log(a);
}
b(1)
c()//22
function b(x){
    //console.log(a);
  
  console.log(x,a)//undefined
  var a = 69;
  c();//22
}
b(2)
//console.log(a);
//console.log(b());
//console.log(a)