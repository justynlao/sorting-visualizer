let indices: any[] = [];

const partition = (array: number[], start: number, end: number) => {
  const pivotIndex = end;
  let finalPivot = start;

  for(let i = start; i < end; i++) {
    indices.push([i, pivotIndex, null, null])
    if(array[i] < array[pivotIndex]) {
      [array[i], array[finalPivot]] = [array[finalPivot], array[i]]
      indices.push([i, finalPivot, array.slice(), null])
      finalPivot++;
    }
  }

  [array[finalPivot], array[pivotIndex]] = [array[pivotIndex], array[finalPivot]];
  indices.push([finalPivot, pivotIndex, array.slice(), null])
  indices.push([null, null, null, finalPivot]);
  return finalPivot;
};

const quickSortHelper = (array: number[], start: number, end: number) => {
  if(start >= end) {
    if(start === end) indices.push([null, null, null, start])
    return;
  }

  let p = partition(array, start, end);
  quickSortHelper(array, start, p - 1);
  quickSortHelper(array, p + 1, end);
};

const quickSort = (array: number[]) => {
  const arr = array.slice();

  // Clear global variable before each run
  indices = [];
  quickSortHelper(arr, 0, arr.length - 1);

  return indices;
};

export default quickSort;
