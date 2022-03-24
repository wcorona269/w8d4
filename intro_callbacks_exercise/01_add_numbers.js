// write a function that will read several numbers, one after another, and sum up the total. After each number, let's print out the partial sums along the way, and pass the total sum to a callback when done.

const readline = require('readline');

let reader = readline.createInterface({input:process.stdin, output:process.stdout});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question('Please enter a number:', answer => {
      sum += parseInt(answer);
      console.log(sum);
      addNumbers(sum,numsLeft-1,completionCallback);
    });
  }else if (numsLeft === 0) {
    completionCallback(sum);
  }
}