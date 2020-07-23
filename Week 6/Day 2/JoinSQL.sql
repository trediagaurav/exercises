12. Write a query to join the data of the customer table and the payment table. You
want to get the amount and the date of every payment made by a customer, ordered
by his id (from 1 to…).

SELECT 
	customer.customer_id,
	customer.first_name,
	customer.last_name,
	payment.amount,
	payment.payment_date
From customer
INNER JOIN payment ON customer.customer_id = payment.customer_id
ORDER BY customer.customer_id ASC


13. You want to be assured of the performance of your sellers. Write a query to get
the customer’s id, names (first and last), the amount and the date of payment
ordered by the id of the staff who sold them the dvd.

select
    customer.customer_id,
    customer.first_name,
    customer.last_name,
    staff.first_name, staff_id,
    amount,
    payment_date
FROM
    customer, payment, staff
WHERE
customer.customer_id = payment.customer_id
AND
payment.staff_id = staff.staff_id

14. You need to check your inventory. Write a query to get all the movies which are
not in the inventory.



15. Write a query to find which city is in which country.

select
    city.city_id,
    city.city,
    country.country_id,
    country
FROM city
Inner join country on country,country_id = city.country_id