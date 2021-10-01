function getCourses () {
    const req = new XMLHttpRequest()
    req.addEventListener('load', (resp) => {
        if (resp.target.status === 200) {
            const data = resp.target.responseText.split(',')
            const courseList = document.querySelector('.course-list')
            data.forEach(datapoint => {
                if (datapoint.length) {
                    const [courseId, courseTitle] = datapoint.split('-')
                    const li = document.createElement('li')
                    const h4 = document.createElement('h4')
                    h4.innerText = courseTitle
                    li.classList.add('course')
                    li.appendChild(h4)
                    courseList.appendChild(li)
                    li.addEventListener('click', () => window.open(`course_routes/get_course.php?id=${parseInt(courseId)}`))
                }
               
            })
        }
    })
    req.open('GET', 'course_routes/get_courses.php')
    req.send()
}

window.onload = getCourses()