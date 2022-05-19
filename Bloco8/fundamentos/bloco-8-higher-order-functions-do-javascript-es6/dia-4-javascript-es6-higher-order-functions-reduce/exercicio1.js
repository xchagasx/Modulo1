// 1 - Dada uma matriz, transforme em um array.

const arrays = [["1", "2", "3"], [true], [4, 5, 6], [-5, -10, -50]];

const flatten = (acc, num) => [`${acc}, ${num}`];
const oneArrayFull = arrays.reduce(flatten);
console.log(oneArrayFull);
