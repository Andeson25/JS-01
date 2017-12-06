// const userName = prompt("What is your name?", "Your name...");
// const greetings = "Hello " + userName;
// document.write(greetings);
// const endl = "<br>";
// document.write(endl);

// const userAge = parseFloat(prompt("What is youtr age?"));
// const nextAge = userAge + 1;
// document.write("You are  " + userAge+" years old");

// if (isNaN(userAge)) {
//   document.write(endl + "User age is Nan");
// } else {
//   if (userAge < 18) {
//     document.write(endl + "Child");
//   } else {
//     document.write(endl + "Adult");
//   }
// }
// function fun(a, b) {
//   return a + b;
// }
// function sum(funPtr, a, b, c) {
//   return funPtr(a, b) + a + b + c;
// }
// document.write(sum(fun, 10, 10, 10));
const a = Number(prompt("Enter A"));
const b = Number(prompt("Enter B"));
const c = Number(prompt("Enter C"));
function disc(_a, _b, _c) {
  return _b ** 2  - 4 * _a * _c;
}
function solveQuadr(a,b,c) {
  const d = disc(a, b, c);
  const x1 = (-b + Math.sqrt(d)) / 2 * a;
  const x2 = (-b - Math.sqrt(d)) / 2 * a;
  var result = "x1="+x1 + " x2=" + x2;
    return result;
}
var endl="<br>"
document.write(endl)
document.write("<h1>"+"Solve:"+endl+solveQuadr(a,b,c)+"<h1>");
