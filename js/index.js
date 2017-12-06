const userName = prompt("What is your name?", "Your name...");
const greetings = "Hello " + userName;
document.write(greetings);

document.write("<br>");

const userAge = prompt("What is youtr age?");
const nextAge = +userAge + 1;
document.write("Next year you will be "+ nextAge);
