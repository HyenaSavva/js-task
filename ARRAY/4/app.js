const sumInputNumbers = (array = []) => {
    const str = prompt('Introduce number')
    console.log(str)

    if (isNaN(+str) || !str) {
        return array
    }

    array.push(+str)
    return sumInputNumbers(array)

}

const sumNumbers = (array) => {
    return array.reduce((acc, num) => acc + num)
}

const array = sumInputNumbers()
const sum = sumNumbers(array)

console.log(array)
console.log(sum)

