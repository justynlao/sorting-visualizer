const _ = require("lodash");

/**
 * Function that performs Insertion Sort on an array
 * @param array Array of numbers to be sorted
 * @returns Array of indices representing steps in the sorting process
 */
const insertionSort = (array: number[]) => {
  const arr = array.slice(); // Make a copy of the array so the state array does not get mutated
  let algorithmSteps = [];

  // Loop through entire array, starting from second element
  for (let i = 1; i < arr.length; i++) {
    // Pass through elements to the left of current, swapping if current is smaller
    for (let j = i; j > 0; j--) {
      algorithmSteps.push([j, j - 1, null, null]); // Get indices of elements being compared
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
        algorithmSteps.push([j, j - 1, arr.slice(), null]); // Get indices of elements being swapped and resulting array
      } else {
        // No need to finish checking all elements to the left
        break;
      }
    }
  }

  algorithmSteps.push([null, null, null, _.range(arr.length)]); // Get indices of all elements to mark as sorted
  return algorithmSteps;
};

export default insertionSort;
