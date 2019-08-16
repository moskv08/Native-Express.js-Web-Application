-- Database: ExpressDB

DROP DATABASE "ExpressDB";
CREATE DATABASE "ExpressDB"
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

-- Genres table
CREATE TABLE IF NOT EXISTS genres(
   	genre_id serial PRIMARY KEY, -- implicit primary key constraint
   	genre VARCHAR (50) NOT NULL
);

-- Authors table
CREATE TABLE IF NOT EXISTS authors(
   	author_id int NOT NULL UNIQUE PRIMARY KEY, -- implicit primary key constraint
   	surname VARCHAR (50) NOT NULL,
   	givenname VARCHAR (20) NOT NULL
);

-- Books table
CREATE TABLE IF NOT EXISTS books(
   	isbn int NOT NULL UNIQUE PRIMARY KEY, -- implicit primary key constraint
   	title VARCHAR (50) NOT NULL,
	genre_id integer not null references genres(genre_id),
	author_id integer not null references authors(author_id)
);

-- Mapping table for books and authors
-- CREATE TABLE books_authors (
-- 	book_id    	int REFERENCES books (isbn) ON UPDATE CASCADE ON DELETE CASCADE,
-- 	author_id 	int REFERENCES authors (author_id) ON UPDATE CASCADE,
-- 	CONSTRAINT book_author_pkey PRIMARY KEY (book_id, author_id)  -- explicit pk
-- );

/* -------------------------------------------------------------------------------------- */
-- Insert Genres
INSERT INTO genres (genre) VALUES
    ('Crime'),('Romance'),('Fiction'),('Adventure'),('Kids'),('Biography');

-- Insert Authors
INSERT INTO authors (author_id, surname, givenname) VALUES
    ('1', 'Hezard', 'Peter'),
	('2', 'Stripes', 'Marry'), 
	('3', 'Hitchcock', 'Alfred');
	
-- Insert Books
INSERT INTO books (isbn, title, genre_id, author_id) VALUES
    ('888123420', 'Hope in the Wind', (SELECT genre_id from genres WHERE genre='Romance'), 1),
	('223235232', 'The art of war', (SELECT genre_id from genres WHERE genre='Biography'), 1),
	('200123948', 'Lord of the rings', (SELECT genre_id from genres WHERE genre='Fiction'), 1),
	('900238142', 'Duty of Love', (SELECT genre_id from genres WHERE genre='Romance'), 3),
	('391798736', 'Backyard Thugs', (SELECT genre_id from genres WHERE genre='Crime'), 2),
	('599987333', 'Piggy Bank robbery', (SELECT genre_id from genres WHERE genre='Crime'), 2),
	('230097415', 'Moo the cat', (SELECT genre_id from genres WHERE genre='Kids'), 3);

	   
	   
	   
	   
	   
	   
	   
	   
	   