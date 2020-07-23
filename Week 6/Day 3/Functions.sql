-- TAKING OUT AVERAGE

select AVG(amount) FROM payment

-- TAKING TOTAL 

select sum(amount) FROM payment

-- TAKING COUNT (NUMBERS OF ROW IN SELECTED ITEM)

select COUNT(actor_id) FROM actor