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
        console.log('created')
        // window.location.assign(resp.url)
    } else {
        alert('Backend error occured.')
        console.error(resp, resp.status)
    }
}

export { getComponents, createUser }