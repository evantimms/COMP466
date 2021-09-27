var re = /(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/gi

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function getBookmarks () {
    const req = new XMLHttpRequest()
    req.addEventListener('load', (resp) => {
        const bookmarks = resp.currentTarget.responseText.split(',')
        const globalBookmarkList = document.querySelector('.bookmark-list')
        removeAllChildNodes(globalBookmarkList)
        bookmarks.forEach(bookmark => {
            if (bookmark.length) {
                const li = document.createElement('li')
                li.appendChild(document.createTextNode(bookmark))
                globalBookmarkList.appendChild(li)
            }
        })
    })
    req.open('GET', `get_bookmarks.php`)
    req.send()
}

function getUserBookmarks () {
    const req = new XMLHttpRequest()
    req.addEventListener('load', (resp) => {
        const bookmarks = resp.currentTarget.responseText.split(',')
        const bookmarksList = document.querySelector('.user-bookmark-list')
        removeAllChildNodes(bookmarksList)
        bookmarks.forEach(bookmark => {
            if (bookmark.length) {
                const li = document.createElement('li')
                li.appendChild(document.createTextNode(bookmark))
                bookmarksList.appendChild(li)
            }
        })
    })
    req.open('GET', `get_user_bookmarks.php`)
    req.send()
}

function addBookmark (url) {
    const req = new XMLHttpRequest();
    req.addEventListener('load', (resp) => {
        getUserBookmarks()
        getBookmarks()
    })
    req.open('GET', `add_bookmark.php?url=${url}`)
    req.send()
}

function setup () {
    document.querySelector('#user-add-bookmark-submit').addEventListener('click', (event) => {
        const url = document.querySelector('#user-add-bookmark-input').value
        if (url.length && url.match(re).length) {
            addBookmark(url)
        } else {
            alert('Please enter a url')
        }
    })

    getBookmarks()
    getUserBookmarks()
}

window.onload = setup