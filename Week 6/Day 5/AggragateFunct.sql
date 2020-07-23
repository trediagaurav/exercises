-- 1. Write a query to find the number of jobs available in the employees table.

SELECT COUNT(DISTINCT job_id) 
FROM employees;

-- 2.Write a query to get the total salaries payable to employees.

SELECT SUM(salary)
FROM employees;

-- 3. Write a query to get the minimum salary from employees table.

SELECT MIN(salary)
FROM employees;

-- 4. Write a query to get the maximum salary of an employee working as a Programmer.

SELECT
MAX(salary)
FROM employees
WHERE job_id = 9

-- 5. Write a query to get the average salary and number of employees working in the department which ID is 90.

SELECT
AVG(salary),
count(*)
FROM employees
WHERE department_id = 90


-- 6. Write a query to get the highest, lowest, total, and average salary of all employees.

SELECT
MAX(salary),
min(salary),
sum(salary),
round(AVG(salary), 2)
from employees


-- 7. Write a query to get the number of employees with the same job.

select job_id
from employees
group by
job_id

-- 8. Write a query to get the difference between the highest and lowest salaries.

select 
max(salary) - min(salary)
from employees
 
-- 9. Write a query to find the manager ID and the salary of the lowest-paid employee under that manager.

select 
manager_id,
min(salary)
from employees
where manager_id is not null
group by manager_id
order by min(salary) ASC

-- 10. Write a query to get the department ID and the total salary payable in each department.

select 
department_id,
SUM (salary) as total
from employees
group by 
department_id


-- 11. Write a query to get the average salary for each post excluding programmer.

select 
job_id,
round(AVG(salary), 2)
From 
employees
where job_id != 9
group by job_id

-- 12. Write a query to get the total salary, maximum, minimum and average salary of all posts for those departments which ID 5.

SELECT
MAX(salary),
min(salary),
sum(salary),
round(AVG(salary), 2)
job_id
from employees
where
department_id = 5
GROUP BY job_id

-- 13. Write a query to get the job ID and maximum salary of each post for maximum salary is at or above $4000.

SELECT
job_id,
MAX(salary)
from employees
group by job_id
having
max(salary) >= 4000

-- 14. Write a query to get the average salary for all departments working more than 10 employees.

SELECT
department_id,
round(avg(salary), 2),
count(*)
from employees
group by department_id
having count(*) > 5
