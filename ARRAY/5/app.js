const array = [2, 3]

const sum = (array) => {
    return array.reduce((acc , num) => acc + num)
}

const convert = (fn , array) => {
    return fn (array)
}

console.log(sum(array));

console.log(convert(sum, array));

console.log(array);