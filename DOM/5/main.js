document.addEventListener('DOMContentLoaded', () => {
    document.body.style.backgroundColor = 'darkgray'

    const input = createElement('input', {'type': 'text', 'value': 'text'})
    const button = createElement('button', {'style': 'width: 20px; height: 20px;'})
    const ol = createElement('ol', {})

    buttonController(button, input, ol)

})

function buttonController(button, input, ol) {
    input.addEventListener('input', () => {
        if (input.value === '') {
            button.setAttribute('disabled', '')
        } else {
            button.removeAttribute('disabled')
        }
    })

    button.addEventListener('click', () => {
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(input.value))
        input.value = ''
        button.setAttribute('disabled', '')
        ol.append(li)
    })

    ol.addEventListener('click', (li) => {
       alert(li.target.innerText)
    })
}


function createElement(element, option) {
    const elem = document.createElement(element)
    applyOptions(elem, option)
    document.body.append(elem)
    return elem
}

function applyOptions(element, options) {
    for (const key of Object.keys(options)) {
        element.setAttribute(key, options[key])
    }
}
