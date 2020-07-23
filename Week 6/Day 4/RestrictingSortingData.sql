-- 1. Write a query to display the name, including first_name and last_name and salary for all employees whose salary is out of the range between $10,000 and $15,000.

select 
first_name,
last_name,
salary
from employees
where salary > 10000 and salary < 15000


-- 2. Write a query to display the name, including first_name and last_name, and department ID who works in the department 30 or 100 and arrange the result in ascending order according to the department ID.

select first_name, last_name, department_id
from employees
where department_id in (30, 100)
order by department_id ASC

-- 3. Write a query to display the name, including first_name and last_name, and salary who works in the department either 30 or 100 and salary is out of the range between $10,000 and $15,000.

select first_name, last_name, department_id
from employees
where department_id in (30, 100)
AND salary > 10000 and salary < 15000


-- 4. Write a query to display the name, including first_name and last_name and hire date for all employees who were hired in 1987.

select first_name, last_name, hire_date
from employees
where hire_date >= '1987-01-01' and hire_date <= '1987-12-31';


-- 5. Write a query to get the first name of the employee who holds the letter 'c' and 'e' in the first name.

select first_name
from employees
where first_name like '%c%' and first_name like '%e%'

-- 6. Write a query to display the last name, job, and salary for all those employees who hasn't worked as a Programmer or a Shipping Clerk, and not drawing the salary $4,500, $10,000, or $15,000.

select last_name, job_title, salary
from employees, jobs
where
(salary = 24000 and salary = 10000 and salary =15000)
AND
(job_title != 'Programmer' and job_title != 'Shipping Clerk');

-- 7. Write a query to display the last names of employees whose name contain exactly six characters.

SELECT last_name 
FROM employees 
WHERE last_name LIKE '______';

-- 8. Write a query to display the last name of employees having 'e' as the third character.

SELECT last_name 
FROM employees 
WHERE last_name LIKE '__e%';

-- 9. Write a query to display the jobs/designations available in the employees table.

SELECT job_title
FROM jobs


-- 10. Write a query to display the name, including first_name, last_name, salary and 15% of salary as PF of all employees.

select 
first_name,
last_name,
salary,
salary * .15 PF
from employees

-- 11. Write a query to select all information of employees whose last name is either 'JONES' or 'BLAKE' or 'SCOTT' or 'KING' or 'FORD'.
SELECT *
FROM employees
where last_name = 'Jones' or last_name = 'Blake' or last_name ='Scott' or last_name = 'King' or last_name = 'Ford';

