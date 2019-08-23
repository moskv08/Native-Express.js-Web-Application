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

-- Authors table
CREATE TABLE IF NOT EXISTS authors(
   	author_id INT NOT NULL UNIQUE PRIMARY KEY, -- implicit primary key constraint
   	surname VARCHAR (50) NOT NULL,
   	givenname VARCHAR (20) NOT NULL
);

-- Books table
CREATE TYPE genres AS ENUM ('Crime','Romance','Fiction','Adventure','Kids','Biography','Undefined');
CREATE TABLE IF NOT EXISTS books(
   	isbn INT NOT NULL UNIQUE PRIMARY KEY, -- implicit primary key constraint
   	title VARCHAR (50) NOT NULL,
	genre genres NOT NULL DEFAULT 'Undefined'
	author_id INTEGER NOT NULL REFERENCES authors(author_id)
);

/* -------------------------------------------------------------------------------------- */
-- Insert Genres
-- INSERT INTO genres (genre) VALUES
    -- ('Crime'),('Romance'),('Fiction'),('Adventure'),('Kids'),('Biography');

-- Insert Authors
INSERT INTO authors (author_id, surname, givenname) VALUES
    ('1', 'Hezard', 'Peter'),
	('2', 'Stripes', 'Marry'), 
	('3', 'Hitchcock', 'Alfred');
	
-- Insert Books
INSERT INTO books (isbn, title, genre, author_id) VALUES
    ('888123420', 'Hope in the Wind', 'Romance', 1),
	('223235232', 'The art of war', 'Biography', 1),
	('200123948', 'Lord of the rings', 'Fiction', 1),
	('900238142', 'Duty of Love', 'Romance', 3),
	('391798736', 'Backyard Thugs', 'Crime', 2),
	('599987333', 'Piggy Bank robbery', 'Crime', 2),
	('230097415', 'Moo the cat', 'Kids', 3);

	   
	   
	   
	   
	   
	   
	   
	   
	   