/**
 * Function that performs Bubble Sort on an array
 * @param array Array of numbers to be sorted
 * @returns Array of indices representing steps in the sorting process
 */
const bubbleSort = (array: number[]) => {
  const arr = array.slice(); // Make a copy of the array so the state array does not get mutated
  const algorithmSteps = [];

  let j: number;

  // Loop through length - 2 times, because the first element will automatically be sorted
  for (let i = 0; i < arr.length - 1; i++) {
    // Last i elements are already sorted
    for (j = 0; j < arr.length - 1 - i; j++) {
      algorithmSteps.push([j, j + 1, null, null]); // Get indices of elements being compared
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        algorithmSteps.push([j, j + 1, arr.slice(), null]); // Get indices of elements being swapped and resulting array
      }
    }
    algorithmSteps.push([null, null, null, j]); // Get index of sorted element

    if (j === 1) algorithmSteps.push([null, null, null, j - 1]); // Make sure remaining element of array is marked sorted
  }

  return algorithmSteps;
};

export default bubbleSort;
