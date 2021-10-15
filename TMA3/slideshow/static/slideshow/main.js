const MIN_IDX = 0
const MAX_IDX = 19

let currentPhotoIdx = 0
let currentTransition = 'seq'



async function getNextImage (data) {
    const metadata = data[currentPhotoIdx]
    const { title, location } = metadata

    const url =  new URL('http://localhost:8000/slideshow/api/image')
    const params = { idx: currentPhotoIdx }
    url.search = new URLSearchParams(params).toString()

    caption = data[currentPhotoIdx].caption
    canvas = document.querySelector('#canvas')
    context = canvas.getContext('2d')
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, canvas.width, canvas.height)
    document.querySelector('#caption').innerText = caption

}


async function handleImage () {
    const url =  new URL('http://localhost:8000/slideshow/api/images/')

    const resp = await fetch(url, {
        method: 'GET'
    })
    if (resp.ok) {
        data = await resp.json()
        getNextImage(data)
    } else {
        alert('Shits fucked')
    }
}

function setup () {
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', (event) => {
            if (event.target.value === 'previous') {
                if (currentPhotoIdx > MIN_IDX) {
                    currentPhotoIdx--;
                }
            } else {
                if (currentPhotoIdx >= MAX_IDX) {
                    currentPhotoIdx = 0
                } else {
                    currentPhotoIdx++;   
                }
            }
            handleImage()
        })
    })

    transitionSelector = document.querySelector('#transition-selector')

    transitionSelector.addEventListener('change', (selection) => {
        currentTransition = transitionSelector.value
    })

    handleImage()
}


window.addEventListener('load', setup, false);