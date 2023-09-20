export default function analyzeArray(arr) {
  if(!isValidArr(arr)) return "Not all numbers";

  const average = arr.reduce((prev, cur) => prev + cur, 0) / arr.length;
  const min = minVal(arr);
  const max = maxVal(arr);
  const len = arr.length;

  return {
    average: average,
    min: min,
    max: max,
    length: len,
  };
}

function minVal(arr) {
  let min = Infinity;
  arr.forEach((a) => {
    if (a < min) {
      min = a;
    }
  });
  return min;
}

function maxVal(arr) {
  let max = -Infinity;
  arr.forEach((a) => {
    if (a > max) {
      max = a;
    }
  });
  return max;
}

function isValidArr(arr) {
  for(let i = 0; i < arr.length; i++){
    if(typeof(arr[i]) !== 'number') {
        return false;
    }
  }
  return true;
}
