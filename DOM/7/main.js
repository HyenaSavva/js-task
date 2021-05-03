document.addEventListener('DOMContentLoaded', () => {
    document.body.style.backgroundColor = 'darkgray'

    const div = createElement('div',{
        'id':'field',
        'style':'display: flex; justify-content: flex-end; align-items: flex-end;'
    })

    const div2 = createElement('div',{'class':'ball'})
    div.appendChild(div2)

})

function createElement(element, options) {
    const elem = document.createElement(element)
    applyOptions(elem, options)
    document.body.append(elem)
    return elem
}

function applyOptions(element, options) {
    for (const key of Object.keys(options)) {
        element.setAttribute(key, options[key])
    }
}