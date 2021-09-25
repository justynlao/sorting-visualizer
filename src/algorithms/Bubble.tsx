const bubbleSort = (array: number[]) => {
  const arr = array.slice();
  const indices = [];

  let j: number;
  for (let i = 0; i < arr.length - 1; i++) {
    for (j = 0; j < arr.length - 1 - i; j++) {
      indices.push([j, j + 1, null, null]); // Get indices of elements being compared
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        indices.push([j, j + 1, arr.slice(), null]); // Get indices of elements being swapped and resulting array
      }
    }
    indices.push([null, null, null, j]); // Get index of sorted element
  }
  
  return indices;
};

export default bubbleSort;
