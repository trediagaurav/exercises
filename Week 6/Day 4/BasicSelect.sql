-- 1. Write a query to display the names (first_name, last_name) using an alias name “First Name", "Last Name" from employee table.

select first_name as "First Name",
last_name as "Last Name"
from employees

-- 2. Write a query to get a unique department ID from employee table.

select distinct department_id
from employees

-- 3. Write a query to get the details of all employees from the employee table in descending order by their first name.

select *
from employees
order by first_name desc

-- 4. Write a query to get the names (first_name, last_name), salary and 15% of salary as PF for all the employees.

select 
first_name,
last_name,
salary,
salary * .15 PF
from employees

-- 5. Write a query to get the employee ID, names (first_name, last_name) and salary in ascending order according to their salary.

select 
employee_id,
first_name,
last_name,
salary
from employees
order by salary

-- 6. Write a query to get the total salaries payable to employees.

select 
sum(salary)
from employees

-- 7. Write a query to get the maximum and minimum salary paid to the employees.

select 
max(salary),
min(salary)
from employees

-- 8. Write a query to get the average salary and number of employees are working.

select 
avg(salary),
count(*)
from employees

-- 9. Write a query to get the number of employees working with the company.

select 
round(avg(salary),3),
count(*)
from employees

-- 10. Write a query to get the unique number of designations available in the employees table.
select 
count( distinct job_id)
from employees
-- 11. Write a query to get all the first name from the employees table in upper case.

select
Upper(first_name)
from 
employees

-- 12. Write a query to get the first three characters of the first name for all the employees in the employees table.

select
substring(first_name, 1, 3)
from employees

-- 13. Write a query to calculate the expression 171*214+625.

select 
171*214+625 RESULT

-- 14. Write a query to get the name, including first name and last name of all the employees from employees table.

SELECT first_name ||' '|| last_name AS full_name
from 
employees

-- 15. Write a query to get the first names after removing all the leading and trailing blanks of all the employees from employees table.

select 
TRIM(first_name)

from employees

-- 16. Write a query to get the first name, last name and the length of the name, including first_name and last_name of all the employees from employees table.

SELECT 
first_name,
last_name,
LENGTH(first_name)+LENGTH(last_name) "Length Name"
    FROM employees;

-- 17. Write a query to check whether the first_name column of the employees table containing any number.

SELECT 
first_name
   FROM employees 
   WHERE  first_name ~* '0123456789'

-- 18. Write a query to select first ten records from a table.

SELECT employee_id, first_name FROM employees
LIMIT 10

-- 19. Write a query to get a monthly salary (rounded up to 2 decimal places) of each employee.
-- Note : Assume the salary field provides the 'annual salary' information.

select
first_name,
last_name,
round((salary/12),2) as "Montly Salary"
from employees