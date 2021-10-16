const getComputerList = () => {}

const getComputer = (id) => {}

const getComponents = async () => {
    const url = new URL(`http://localhost:8000/part3/api/components`)
    const resp = await fetch(url)
    if (resp.ok) {
        return resp.json()
    } else {
        console.log(resp)
        alert('Backend error')
    }
}

const getComponent = (category, id) => {}

const getUserCart = () => {}

export { getComputerList, getComputer, getComponents, getComponent, getUserCart }