const _ = require("lodash");

let algorithmSteps: any[] = [];

/**
 * Function that merges two arrays in sorted order
 * @param array Array to merge
 * @param left Leftmost index
 * @param mid Middle index
 * @param right Rightmost index
 */
const merge = (array: number[], left: number, mid: number, right: number) => {
  const mergedArr = [];

  let firstIndex = left; // Starting index of first half (left half)
  let secondIndex = mid + 1; // Starting index of second half (right half)

  // Merge elements in left/right halves of the array in sorted order
  while (firstIndex <= mid && secondIndex <= right) {
    algorithmSteps.push([firstIndex, secondIndex, null, null]); // Get indices of elements being compared
    if (array[firstIndex] <= array[secondIndex]) {
      mergedArr.push(array[firstIndex]);
      firstIndex++;
    } else {
      mergedArr.push(array[secondIndex]);
      secondIndex++;
    }
  }

  // Add remaining elements (if any) of first sub-array (left half) to merged array
  while (firstIndex <= mid) {
    algorithmSteps.push([firstIndex, null, null, null]); // Get index of element being added
    mergedArr.push(array[firstIndex]);
    firstIndex++;
  }

  // Add remaining elements (if any) of second sub-array (right half) to merged array
  while (secondIndex <= right) {
    algorithmSteps.push([null, secondIndex, null, null]); // Get index of element being added
    mergedArr.push(array[secondIndex]);
    secondIndex++;
  }

  // Replace the elements between left/right on the original array with the sorted, merged array
  let i = left;
  mergedArr.forEach((element) => {
    array[i++] = element;
    algorithmSteps.push([i, null, array.slice(), null]); // Get index of element being replaced
  });
};

/**
 * Function that recursively performs merge sort on an array
 * @param array Array of numbers to be sorted
 * @param left The leftmost index
 * @param right The rightmost index
 * @returns
 */
const mergeSortHelper = (array: number[], left: number, right: number) => {
  if (left >= right) return; // If left is equal to right, array is only one element, so stop

  const mid = Math.floor((left + right) / 2);
  mergeSortHelper(array, left, mid);
  mergeSortHelper(array, mid + 1, right);
  merge(array, left, mid, right);
};

/**
 * Function that performs merge sort on an array
 * @param array Array of numbers to be sorted
 * @returns Array of indices representings steps in the sorting process
 */
const mergeSort = (array: number[]) => {
  const arr = array.slice();

  // Clear global variable before each run
  algorithmSteps = [];
  mergeSortHelper(arr, 0, arr.length - 1);

  algorithmSteps.push([null, null, null, _.range(arr.length)]); // All elements will be sorted after the sort runs
  return algorithmSteps;
};

export default mergeSort;
