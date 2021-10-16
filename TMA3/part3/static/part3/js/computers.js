const handleAddToCart = (event) => {

}

const handleCustomize = (event) => {

}

const setup = () => {
    document.querySelector('.computer-list-btn.customize').addEventListener('click', (event) => {
        console.log('clicked')
    })

    document.querySelector('.computer-list-btn.add').addEventListener('click', (event) => {
        console.log('clicked')
    })
}

window.onload = setup