const menu = {
    width: 200,
    height: 300,
    title: 'My menu'
};

const multiplyNumeric = (object) => {
    const keys = Object.keys(object)
    for (const key of keys) {
        typeof object[key] === 'number' ? object[key] *= 2 : true
    }
};

multiplyNumeric(menu);

console.log(menu);

