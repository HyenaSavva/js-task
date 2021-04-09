const person =[
    {
        name: 'Alex',
        marks: [0, 1, 2, 3, 4]
    },
    {
        name: 'Dima',
        marks: [9, 9, 8, 6, 7]
    },
    {
        name: 'Jora',
        marks: [2, 2, 7, 2, 6]
    },
    {
        name: 'Vasea',
        marks: [8, 9, 5, 8, 5]
    }
]
const avgMarks = student => {
        return student.marks.reduce((acc, mark) => acc + mark) / student.marks.length
}

const personWithAvgMarks = person => {
    const students = []

    person.forEach((student) => {
        students.push({ name:student.name , mark:avgMarks(student) })
    })
    return students
}

const showPerson = person => {
    person.forEach((student , i) => {
        console.log(`Name: ${student.name} ` + `
        avg marks ${student.mark}`)
    })
}

// const lessFive = person => {
//     person.forEach((student , i)=>{
//         if (2 < 5){
//             console.log(`${student.name} `)
//         }
//     })
// }
//
// const maxAndMin = person => {
//     // getAvgMarks(person).sort((a ,b) => { a.marks - b.marks})
// }
//
console.log(`Students name's with avg marks:`)
showPerson(personWithAvgMarks(person))
//
console.log(`Students with mark lesser then 5:`)
// lessFive(personWithAvgMarks(person))
//
// console.log(`Students with max mark and minim mark :`)
// maxAndMin(person)
//
