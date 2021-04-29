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
    return (input === '0' || input === '9')
}

button[0].addEventListener('click', () => {
    input.stepDown()
    buttonStateController(0, 1)
})

button[1].addEventListener('click', () => {
    input.stepUp()
    buttonStateController(1, 0)
})

function buttonStateController(a, b) {
    if (validationInput(input.value)) {
        return button[a].setAttribute('disabled', '')
    }
    return button[b].removeAttribute('disabled')
}
