function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let left = arr.splice(0, Math.round(arr.length / 2));
  let right = arr;

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let mergedArr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      mergedArr.push(left[0]);
      left.splice(0, 1);
    } else {
      mergedArr.push(right[0]);
      right.splice(0, 1);
    }
  }

  return [...mergedArr, ...left, ...right];
}
