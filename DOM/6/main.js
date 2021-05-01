document.addEventListener('DOMContentLoaded', () => {
    document.body.style.backgroundColor = 'darkgray'
    const div = createElement('div', {
        'style': 'display: flex;justify-content: flex-end;padding-top: 10px;padding-right: 10px',
        'className': 'welcome'
    }, 'Hello!')

})

function showNotifications(div, message) {
    div.setAttribute('class', 'notification')
    div.appendChild(document.createTextNode(`${message}`))
    document.body.append(div)
    setTimeout(() => {
    document.body.removeChild(div)
    }, 1500)
}

function createElement(element, option, message) {
    const elem = document.createElement(element)
    applyOptions(elem, option)
    showNotifications(elem, message)
    document.body.append(elem)
    return elem
}

function applyOptions(element, options) {
    for (const key of Object.keys(options)) {
        element.setAttribute(key, options[key])
    }
}

