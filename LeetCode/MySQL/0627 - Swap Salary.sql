--627. Swap Salary
--https://leetcode.com/problems/swap-salary/

UPDATE salary
SET sex = CASE WHEN sex = 'f' THEN 'm' ELSE 'f' END