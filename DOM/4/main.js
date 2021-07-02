document.addEventListener('DOMContentLoaded', () => {
    document.body.style.backgroundColor = 'darkgray'

    linkCreate()
})

const domains = ['google.com', 'vk.com', 'youtube.com', 'page.html']

function linkCreate() {
    const ol = document.createElement('ol')

    for (const domainValue of domains) {
        const link = document.createElement('a')
        const li = document.createElement('li')

        if (domainValue.includes('.com')) {
            link.setAttribute('href', 'https://' + domainValue)
            link.style.color = 'darkred'
        } else {
            link.setAttribute('href', domainValue)
        }

        link.appendChild(document.createTextNode(domainValue))
        li.appendChild(link)
        ol.appendChild(li)
    }

    document.body.appendChild(ol)
}
