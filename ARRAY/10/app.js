const array = [8, 7, 2, 2, 3, 4, 2, 5, 5, 6, 7, 8, 5, 9, 0, 1];

const uniqueSorted = (array) => [...new Set(array)].sort();

console.log(uniqueSorted(array));
