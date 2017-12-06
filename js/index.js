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

function getValues() {
  let a = parseFloat(document.getElementById("a").value); //Number(prompt("Enter A"));
  let b = parseFloat(document.getElementById("b").value); //Number(prompt("Enter B"));
  let c = parseFloat(document.getElementById("c").value); //Number(prompt("Enter C"));
  let values = [a, b, c];
  return values;
}
function calcDics(a, b, c) {
  let res = b ** 2 - 4 * a * c;
  return res;
}
function solveQuadr() {
  let values = getValues();

  let d = calcDics(values[0], values[1], values[2]);

  let x1 = (-values[1] + Math.sqrt(d)) / 2 * values[0];

  let x2 = (-values[1] - Math.sqrt(d)) / 2 * values[0];

  let result = "x1 = " + x1 + "; x2 = " + x2 + ";";

  return result;
}
function printResult() {
  document.getElementById("solve").innerHTML =
    "Here is the solve: <br>" + solveQuadr();
}
