const selectionSort = (array: number[]) => {
  const arr = array.slice();
  const indices = [];

  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      indices.push([minIndex, j, null, null]); // Get indices of current min and comparison
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    indices.push([i, minIndex, arr.slice(), null]); // Get indices of elements being swapped and resulting array
    indices.push([null, null, null, i]); // Get index of sorted element

    if (i === arr.length - 2) indices.push([null, null, null, i + 1]); // Make sure remaining element of array is marked sorted
  }
  return indices;
};

export default selectionSort;
