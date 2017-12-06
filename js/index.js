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
  const a = document.getElementById("a").value; //Number(prompt("Enter A"));

  const b = +document.getElementById("b").value; //Number(prompt("Enter B"));

  const c = +document.getElementById("c").value; //Number(prompt("Enter C"));

  const d = b ** 2 - 4 * a * c;
  const x1 = (-b + Math.sqrt(d)) / 2 * a;

  const x2 = (-b - Math.sqrt(d)) / 2 * a;

  const result = "x1 = " + x1 + "; x2 = " + x2+";";

  return result;
}
function printResult() {
  
  document.getElementById("solve").innerHTML = "Here is the solve: <br>"+solveQuadr();
}
