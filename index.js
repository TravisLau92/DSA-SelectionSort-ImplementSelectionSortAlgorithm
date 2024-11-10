// run `node index.js` in the terminal

// don't remove this line if are using prompt
const prompt = require('prompt-sync')();

function selectionSort(arr) {
  // Outer loop
  for (let i = 0; i < arr.length - 1; i++) {
    // Assume the first unsorted element is the minimum
    let minIndex = i;

    // Inner loop
    // Find the minimum element in the unsorted part
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j; // Update the index of the minimum element
      }
    }

    // Swap the minimum element with the first unsorted element
    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr; // Return sorted array
}

const inputArray = [29, 10, 14, 37, 13];
console.log("Sorted Array:", selectionSort(inputArray));