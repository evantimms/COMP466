function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function addUserToCourse (courseId, selection) {
    const req = new XMLHttpRequest()
    req.addEventListener('load', (res) => {
        if (res.target.status === 200) {
            alert(res.target.responseText)
        }
    })
    req.open('GET', `course_routes/assign_user_course.php?cid=${courseId}&uid=${selection.value}`)
    req.send()
}

function deleteCourse(courseId) {
    const req = new XMLHttpRequest()
    req.addEventListener('load', (res) => {
        if (res.target.status === 200) {
            alert(res.target.responseText)
            removeAllChildNodes(document.querySelector('.course-list'))
            setup()
        }
    })
    req.open('GET', `course_routes/delete_course.php?id=${courseId}`)
    req.send()
}

function setupManager (courses, users) {
    courses.forEach(course => {
        if (course.length) {
            const list = document.querySelector('.course-list')
            const [courseId, coursename] = course.split('-')
            const li = document.createElement('li')
            li.classList.add('course-manager')
            const div = document.createElement('div')
            div.classList.add('course-controls')
            const assignUserBtn = document.createElement('button')
            const deleteCourseBtn = document.createElement('button')
            assignUserBtn.innerText = 'Assign to User'
            deleteCourseBtn.innerText = 'Delete'
            const selection = document.createElement('select')
            const h4 = document.createElement('h4')
            h4.innerText = coursename
            users.forEach(user => {
                if (user.length) {
                    const [userId, username] = user.split('-')
                    const option = document.createElement('option')
                    option.value = userId
                    option.innerHTML = username
                    selection.appendChild(option)
                }
            })
            
            div.appendChild(assignUserBtn)
            div.appendChild(selection)
            div.appendChild(deleteCourseBtn)
            li.appendChild(h4)
            li.appendChild(div)
            list.append(li)

            assignUserBtn.addEventListener('click', () => addUserToCourse(courseId, selection))
            deleteCourseBtn.addEventListener('click', () => deleteCourse(courseId))
        }
    })
}

function setup() {
    const courseReq = new XMLHttpRequest()
    courseReq.addEventListener('load', (resp) => {
        if (resp.target.status === 200) {
            const courses = resp.target.response.split(',')
            const userReq = new XMLHttpRequest()
            userReq.addEventListener('load', (resp2) => {
                if (resp2.target.status === 200) {
                    users = resp2.target.response.split(',')
                    setupManager(courses, users)
                }
            })
            userReq.open('GET', 'course_routes/get_users.php')
            userReq.send()
        }
    })
    courseReq.open('GET', 'course_routes/get_managed_courses.php')
    courseReq.send()
}

window.onload = setup