-- 1. Write a query to find the first_name, last_name and salaries of the employees who have a higher salary than the employee whose last_name is Bull.

select 
first_name,
last_name,
salary
FROM
employees
where 
salary > (SELECT salary from employees where last_name ='Bell')

-- 2. Write a SQL subquery to find the first_name and last_name of all employees who works in the IT department.

select 
first_name,
last_name,
department_name
FROM
employees, departments
where department_name = 'IT'


-- 3. Write a SQL subquery to find the first_name and last_name of the employees under a manager who works for a department based in the United States.
-- Hint : Write single-row and multiple-row subqueries
Select
first_name,
last_name
From
employees
where
manager_id in(SELECT employee_id from employees where department_id in (select department_id from departments where location_id in (select
				location_id from locations where country_id = 'US')))
-- 4. Write a SQL subquery to find the first_name and last_name of the employees who are working as a manager.

SELECT
first_name,
Last_name
from employees
where
	(employee_id IN (SELECT manager_id FROM employees));

-- 5. Write a SQL subquery to find the first_name, last_name and salary, which is greater than the average salary of the employees.

Select 
first_name,
last_name,
salary
FROM employees
where
	salary > (select round(avg(salary), 2) from employees);

-- 6. Write a SQL subquery to find the first_name, last_name and salary, which is equal to the minimum salary for this post, he/she is working on.

SELECT first_name, last_name, salary
FROM employees
WHERE employees.salary = (SELECT min_salary
FROM jobs
WHERE employees.job_id = jobs.job_id);

-- 7. Write a SQL Subquery to find the first_name, last_name and salary of the employees who earn more than the average salary and works in any of the IT departments.

SELECT first_name, last_name, salary
FROM employees
WHERE department_id in (select department_id from departments
						where department_name like 'IT%') AND
						salary > (SELECT round(AVG(salary), 2)FROM
								 employees)

-- 8. Write a SQL subquery to find the first_name, last_name and salary of the employees who draw a more salary than the employee, which the last name is Bell.

Select 
first_name,
last_name,
salary
From employees
where salary > (select salary from employees 
			   	Where last_name= 'Bell')
-- 9. Write a SQL subquery to find all the information of the employees who draws the same salary as the minimum salary for all departments.

Select *
From employees
where salary = (SELECT min(salary) from employees);

-- 10. Write a SQL subquery to find all the information of the employees whose salary greater than the average salary of all departments.

Select *
From employees
where salary > (SELECT AVG(salary) from employees);

-- 11. Write a subquery to find the first_name, last_name, job_id and salary of the employees who draws a salary that is higher than the salary of all the Shipping Clerk (JOB_ID = 'SH_CLERK'). Sort the results on salary from the lowest to highest.

Select 
first_name,
last_name,
job_id,
salary
From employees
where salary > ALL(SELECT salary from employees
			   where job_id = 17)
			   Order by salary ASC

-- 12. Write a query to find the names (first_name, last_name) of the employees who are not supervisors.

Select 
first_name,
last_name,
job_title
From employees, jobs
where job_title <> 'Supervisor'
			  

-- 13. Write a SQL subquery to find the employee ID, first name, last name and department names of all employees.

Select 
employee_id
first_name,
last_name,
department_name
From 
employees, departments


-- 14. Write a SQL subquery to find the employee ID, first name, last name and salary of all employees whose salary is above the average salary for their departments.

Select 
employee_id
first_name,
last_name,
salary
From 
employees
where salary > (select round(avg(salary), 2)
			   FROM employees Where department_id = department_id);

			  
-- 15. Write a subquery to find the 5th maximum salary of all salaries.

Select 
salary,
employee_id
from employees
order by salary DESC limit 5
			  

-- 16. Write a subquery to find the 4th minimum salary of all the salaries.

Select 
salary,
employee_id
from employees
order by salary ASC limit 4

-- 17. Write a subquery to select last 10 records from a table.

Select *
from employees
ORDER BY employee_id DESC LIMIT 10

-- 18. Write a query to list department number, the name for all the departments in which there are no employees in the department.

SELECT * FROM departments 
WHERE department_id 
NOT IN (select department_id FROM employees);

-- 19. Write a query to get three maximum salaries.
Select salary 
from employees
order by salary desc limit 3

-- 20. Write a query to get three minimum salaries.

Select salary 
from employees
order by salary asc limit 3

-- 21. Write a query to get nth max salaries of employees.
