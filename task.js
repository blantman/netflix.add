const arr = [1, 4, 8, 10];
const res = arr.reduce((acc, i) => {
  acc += i;
  return acc;
} , 0)

console.log(res);
