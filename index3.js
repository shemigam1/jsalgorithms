// const isEven = function (arg) {
//   if (arg % 2 === 0) return true;
//   else if (arg % 2 === 1) return false;
//   else isEven(arg - 2);
// };

// console.log(isEven(1));

const countChar = function (str, char) {
  let count = "";
  let not = "";
  for (let i = 0; i < str.length; i++) {
    str[i] === char ? (count += str[i]) : (not += str[i]);
  }
  console.log(not);
  return `${count.length}`;
};

const countBs = function (i, let) {
  return countChar(i, let);
};
console.log(countBs("BBBehehjcj", "B"));
