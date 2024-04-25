CREATE DATABASE Train_db;
USE Train_db;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS train;
DROP TABLE IF EXISTS ticket;


CREATE TABLE users(
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    first_Name  VARCHAR(20),
    last_Name   VARCHAR(20),
    email_id VARCHAR(50) UNIQUE NOT NULL,
    gender VARCHAR(20),
    dob VARCHAR(20),
    address VARCHAR(50),
    phone_no VARCHAR(15),
    password VARCHAR(20)
    
    
);

CREATE TABLE train(
     train_number INT PRIMARY KEY,
     user_id INT  ,
     train_name VARCHAR(30),
     source VARCHAR(30),
     destination VARCHAR(30),
     phone_no int,
     classtype VARCHAR(15),
     train_time VARCHAR(15),
     train_date VARCHAR(15),
     running_days VARCHAR(15),
     halt_time int,
     distance VARCHAR(15)
    
);

/*
CREATE TABLE ticket (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    totalPrice DECIMAL(10, 2),
    orderDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE ticketDetails (
    id INT PRIMARY KEY AUTO_INCREMENT,
    ticket_id INT,
    train_number INT,
    price DECIMAL(10, 2),
    quantity INT,
    ticketDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


*/

CREATE TABLE ticket(
    ticket_id INT PRIMARY KEY AUTO_INCREMENT,
    uid INT,
    tno INT,
    first_name VARCHAR(20),
    last_name  VARCHAR(20),
    train_number INT ,
    train_name VARCHAR(30),
    source VARCHAR(30),
    destination VARCHAR(30),
    phone_no int,
    fare VARCHAR(30),
    age int,
    date VARCHAR(30),
    gender VARCHAR(30),
    quota VARCHAR(30),
    classtype VARCHAR(30),
    FOREIGN KEY (uid) REFERENCES users(user_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (tno) REFERENCES train(train_number) ON DELETE CASCADE ON UPDATE CASCADE
    );

CREATE TABLE admin(admin_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),address VARCHAR(50),email_id VARCHAR(50)UNIQUE NOT NULL,phone_no VARCHAR(255),password VARCHAR(255));
INSERT INTO train(train number,user_id,train name,source, destination,phone no,class,train_time,train_date,running day,halt time,distance) VALUES("8888",8,128,"samsung",19499,"m33_5g.jpg");
