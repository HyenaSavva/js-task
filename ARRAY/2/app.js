const person = [
    {
        name: 'Alex',
        marks: [0, 1, 2, 3, 4]
    },
    {
        name: 'Dima',
        marks: [9, 9, 8, 6, 2]
    },
    {
        name: 'Jora',
        marks: [2, 2, 7, 10, 6]
    },
    {
        name: 'Vasea',
        marks: [8, 9, 5, 8, 5]
    }
]
const avgMarks = student => {                               // calculeaza media la 1 student din marks[]
        return student.marks.reduce((acc, mark) => acc + mark) / student.marks.length
}

const allMarks = students => {
    const list = []
    students.forEach((student) => {
        list.push(avgMarks(student))
    })
    return list
}

const personWithAvgMarks = person => {                      // creaza un nou array de obiecte
    const students = []

    person.forEach((student) => {
        students.push({ name:student.name , mark:avgMarks(student) })
    })
    return students
}

const showPerson = person => {                            // afisarea persoanelor
    person.forEach((student) => {
        console.log(`Name: ${student.name} ` + `
        avg marks ${student.mark}`)
    })
}

const lessFive = person => {                              // afisarea persoanelor cu nota mai jos de 5
    person.forEach((student) => {
        if (student.mark < 6){
            console.log(`Name: ${student.name} `)
        }
    })
}

const calculateMaxAndMin = studentsList => {                       // afisarea persoanelor cu nota minima si maxima
    let min = studentsList[0].mark , max = studentsList[0].mark
    let nameMin = studentsList[0].name , nameMax = studentsList[0].name

    for (const student of studentsList){
        if (min > student.mark){
            min = student.mark
            nameMin = student.name
        }
        if (max < student.mark){
            max = student.mark
            nameMax = student.name
        }
    }

    return { nameMin , min , nameMax ,max }

}

const sortStudents = studentsList => {
    const obj = Object.entries(studentsList).sort((a,b) => b[1].mark - a[1].mark)
    console.log(obj)

}

const sortStudentAvgMark = ( allMarks, studentsList ) => {

    const mediumMark = allMarks.reduce((acc, mark ) => acc + mark ) / allMarks.length

    studentsList.forEach((student) => {

        if (student.mark > mediumMark) {
            console.log(`Student name is: ${student.name} with avg mark = ${student.mark}`)

            // return { name: student.name, mark: student.mark }
        }
    })
}

const studentsList = personWithAvgMarks(person)            // apelam functia si o pastram in studentsList

const studentsMarks = allMarks(person)                    // apelam functia si pastram lista de note in studentsMarks



console.log(`Students name's with avg marks:`)
showPerson(studentsList)

console.log(`Students with mark lesser then 5:`)
lessFive(studentsList)

console.log(`Students with max mark and minim mark :`)

const maxMin = calculateMaxAndMin(studentsList)

console.log(`
    Student with min mark ${maxMin.nameMin}
    Student with min mark ${maxMin.min}
    Student with max mark ${maxMin.nameMax}
    Student with max mark ${maxMin.max}
    `)

sortStudents(studentsList)

const nameMark = sortStudentAvgMark(studentsMarks,studentsList)

// console.log( nameMark.name, nameMark.mark )



