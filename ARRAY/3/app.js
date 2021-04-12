const styles = ["Djaz", "Biuz"];

const addElement = (array, element) => {
    const arrayTemp = [...array];
    arrayTemp.push(element);
    return styles
}

const middleValue = (array) => {
    return array[Math.ceil(array.length / 2 - 1)]
}

const removeItem = (array) => {
    return array.shift();
}

const addItemAtStart = (array, ...args) => {
    for (str of args) {
        array.unshift(str);
    }
    return true
}

console.log(addElement(styles, "Rock-n-roll"));

console.log(middleValue(styles));

console.log(removeItem(styles));

console.log(addItemAtStart(styles, "rap", "rigi"));

console.log(styles);



