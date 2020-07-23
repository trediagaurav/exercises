-- 1. Write a query to select all the columns from the table “costumer” in the
-- database named dvdrental.

SELECT * FROM customer 

-- 2. Write a query to display the names (first_name, last_name) using an alias
-- name full name.

SELECT first_name ||' '|| last_name AS full_name
FROM customer

-- 3. You want to know every date where one or several accounts were created.

SELECT create_date
FROM customer

-- Write a query to select the dates of creation from the customer table, it should
-- not have duplicates.

SELECT DISTINCT create_date
FROM customer

-- 4. Write a query to get the details of all customers from the customer table in
-- descending order by their first name.

SELECT 
first_name
FROM
customer
ORDER By
first_name DESC

-- 5. Write a query to get the film ID, title, description, year of release, and rental
-- rate in ascending order according to their rental rate.

select film_id, title, release_year, rental_rate from film order by rental_rate ASC

-- 6. Write a query to get the address, the district, and the phone number from
-- the customers leaving in the district Texas in the address table.

SELECT
address,
phone,
district
FROM
address
where 
district like 'Texas'

-- 7. Write a query to retrieve the details of the movies with the id 15 and 150.

SELECT * FROM film 
WHERE 
film_id = 150 
OR
film_id = 15

-- 8. Pick your favorite movie. Write a query to see if the rental shop owns it.
-- Write a query to get the film ID, the title, the description, the length and the
-- rental rate from the film table for your movie title.

SELECT film_id, title, description, rental_rate, length
FROM film
where title = 'Airplane Sierra'

-- 9. Didn’t find it? Maybe you made a mistake in the name. Write a query to get
-- the film ID, the title, the description, the length and the rental rate from the film
-- table for all the movies starting with the two first letters of your movie.

SELECT film_id, title, description, rental_rate, length
FROM film
where title like 'Ai%'

-- 10. You want to have a choice between ten propositions of movies and you
-- want the cheapest ones. Write a query to find the 10th cheapest movies.

SELECT * FROM film
order by 
rental_rate ASC
LIMIT 10

-- 11. You are not satisfied with the results. Write a query to find the 10th next
-- cheapest movies. Try to not use LIMIT.

SELECT * FROM film
order by 
rental_rate ASC
LIMIT 20

-- BONUS. Classify. How can you produce a list of movies, with each labeled as
-- 'cheap' or 'expensive' depending on if their rental rate is more than 2nis? Return 2
-- columns: the title and the rental rate as “cost” of the movies in question.

select 
title,
rental_rate,
CASE 
WHEN rental_rate > 2 THEN 'expensive'
else
'cheap'
END AS cost
from film

-- 16. Update the column email of the table customer to a new email 'a@gmail.com for all customers that start with 'A' as there firs name

update customer
set email = 'b@gmail.com'
where
first_name like 'A%'
returning *

-- 17. Update the last update date of the address on the last update of the customer.

update address
set last_update = customer.last_update
from customer
where customer.address_id = address.address_id

-- 18. Some movies need a warning about the age limit suggested. Change a column
-- in the film table to display this warning: “not available for children under 13” when the
-- rating is PG-13. Try to do it so you can see what movie is concerned.

select rating, title,
CASE 
WHEN rating = 'PG-13' THEN 'not available for children under 13'
else
'Available for children'
END AS AGE_Limit
from film

-- 19. Write a SQL statement to insert 3 countries inside the country table by a
-- single insert statement. Give them an id and a name.

insert into country(country)
values 
('India1'),
('Maharashtra'),
('Koliwada')
returning country_id, country

-- 20. Write a SQL statement to add a column region_id to the table country.

ALTER TABLE country
ADD region_id SMALLINT;

-- 21. Delete the first country you created above.

DELETE FROM country
Where country = 'India1'