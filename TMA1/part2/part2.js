let selected = 'quiz1'
let unitPage = 0

QUIZ_1_ANS = [
    'a',
    'b',
    'c',
    'c',
    'a',
    'b'
]

QUIZ_2_ANS = [
    'a',
    'b',
    'c',
    'c',
    'a',
    'b'
]

QUIZ_3_ANS = [
    'a',
    'a',
    'b',
    'c',
    'c',
    'a'
]

function movePage (pageNumber) {
    document.querySelector('.page').innerHTML = this.responseText
}

function setupUnit () {
    document.querySelector('.nextPage').addEventListener('click', () => {
        if (unitPage < 3) {
            unitPage++
            req = new XMLHttpRequest()
            req.addEventListener('load', movePage)
            req.open('GET', `sections/${selected}_pages/page${unitPage}.html`)
            req.send()
        }
    })

    document.querySelector('.previousPage').addEventListener('click', () => {
        if (unitPage > 0) {
            unitPage--
            req = new XMLHttpRequest()
            req.addEventListener('load', movePage)
            req.open('GET', `sections/${selected}_pages/page${unitPage}.html`)
            req.send()
        }
    })

    req = new XMLHttpRequest()
    req.addEventListener('load', movePage)
    req.open('GET', `sections/${selected}_pages/page${unitPage}.html`)
    req.send()
}

function setupQuiz (guide) {
    document.querySelector('#answers').addEventListener('click', () => {
        const q1 = document.querySelector('input[name="q1"]:checked')?.value;
        const q2 = document.querySelector('input[name="q2"]:checked')?.value;
        const q3 = document.querySelector('input[name="q3"]:checked')?.value;
        const q4 = document.querySelector('input[name="q4"]:checked')?.value;
        const q5 = document.querySelector('input[name="q5"]:checked')?.value;
        const q6 = document.querySelector('input[name="q6"]:checked')?.value;
        const answers = [q1, q2, q3, q4, q5, q6]
        if (q1 && q2 && q3 && q4 && q5 && q6) {
            let correct = 0
            answers.forEach((answer, idx) => {
                if (answer === guide[idx]) {
                    correct ++
                }
            })
            alert('You scored ' + correct + ' out of 6')
        } else {
            alert('Please finish the quiz first!')
        }
    })

    document.querySelector('#reset').addEventListener('click', () => {
        document.querySelectorAll('input:checked').forEach(el => {
            el.checked = false
        })
        alert('Quiz Reset')
    })
}


function setActiveLink () {
    document.querySelectorAll('.sublink').forEach(other => other.classList.remove('active'))

    document.querySelectorAll('.sublink').forEach(el => {
        if (selected === el.id) {
            el.classList.add('active')
        }
    })
}

function fetchPage () {

    function responseHandler () {
        document.querySelector('.content').innerHTML = this.responseText
        
        if (selected === 'unit1') {
            document.querySelector('button').addEventListener('click', () => {
                selected = 'quiz1'
                setActiveLink()
                fetchPage()
                setupUnit()
            })
            setupUnit()
        } else if (selected === 'unit2') {
            document.querySelector('button').addEventListener('click', () => {
                selected = 'quiz2'
                setActiveLink()
                fetchPage()
                setupUnit()
            })
            setupUnit()
        } else if (selected === 'unit3') {
            document.querySelector('button').addEventListener('click', () => {
                selected = 'quiz3'
                setActiveLink()
                fetchPage()
                setupUnit()
            })
            setupUnit()
        } else if (selected === 'quiz1') {
            setupQuiz(QUIZ_1_ANS)
        } else if (selected === 'quiz2') {
            setupQuiz(QUIZ_2_ANS)
        } else if (selected === 'quiz3') {
            setupQuiz(QUIZ_3_ANS)
        }
    }

    req = new XMLHttpRequest()
    req.addEventListener('load', responseHandler)
    req.open('GET', `sections/${selected}.xml`)
    req.send()
}

// Handlers for top level links
window.onload = () => {
    document.querySelectorAll('.sublink').forEach(el => {
        el.addEventListener('click', () => {
            selected = el.id
            setActiveLink()
            fetchPage()
        })
    })

    fetchPage()
    setActiveLink()
}
