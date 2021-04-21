const points = [{a: 1, b: 2}, {a: 3, b: 4}, {a: null, b: 4}, {a: 3, b: undefined}]

const returnArrayPoints = (objects) => {
    return objects.filter((value, index) => typeof objects[index].a === 'number' && typeof objects[index].b === 'number')
}

console.log(returnArrayPoints(points));

// const points = [{x: 1, y: 2}, {x: 3, y: 4}, {x: null, y: 4}, {x: 3, y: undefined}];
//
// const delFakePoints = (obj) => {
//     return obj.filter((value, index) => typeof (obj[index].x) === 'number' && typeof (obj[index].y) === 'number');
// }
//
//
// console.log(delFakePoints(points));