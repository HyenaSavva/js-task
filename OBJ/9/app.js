const weekDays = {
    "Luni": "Mo",
    "Marti": "Tu",
    "Miercuri": "We",
    "Joi": "Th",
    "Vineri": "Fr",
    "Simbata": "Sa",
    "Duminica": "Su"
}

const reverse = (weekDays) => {
    Object.fromEntries(
        Object
            .entries(weekDays)
            .map(([key,value]) => [value, key])
    )
}

reverse(weekDays)

console.log(weekDays)