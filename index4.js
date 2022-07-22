const range = function (start, end) {
  let arr = [];
  for (let i = 0; i < end; i++) {
    arr.push(start++);
  }
  return arr;
};

console.log(range(1, 10));

const sum = function (array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    array[i] += total;
  }
  return total;
};

console.log(sum([1, 2, 3, 4]));
