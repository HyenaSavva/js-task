const weekDays = {
    "Mo": "Понедельник",
    "Tu": "Вторник",
    "We": "Среда",
    "Th": "Четверг",
    "Fr": "Пятница",
    "Sa": "Суббота",
    "Su": "Воскресенье",
}

const traduceWeekDays = ["Luni", "Marti", "Miercuri", "Joi", "Vineri", "Sambata", "Duminica"]

const translate = (weekDays,traduceWeekDays) => {
    const keys = Object.keys(weekDays)
    console.log(keys)
    for (const index in keys) {
        weekDays[keys[index]] = traduceWeekDays[index]
    }
}

translate(weekDays,traduceWeekDays)

console.log(weekDays)