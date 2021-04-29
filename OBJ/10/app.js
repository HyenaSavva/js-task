const person = {
    name: `Person`,
    age: 123,
    salary: 1542.33,
    contacts: {
        phone: `112`,
        email: 'email@domain.com'
    },
    address: `Moldova`
}

const person2 = {
    name: `Person`,
    age: 123,
    salary: 1542.33,
    contacts: {
        phone: `112`,
        email: 'email@domain.com'
    },
    address: `Moldova`
}

const  intersection = (person, person2) => {
    result = {}
    const keys = Object.keys(person)
    for (const key of keys) {
        if (person[key] === person2[key]){
            result[key] = person[key]
            console.log(result)
        }
    }
    return result
}

console.log(intersection(person, person2));
