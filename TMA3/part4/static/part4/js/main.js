import { getCookie, removeFromCart } from './helpers.js'

const cartPageSetup = () => {
    // document.querySelectorAll('.remove').forEach(btn => btn.addEventListener('click', (event) => {
    //     const selectedId = btn.parentElement.parentElement.id
    //     removeFromCart(parseInt(selectedId))
    // }))
}


const setup = () => {
    document.getElementById('cart').addEventListener('click', () => {
        loadCart()
    })
}

window.onload = setup