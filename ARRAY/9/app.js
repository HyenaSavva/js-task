const array = [1, "a", 2, null, 3, undefined, 4, {}, 5, 6, `word`, 7, 8, false, 9, 100]

const filter = (array) => array.filter((element) => typeof element === 'number');

console.log(filter(array));
