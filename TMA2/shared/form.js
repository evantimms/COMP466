// Simple form validation

function handleResponse () {
    response = this.responseText
    if (response === 'fail') {
        alert('Incorrrect username or password')
    } else {
        window.location.href = 'tma2.php'
    }
}

function setupFormControls () {
    document.querySelector('.user-controls input').addEventListener('click', (el) => {
        const usernameInput = document.querySelector('#username-input')
        const passwordInput = document.querySelector('#password-input')

        if (usernameInput.value?.length > 0 && passwordInput.value?.length > 0) {
            req = new XMLHttpRequest()
            req.addEventListener('load', handleResponse)
            req.open('GET', `shared/${el.target.id}.php?username=${usernameInput.value}&password=${passwordInput.value}`)
            req.send()
        } else {
            alert('Please enter values for username and password!')
        }
    })
}


window.onload = setupFormControls