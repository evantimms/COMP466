DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(45) DEFAULT NULL,
  password varchar(45) DEFAULT NULL,
  PRIMARY KEY (idusers)
);

DROP TABLE IF EXISTS bookmarks;

CREATE TABLE bookmarks (
  id int NOT NULL AUTO_INCREMENT,
  url varchar(45) NOT NULL,
  user_id int NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE courses (
  id int NOT NULL AUTO_INCREMENT,
  course_title VARCHAR(30) NOT NULL,
  content MEDIUMTEXT,
  PRIMARY KEY (id)
);

CREATE TABLE assigned_users (
  id int NOT NULL AUTO_INCREMENT,
  course_id int NOT NULL,
  user_id int NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (course_id) REFERENCES courses(id)
);