import { getCookie, removeFromCart } from './helpers.js'

const cartPageSetup = () => {
    document.querySelectorAll('.remove').forEach(btn => btn.addEventListener('click', (event) => {
        const selectedId = btn.parentElement.parentElement.id
        removeFromCart(parseInt(selectedId))
        alert('Removed from cart!')
        loadCart()
    }))
}

const loadCart = async () => {
    let cart = getCookie('cart')
    if (!cart) {
        cart = JSON.stringify([])
    }

    const resp = await fetch(new URL('http://localhost:8000/part3/cart'), {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: cart
    })

    if (resp.ok) {
        const body = await resp.text()
        document.querySelector('html').innerHTML = body
        cartPageSetup()
    } else {
        alert('Backend error')
    }
}

const loadOrders = async () => {
    
}

const setup = () => {
    document.getElementById('cart').addEventListener('click', () => {
        loadCart()
    })
}

window.onload = setup