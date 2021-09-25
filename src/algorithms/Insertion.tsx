const _ = require("lodash");

const insertionSort = (array: number[]) => {
  const arr = array.slice();
  let indices = [];

  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      indices.push([j, j - 1, null, null]); // Get indices of elements being compared
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
        indices.push([j, j - 1, arr.slice(), null]); // Get indices of elements being swapped and resulting array
      } else {
        break;
      }
    }
  }

  indices.push([null, null, null, _.range(arr.length)]); // Get indices of all elements to mark as sorted
  return indices;
};

export default insertionSort;
