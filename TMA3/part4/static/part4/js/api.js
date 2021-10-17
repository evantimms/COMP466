const getComponents = async () => {
    const url = new URL('http://localhost:8000/part4/api/components')
    const resp = await fetch(url)
    if (resp.ok) {
        return resp.json()
    } else {
        console.log(resp)
        alert('Backend error')
    }
}

const createUser = async (params) => {
    const url = new URL('http://localhost:8000/part4/api/auth/create')
    const resp = await fetch(url, {
        method: 'POST',
        type: 'application/json',
        body: JSON.stringify(params)
    })

    if (resp.ok) {
        window.location.assign(resp.url)
    } else {
        alert('Backend error occured.')
        console.error(resp, resp.status)
    }
}

const login = async (username, password) => {
    const url = new URL('http://localhost:8000/part4/api/auth/login')
    url.searchParams.append('username', username)
    url.searchParams.append('password', password)
    const resp = await fetch(url)

    if (resp.ok) {
        window.location.assign(resp.url)
    } else if (resp.status === 403) {
        return 'Incorrect username or password.'
    } else {
        console.error(resp, resp.status)
        return 'Unable to log in.'
    }
}

export { getComponents, createUser, login }