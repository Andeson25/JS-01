
function getValues() {
  let a = parseFloat(document.getElementById("a").value); 
  let b = parseFloat(document.getElementById("b").value); 
  let c = parseFloat(document.getElementById("c").value); 
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    document.getElementById("solve").innerHTML = " ";
    alert("Input values please!");
  } else {
    let values = [a, b, c];
    return values;
  }
}
function calcDics(a, b, c) {
  let res = b ** 2 - 4 * a * c;
  return res;
}
function solveQuadr() {
  let values = getValues();
  let d = calcDics(values[0], values[1], values[2]);
  if (d < 0) {
    return "No solves, D<0";
  }
  if (d === 0) {
    let result = "x=" + -values[1] / 2 * values[0];
    return result;
  }

  let x1 = Math.round((-values[1] + Math.sqrt(d)) / 2 * values[0] * 100) / 100;

  let x2 = Math.round((-values[1] - Math.sqrt(d)) / 2 * values[0] * 100) / 100;

  let result = "x1 = " + x1 + ";<br> x2 = " + x2 + ";";

  return result;
}
function printResult() {
  document.getElementById("solve").innerHTML =
    "Here is the solve: <br>" + solveQuadr() + "<br>" + "Goodbye!";
}
