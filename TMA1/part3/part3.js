let currentPhotoIdx = 0
let currentTransition = 'None'
const images = []
let interval 

function transitionWithFade (image, context) {
    transparency = 0
    transition = () => {
        transparency += 0.08
        context.globalAlpha = transparency
        context.drawImage(image, 0, 0, canvas.width, canvas.height)
        if (transparency >= 1) {
            clearInterval(interval)
        }
    }

    interval = setInterval(transition, 60)
}

function transitionWithSlide (image, context, canvas) {
    slidePos = 0
    
    transition = () => {
        slidePos++
        imgPos = canvas.width - (canvas.width / 30 * slidePos)
        context.drawImage(image, imgPos, 0, canvas.width, canvas.height)
        if (imgPos <= 0) {
            clearInterval(interval)
        }
    }

    interval = setInterval(transition, 60)
}

function transitionImage () {
    let selectedData = {}
    request = new XMLHttpRequest();
    request.overrideMimeType("application/json");
    request.open('GET', './data/mapping.json', true);
    request.onreadystatechange = () => {
        if (request.readyState == 4 && request.status == '200') {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            data = JSON.parse(request.responseText).images

            if (!images.length) {
                for (i = 0; i < 20; ++i) {
                    selectedData = data[i]
                    img = new Image()
                    img.src = `./data/${selectedData['path']}`
                    images.push(img)
                }
            }

            caption = data[currentPhotoIdx].caption
            canvas = document.querySelector('#canvas')
            context = canvas.getContext('2d')
            context.clearRect(0, 0, canvas.width, canvas.height);
            image = images[currentPhotoIdx]

            switch (currentTransition) {
                case 'None':
                    context.drawImage(image, 0, 0, canvas.width, canvas.height)

                    break
                case 'fade':
                    transitionWithFade(image, context)
                    break
                case 'slide':
                    transitionWithSlide(image, context, canvas)
                    break
            }

            document.querySelector('#caption').innerText = caption
        }
  }
  request.send(null)
}

function setup () {
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', (event) => {
            if (event.target.value === 'previous') {
                if (currentPhotoIdx > 0) {
                    currentPhotoIdx--;
                }
            } else {
                if (currentPhotoIdx >= 19) {
                    currentPhotoIdx = 0
                } else {
                    currentPhotoIdx++;   
                }
            }
            transitionImage()
        })
    })

    transitionSelector = document.querySelector('#transition-selector')

    transitionSelector.addEventListener('change', (selection) => {
        currentTransition = transitionSelector.value
    })

    transitionImage()
}


window.addEventListener('load', setup, false);