-- Creating a table with a name login and giving the name of the columns with data type.
-- Primary Key - Is unique in very table and has to be in every table.
-- UNIQUE - Word means special which cant be repeated.
-- NOT NULL - Means has to give the value cant keept it null.

CREATE TABLE LOGIN(
	ID serial NOT NULL PRIMARY KEY,
	secret VARCHAR (100) NOT NULL,
	NAME TEXT UNIQUE NOT NULL
);

-- Inserting the values in the rows of the table which we created above.

INSERT INTO login (secret, name) Values ('abc', 'Gaurav')
INSERT INTO login (secret, name) Values ('xyz', 'Ramu')
INSERT INTO login (secret, name) Values ('lol', 'John')