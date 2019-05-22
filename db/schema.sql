CREATE DATABASE burger_db;
USE burger_db;
CREATE TABLE burgerName (
    id INT (20) AUTO_INCREMENT NOT NULL,
    burgerName VARCHAR (50) NOT NULL,
    devoured BOOLEAN,
    date TIMESTAMP,
    PRIMARY KEY (id)
);