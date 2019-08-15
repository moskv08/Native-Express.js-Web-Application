-- Database: ExpressDB
-- DROP DATABASE "ExpressDB";
CREATE DATABASE "ExpressDB"
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

/* Books table */
CREATE TABLE IF NOT EXISTS books(
   	id serial PRIMARY KEY,
	isbn VARCHAR (15) NOT NULL,
   	title VARCHAR (50) NOT NULL,
   	genre VARCHAR (20) NOT NULL,
	author VARCHAR (50) NOT NULL
);

/* Genre table */
CREATE TABLE IF NOT EXISTS genre(
   	id serial PRIMARY KEY,
   	title VARCHAR (50) NOT NULL,
);

/* Author table */
CREATE TABLE IF NOT EXISTS authors(
   	id serial PRIMARY KEY,
   	surname VARCHAR (50) NOT NULL,
   	givenname VARCHAR (20) NOT NULL,
);



/* Add books to table*/
INSERT INTO books
       [ ( column_name [, ...] ) ]
       VALUES ( value [, ...] )
	   
	   