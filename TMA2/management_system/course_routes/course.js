let selected
let pages
let selectedPage

function showSelectedPage (pages) {
    pages.forEach((page, idx) => {
        if (idx === selectedPage) {
            page.style.display = 'block'
        } else {
            page.style.display = 'none'
        }
    })
}

function setupUnit(unit) {
    const pages = unit.querySelectorAll('.page')
    selectedPage = 0
    unit.querySelector('.nextPage').addEventListener('click', () => {
        if (selectedPage + 1 < pages.length) {
            selectedPage += 1
        }
        showSelectedPage(pages)        
    })

    unit.querySelector('.previousPage').addEventListener('click', () => {
        if (selectedPage - 1 >= 0) {
            selectedPage -= 1
        }
        showSelectedPage(pages)    
    })

    showSelectedPage(pages)  
}

function getAnswers (quiz, rubric) {
    let quizComplete = true
    const answers = []
    quiz.querySelectorAll('form').forEach(form => {
        const value = form.querySelector('input:checked')?.value
        if (!value) {
            quizComplete = false
        } else {
            answers.push(value)
        }
    })

    if (!quizComplete) {
        alert('Please finish the quiz first!')
    } else {
        let correct = 0
        answers.forEach((answer, idx) => {
            const correctionBox = document.querySelector(`#correction-q${idx + 1}`)
            if (answer === rubric[idx]) {
                correct++
                correctionBox.innerHTML = 'Correct.'
                correctionBox.style.color = 'green'
            } else {
                correctionBox.innerHTML = `Incorrect, correct answer is ${rubric[idx]}`
                correctionBox.style.color = 'red'
            }
        })
        alert(`You scored ${correct} out of ${rubric.length}`)
    }
}

function resetQuiz (quiz) {
    quiz.querySelectorAll('form').forEach((question, idx) => {
        question.querySelector('input:checked').checked = false
        question.querySelector(`#correction-q${idx+1}`).innerHTML = ''
    })
    alert('Quiz reset')
}

function setupQuiz(quiz) {
    const questions = quiz.querySelectorAll('form')
    const answers = []
    questions.forEach(question => {
        answers.push(question.getAttribute('answer'))
    })

    answerBtn = quiz.querySelector('#answers')
    resetBtn = quiz.querySelector('#reset')
    answerBtn.addEventListener('click', () => getAnswers(quiz, answers))
    resetBtn.addEventListener('click', () => resetQuiz(quiz))
}

function setupModule(mod) {
    if (mod.classList.contains('unit')) {
        setupUnit(mod)
    } else {
        setupQuiz(mod)
    }
}

function updateSelected() {
    const modules = document.querySelectorAll('.module')
    let selectedModule
    modules.forEach(mod => {
        if (mod.id !== selected) {
            mod.style.display = 'none';
        } else {
            mod.style.display = 'block';
            selectedModule = mod;
            setupModule(selectedModule)
        }
    })
}

function setup() {
    const modules = document.querySelectorAll('.module')
    if (modules?.length) {
        selected = modules[0].id
        updateSelected()
    } else {
        alert('No content for course')
    }

    document.querySelectorAll('.sublink').forEach(sublink => {
        sublink.addEventListener('click', () => {
            selected = sublink.id
            updateSelected()
        })
    })
}

window.onload = setup