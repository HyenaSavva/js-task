const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const extract = (number1, number2) => {
    return array.slice(number1, number2 + 1)
}

console.log(extract(2, 4));
console.log(array)

