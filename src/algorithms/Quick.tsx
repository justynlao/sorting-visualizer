let algorithmSteps: any[] = [];

/**
 * Function that partitions an array into elements less than a pivot and elements greater than a pivot
 * @param array Array to partition
 * @param start The starting index to partition from
 * @param end The ending index to partition from
 * @returns The index position of the partition
 */
const partition = (array: number[], start: number, end: number) => {
  const pivotIndex = end; // Pick the last element to be the pivot
  let finalPivot = start;

  // Loop through all elements, moving elements smaller than the pivot towards the left of the array
  for (let i = start; i < end; i++) {
    algorithmSteps.push([i, pivotIndex, null, null]); // Get indices of elements being compared
    if (array[i] < array[pivotIndex]) {
      [array[i], array[finalPivot]] = [array[finalPivot], array[i]];
      algorithmSteps.push([i, finalPivot, array.slice(), null]); // Get indices of elements being swapped and resulting array
      finalPivot++; // Increment final pivot index whenever there is an element smaller
    }
  }

  // Swap the final pivot position element with the initial pivot value
  [array[finalPivot], array[pivotIndex]] = [
    array[pivotIndex],
    array[finalPivot],
  ];
  algorithmSteps.push([finalPivot, pivotIndex, array.slice(), null]); // Get indices of elements being swapped and resulting array
  algorithmSteps.push([null, null, null, finalPivot]); // Get index of the final pivot position (automatically sorted)
  return finalPivot;
};

/**
 * Function that recursively performs quick sort on an array
 * @param array Array of numbers to be sorted
 * @param start The starting index
 * @param end The ending index
 * @returns
 */
const quickSortHelper = (array: number[], start: number, end: number) => {
  if (start >= end) {
    // When start is equal to end (array is only 1 element) it is automatically sorted, so no need to partition
    if (start === end) algorithmSteps.push([null, null, null, start]);
    return;
  }

  let p = partition(array, start, end);
  quickSortHelper(array, start, p - 1);
  quickSortHelper(array, p + 1, end);
};

/**
 * Function that performs quick sort on an array
 * @param array Array of numbers to be sorted
 * @returns Array of indices representings steps in the sorting process
 */
const quickSort = (array: number[]) => {
  const arr = array.slice();

  // Clear global variable before each run
  algorithmSteps = [];
  quickSortHelper(arr, 0, arr.length - 1);

  return algorithmSteps;
};

export default quickSort;
