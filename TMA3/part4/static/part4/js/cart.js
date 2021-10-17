import { removeFromCart } from './api.js'

const setup = () => {
    document.querySelectorAll('.remove').forEach(btn => btn.addEventListener('click', () => {
        const computerId = btn.parentElement.parentElement.id
        removeFromCart(computerId)
    }))
}

window.onload = setup