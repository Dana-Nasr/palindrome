function printAsterisk(number) {
  for (let i = 0; i < number - 1; i++) {
    value = 2 * i + 1;
    space = number - i;
    console.log(" ".repeat(space) + "*".repeat(value) + "\n");
  }
  for (let j = number - 1; j > 0 - 1; j--) {
    space = number - j;
    value = 2 * j + 1;
    console.log(" ".repeat(space) + "*".repeat(value) + "\n");  //repeat has the time complexity of (n) n is the velue of the var value in this case
  }
}
const readline = require("readline").createInterface({  //code sniplet (function) from codeacademy.com
  input: process.stdin,
  output: process.stdout,
});
readline.question("Enter a number: ", (number) => {
  num = parseInt(number);
  printAsterisk(number);
  readline.close();
});

//O(N^2)N being the number passed to function printAsterisk 
