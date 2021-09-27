/**
 * Function that performs Selection Sort on an array
 * @param array Array of numbers to be sorted
 * @returns Array of indices representing steps in the sorting process
 */
const selectionSort = (array: number[]) => {
  const arr = array.slice(); // Make a copy of the array so the state array does not get mutated
  const algorithmSteps = [];

  // Loop through length - 2 times, because the last element will automatically be sorted
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    // First element of pass through is marked as min, so start with next element
    for (let j = i + 1; j < arr.length; j++) {
      algorithmSteps.push([minIndex, j, null, null]); // Get indices of current min and comparison
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    algorithmSteps.push([i, minIndex, arr.slice(), null]); // Get indices of elements being swapped and resulting array
    algorithmSteps.push([null, null, null, i]); // Get index of sorted element

    if (i === arr.length - 2) algorithmSteps.push([null, null, null, i + 1]); // Make sure remaining element of array is marked sorted
  }
  return algorithmSteps;
};

export default selectionSort;
