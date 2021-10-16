import { clearlist, buildComponentList } from './helpers.js'

const buildInfoUI = (component) => {
    const name = document.createElement('div')
    name.classList.add('component-name')
    const price = document.createElement('div')
    price.classList.add('component-price')
    const btn = document.createElement('button')
    btn.classList.add('component-select')

    name.innerText = component.name
    price.innerText = `$${component.price}`
    btn.innerText = 'Select'
    return [name, price, btn]
}

const setup = () => {
    document.querySelector('#fetch-components-btn')
        .addEventListener('click', () => buildComponentList(buildInfoUI))
        
    buildComponentList(buildInfoUI)
}

window.onload = setup