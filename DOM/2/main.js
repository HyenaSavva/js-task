document.addEventListener('DOMContentLoaded', () => {
    document.body.style.backgroundColor = 'darkgray'

})

const button = document.getElementsByClassName('button')
const input = document.getElementById('input')

const options = {
    'min': '0',
    'max': '9',
    'readonly': 'true',
    'value': '3'
}

for (const item in options) {
    input.setAttribute(item, options[item])
}

function validationInput(input) {
    if (input === '0') {
        return true
    } else return input === '9'
}

button[0].addEventListener('click', () => {
    input.stepDown()
    if (validationInput(input.value)) {
        button[0].setAttribute('disabled', '')
    } else button[1].removeAttribute('disabled')

})

button[1].addEventListener('click', () => {
    input.stepUp()
    if (validationInput(input.value)) {
        button[1].setAttribute('disabled', '')
    } else button[0].removeAttribute('disabled')

})

