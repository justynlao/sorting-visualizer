const _ = require("lodash");

let indices: any[] = [];

const merge = (array: number[], left: number, mid: number, right: number) => {
  const mergedArr = [];

  let firstIndex = left;
  let secondIndex = mid + 1;

  // Merge elements in left/right halves of the array in sorted order
  while (firstIndex <= mid && secondIndex <= right) {
    indices.push([firstIndex, secondIndex, null, null]);
    if (array[firstIndex] <= array[secondIndex]) {
      mergedArr.push(array[firstIndex]);
      firstIndex++;
    } else {
      mergedArr.push(array[secondIndex]);
      secondIndex++;
    }
  }

  // Add remaining elements of first sub-array (left half) to merged array
  while (firstIndex <= mid) {
    indices.push([firstIndex, null, null, null]);
    mergedArr.push(array[firstIndex]);
    firstIndex++;
  }

  // Add remaining elements of second sub-array (right half) to merged array
  while (secondIndex <= right) {
    indices.push([null, secondIndex, null, null]);
    mergedArr.push(array[secondIndex]);
    secondIndex++;
  }

  for (let i = left; i <= right; i++) {
    array[i] = mergedArr[i - left];
    indices.push([i, null, array.slice(), null])
  }
};

const mergeSortHelper = (array: number[], left: number, right: number) => {
  if (left >= right) return;

  const mid = Math.floor((left + right) / 2);
  mergeSortHelper(array, left, mid);
  mergeSortHelper(array, mid + 1, right);
  merge(array, left, mid, right);
};

const mergeSort = (array: number[]) => {
  const arr = array.slice();

  // Clear global variable before each run
  indices = [];
  mergeSortHelper(arr, 0, arr.length - 1);

  indices.push([null, null, null, _.range(arr.length)]); // All elements will be sorted after the sort runs
  return indices;
};

export default mergeSort;
