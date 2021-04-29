const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

const sum = Object.values(salaries).reduce((acc, salary) => acc + salary)

console.log(sum)