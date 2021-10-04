CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(45) DEFAULT NULL,
  password varchar(45) DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE bookmarks (
  id int NOT NULL AUTO_INCREMENT,
  url varchar(256) NOT NULL,
  user_id int NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE courses (
  id int NOT NULL AUTO_INCREMENT,
  course_title VARCHAR(30) NOT NULL,
  content MEDIUMTEXT,
  creator_id int NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (creator_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE assigned_users (
  id int NOT NULL AUTO_INCREMENT,
  course_id int NOT NULL,
  user_id int NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
);

INSERT INTO users (username, password) VALUES ('TestUser', 'password');
