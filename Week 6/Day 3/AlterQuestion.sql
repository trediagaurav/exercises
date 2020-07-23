-- 1. Write a SQL statement to add a column region_id to the table country.

ALTER TABLE country
ADD region_id SMALLINT;

-- 2. Write a SQL statement to change the data type of the column region_id to
-- text in the table country.

ALTER TABLE country
ALTER COLUMN region_id set data TYPE integer;


-- 3. Write a SQL statement to drop the existing foreign key fk_city from city
-- table. Don’t forget to refresh if you want to see the update. You can see the
-- primary and foreign keys into “constraints”.