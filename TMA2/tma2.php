<?php include 'shared/auth.php';?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="shared/main.css">
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700" rel="stylesheet">
    <title>Assignment 1</title>
</head>
<body>
    <div class="main">
        <div class="navbar">
            <div class="title">COMP 466 Assignment 2</div>
            <div class="links">
                <a class="link" href="bookmark_service/">Bookmark Service</a>
                <a class="link" href="management_system/">Management System</a>
                <a class="link" href="shared/logout.php">Logout</a>
            </div>
        </div>
        <div class="content">
            <div class="documentation">
                <div class="documentation-title">Evan Timms - COMP 466</div>
                <div class="documentation-title">Assignment 2</div>
                <div class="documentation-title">Begin Date: 9/26/2021</div>
                <div class="documentation-title">End Date: 10/01/2021</div>
                <div class="documentation-title">Est Hours: 25</div>
                <span class="documentation-divider"></span>
                <div class="documentation-section">
                    <div class="documentation-subtitle">Description</div>
                    <h2>LINK: http://142.93.149.179/login.html</h2>
                    <p>
                        In this assignment, we expanded our web development knowledge to include writing basic backend software such as interactions with a database, authentication and
                        session storage. Assignment 2 required the implementation of two applications, backed by a user-authentication system. The first of these systems was a bookmarking service,
                        which allows a user to storage and retrieve web bookmarks. The bookmarks are tied to a user account, and additionally an aggregated top ten bookmarks are displayed for 
                        the user to see. The second part of assignment 2 required implementing a learning management system, whereby users are able to upload web courses using a <i>Education Markup Language</i>
                        , or EML. This EML would be translated using PHP and displayed in the web as a fully interactable web module. Then, the course creator would be able to assign new users to the existing course.
                    </p>
                    <p>In addition, users would be able to signup, and create accounts, as well as have their session information maintained as they navigate the site. Navigating to a page that requires a 
                        valid user session without will redirect a user to the login.
                    </p>
                </div>
                <div class="documentation-section">
                    <div class="documentation-subtitle">Design</div>
                    <h3>Database Design</h3>
                    <p>
                        The first step in designing our application is the design of the sites database. For the purposes of this documentation, anyone able to use the site is refered to as a user.
                        Below is an UML diagram of the database. As you can see, users are unique and can have 1 or more courses assigned to them. Users can also have 1 or more bookmarks assigned to them.
                        Bookmarks are solely dependent on the user and are deleted when the user account is deleted. Courses have a user that has created them, as well as content and a title.
                    </p>
                    <img src="Comp466TMA2.png" style="width:600px;height:400px;">
                    <p>
                        Courses and users are referenced in the assigned users table. Course may be assigned to multiple users, and a user may have multiple courses, making it a many-to-many relationship.
                        A course is deleted when the user who owns the course deletes it, or the user itself is deleted.
                    </p>
                    <h3>Frontend</h3>
                    <p>
                        With regards to the frontend, the application is broken down into two subsections, the bookmarking feature and the course management feature. The bookmarking 
                        feature contains UI to display a users bookmarks, and offers the ability to create, delete and edit new bookmarks. The course management feature allows a user 
                        to access courses they have been assigned, upload they own course, and assign users to created courses.
                    </p>
                    <h3>EML</h3>
                    <p>
                        The EML is setup as follows. All valid EML starts with a course tag, which contains a name attribute.
                        Next, units in the course are seperated by a unit tag. A course may have multiple units.
                        There may also be quizzes, identified by the quiz tag. Units and Quizzes require a name as well.
                        Units may contain multiple section tags, which define a single page inside the unit. A section can have title tags, subtitle tags, and content tags.
                        These three tags are converted into paragraph and header tags. Finally, quiz tags contain a list of question tags, which themselves have option tags.
                        The question tag must contain a question attribute, which is the question itself, and an answer tag that corresponds to one of the options.
                        Each option needs a option attribute. One option must match the answer. See course.xml for an example.
                    </p>
                    <p>
                        When a course is uploaded, a PHP is script is run to correctly ensure the uploaded file is properly formatted XML, and conforms to
                        the EML specification.
                    </p>
                <div class="documentation-section">
                    <div class="documentation-subtitle">User Guide</div>
                    <p>
                        Before using the application, you will be granted with a logon screen. If you do not have a user account, you may create one by clicking the create account button.
                        After that, you will be prompted to enter a username and password for this account. It is recommended you use the following user as they have a course assigned to them, a course
                        created by them, and some bookmarks. In the courses folder within this repo, there is also a test course in EML which you can upload to test functionality.
                    </p>
                    <p>Test user username: TestUser</p>
                    <p>Test user password: password</p>
                    <p>
                        After logging in, you will be greeted with this page, and a navbar to navigate the site. By clicking on the bookmark service you will be directed there, same for the management system.

                    </p>
                </div>
            </div>
        </div>
    </div>
</body>
</html>