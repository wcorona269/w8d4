const readline = require("readline");
reader = readline.createInterface({
  input:process.stdin,
  output:process.stdout
});

function askIfGreaterThan(el1, el2, callback) {
  reader.question(`is ${el1} greater than ${el2}?:`, answer => {
    if (answer === 'yes') {
      callback(true);
    }
    else{
      callback(false);
    }
  });
}

// askIfGreaterThan(5, 6, console.log);


function innerBubbleSortLoop(arr, i , madeAnySwaps, outerBubbleSortLoop) {
  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i + 1], (isGreaterThan) => {
      if (isGreaterThan) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        madeAnySwaps = true;
      }
      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
    });
  }else if (i == arr.length - 1) {
    outerBubbleSortLoop(madeAnySwaps);
  }
}

// innerBubbleSortLoop([2,1,3,4],0,false,console.log);

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr,0,false,outerBubbleSortLoop);
    }else {
      sortCompletionCallback(arr);
      // reader.close();
    }
  }

  // Kick the first outer loop off, starting `madeAnySwaps` as true.
  outerBubbleSortLoop(true);

}

absurdBubbleSort([3, 2, 1], function(arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});