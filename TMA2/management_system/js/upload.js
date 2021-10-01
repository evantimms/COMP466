function setup() {
    document.querySelector('#file-upload-submit').addEventListener('click', () => {
        const fileInput = document.querySelector('#file-upload-file')
        if (fileInput.files && fileInput.files[0])  {
            const file = fileInput.files[0]
            const req = new XMLHttpRequest()
            req.addEventListener('load', (resp) => {
                if (resp.target.status === 200) {
                    alert(resp.target.responseText)
                } else {
                    alert('Error uploading your course. Please assert it is properly formatted')
                }
            })


            const data = new FormData()
            data.append('file', file)
            req.open('POST', 'course_routes/upload_course.php')
            req.send(data)
        } else {
            alert('Please select a file first')
        }
    })
}

window.onload = setup