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

function solveQuadr() {
  let a = document.getElementById("a").value; //Number(prompt("Enter A"));

  let b = +document.getElementById("b").value; //Number(prompt("Enter B"));

  let c = +document.getElementById("c").value; //Number(prompt("Enter C"));

  let d = b ** 2 - 4 * a * c;
  
  let x1 = (-b + Math.sqrt(d)) / 2 * a;

  let x2 = (-b - Math.sqrt(d)) / 2 * a;

  let result = "x1 = " + x1 + "; x2 = " + x2+";";

  return result;
}
function printResult() {
  
  document.getElementById("solve").innerHTML = "Here is the solve: <br>"+solveQuadr();
}
