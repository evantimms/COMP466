const MIN_IDX = 1
const MAX_IDX = 20

let currentPhotoIdx = 1
let currentTransition = 'seq'

function drawImage (blob, caption) {
    const img = new Image()
    const canvas = document.querySelector('#canvas')
    const context = canvas.getContext('2d')
    context.clearRect(0, 0, canvas.width, canvas.height)
    img.onload = () => {
        context.drawImage(img, 0, 0, canvas.width, canvas.height)
    }
    img.src = URL.createObjectURL(blob)
    document.querySelector('#caption').innerText = caption
}

async function getTitle () {
    const url =  new URL(`http://localhost:8000/part2/api/image_meta/${currentPhotoIdx}/`)
    const resp = await fetch(url, {
        method: 'GET'
    })

    const data = await resp.json()
    return data.title
}

async function download () {
    const url =  new URL(`http://localhost:8000/part2/api/download/${currentPhotoIdx}/`)
    const resp = await fetch(url, {
        method: 'GET'
    })

    const blob = await resp.blob()
    return blob
}

async function getImage () {
    try {
        const title = await getTitle()
        const blob = await download()
        drawImage(blob, title)
    } catch (err) {
        console.log(err)
        alert('Server error has occured')
    }
}

function handleChangeIdx (val) {
    const old = currentPhotoIdx
    if (val === 'previous' && currentPhotoIdx > MIN_IDX) {
        currentPhotoIdx--;
    } else if (val === 'next' && currentPhotoIdx < MAX_IDX) {
        currentPhotoIdx++;
    } else if (val === 'random') {
        currentPhotoIdx =  Math.floor(Math.random() * (MAX_IDX + 1))
    }

    if (old !== currentPhotoIdx) {
        getImage()
    }
}

function handleTransitionChange () {
    const nextBtn = document.querySelector('#next-btn')
    const prevBtn = document.querySelector('#prev-btn')
    const randBtn = document.querySelector('#rand-btn')

    if (currentTransition === 'seq') {
        nextBtn.style.display = ''
        prevBtn.style.display = ''
        randBtn.style.display = 'none'
    } else {
        randBtn.style.display = ''
        nextBtn.style.display = 'none'
        prevBtn.style.display = 'none'
    }
}

function setup () {
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', (event) => {
            handleChangeIdx(event.target.value)
        })
    })

    document.getElementById('transition-selector').addEventListener('change', (event) => {
        currentTransition = event.target.value
        handleTransitionChange()
    })

    document.querySelector('#transition-selector').addEventListener('change', (selection) => {
        currentTransition = selection.value
    })

    // document.querySelector('#control-btn').addEventListener('click', (event) => {
    //     if (event.target.value === 'stop') {
    //         stopShow()
    //     } else {
    //         startShow()
    //     }
    // })

    handleTransitionChange()
    getImage()
}


window.addEventListener('load', setup, false);