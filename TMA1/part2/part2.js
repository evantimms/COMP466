const PAGES = ['intro', 'unit-1', 'unit-2', 'unit-3', 'quiz-1', 'quiz-2', 'quiz-3']
let selected = 'unit-1'

// Handlers for top level links
window.onload = () => {
    document.querySelectorAll('.module').forEach(mod => {
        if (!mod.classList.contains('intro')) {
            mod.style.display = 'None'
        } 
    })
    
    document.querySelectorAll('.sublink').forEach(el => {
        el.addEventListener('click', () => {
            document.querySelectorAll('.sublink').forEach(other => other.classList.remove('active'))

            el.classList.forEach(classname => {
                if (PAGES.includes(classname)) {
                    el.classList.add('active')
                    selected = classname
                }
            })

            document.querySelectorAll('.module').forEach(mod => {
                if (mod.classList.contains(selected)) {
                    mod.style.display = ''
                } else {
                    mod.style.display = 'None'
                }
            })

        })
    })
}