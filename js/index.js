function getValues() {
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  const c = parseFloat(document.getElementById("c").value);
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    document.getElementById(
      "solve"
    ).innerHTML = `<h1 style="color:red">Input values!</h1>`;
  } else {
    return [a, b, c];
  }
}
function solveQuadr() {
  const [a, b, c] = getValues();
  const d = calcDics(a, b, c);
  if (d < 0) {
    return `No solves, D<0`;
  }
  if (d === 0) {
    let result = `x=${-b / 2 * a}`;
    return result;
  }
  const x1 = Math.round((-b + Math.sqrt(d)) / (2 * a) * 100) / 100;

  const x2 = Math.round((-b - Math.sqrt(d)) / (2 * a) * 100) / 100;

  return `x1 = ${x1} <br> x2 = ${x2} `;
}
function calcDics(a, b, c) {
  return b ** 2 - 4 * a * c;
}
function printResult() {
  document.getElementById(
    "solve"
  ).innerHTML = `Here is the solve: <br> ${solveQuadr()}  <br>  Goodbye!`;
}
document.querySelector('body').addEventListener('keypress', function (e) {
  var key = e.which || e.keyCode;
  if (key === 13) { 
    printResult();
  }
});
document.getElementById(`button`).addEventListener(`click`, printResult);
