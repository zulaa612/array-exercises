/* ============================================================
   ARRAYS 4 — EMPLOYEES DATABASE (boss level)
   ------------------------------------------------------------
   HR data. Same tools as the movies file. New twist at the end:
   group AND total a field per group (payroll by department).
   Run:  node 4-database-employees.js
   ============================================================ */

// 15 employees. Fields:
//   name (string), dept (string), salary (number),
//   age (number), years (number at company), remote (boolean)
const employees = [
  { name: "Sara", dept: "engineering", salary: 95000,  age: 29, years: 4,  remote: true  },
  { name: "Ali",  dept: "engineering", salary: 110000, age: 35, years: 7,  remote: false },
  { name: "Omar", dept: "sales",       salary: 60000,  age: 41, years: 10, remote: false },
  { name: "Lina", dept: "sales",       salary: 72000,  age: 38, years: 6,  remote: true  },
  { name: "Maya", dept: "marketing",   salary: 68000,  age: 27, years: 2,  remote: true  },
  { name: "Jon",  dept: "engineering", salary: 130000, age: 45, years: 12, remote: false },
  { name: "Eva",  dept: "design",      salary: 80000,  age: 31, years: 5,  remote: true  },
  { name: "Tom",  dept: "design",      salary: 75000,  age: 28, years: 3,  remote: false },
  { name: "Nia",  dept: "marketing",   salary: 90000,  age: 33, years: 6,  remote: false },
  { name: "Sam",  dept: "sales",       salary: 55000,  age: 24, years: 1,  remote: true  },
  { name: "Kim",  dept: "engineering", salary: 105000, age: 39, years: 8,  remote: true  },
  { name: "Leo",  dept: "support",     salary: 50000,  age: 26, years: 2,  remote: false },
  { name: "Ada",  dept: "support",     salary: 58000,  age: 30, years: 4,  remote: true  },
  { name: "Max",  dept: "design",      salary: 88000,  age: 36, years: 9,  remote: false },
  { name: "Zoe",  dept: "marketing",   salary: 72000,  age: 25, years: 1,  remote: true  },
];

/* ============================================================
   BUILD THE 11   (3 cases each — all must pass)
   ============================================================ */

// ----- 1. Count them (WORKED EXAMPLE) -----
function countEmployees(db) {
  return db.length;
}
console.log(countEmployees(employees)); // 15
// TEST 1:  countEmployees(employees)   ->  15
// TEST 2:  countEmployees([])          ->  0
// TEST 3:  countEmployees([employees[0]]) -> 1

// ----- 2. filter by department -----
// Write `byDept(db, dept)` -> array of employees in that department.
// your code here

// console.log(byDept(employees, "engineering").length);
// TEST 1:  byDept(employees,"engineering").length   ->  4
// TEST 2:  byDept(employees,"support").length       ->  2
// TEST 3:  byDept(employees,"legal").length         ->  0

// ----- 3. filter + condition — high earners -----
// Write `highEarners(db)` -> employees with salary > 90000.
// your code here

// console.log(highEarners(employees).length);
// TEST 1:  highEarners(employees).length                            ->  4
// TEST 2:  highEarners(employees).map(e => e.name).includes("Jon")  ->  true
// TEST 3:  highEarners(employees).map(e => e.name).includes("Omar") ->  false

// ----- 4. map — just the names -----
// Write `allNames(db)` -> array of every employee name.
// your code here

// console.log(allNames(employees)[0]);
// TEST 1:  allNames(employees)[0]       ->  "Sara"
// TEST 2:  allNames(employees).length   ->  15
// TEST 3:  allNames(employees)[14]      ->  "Zoe"

// ----- 5. find by name -----
// Write `findEmployee(db, name)` -> the one object, or undefined.
// your code here

// console.log(findEmployee(employees, "Eva").dept);
// TEST 1:  findEmployee(employees,"Eva").dept     ->  "design"
// TEST 2:  findEmployee(employees,"Eva").salary   ->  80000
// TEST 3:  findEmployee(employees,"Ghost")        ->  undefined

// ----- 6. reduce — total payroll -----
// Write `totalPayroll(db)` -> sum of every salary.
// your code here

// console.log(totalPayroll(employees));
// TEST 1:  totalPayroll(employees)         ->  1208000
// TEST 2:  totalPayroll([])                ->  0
// TEST 3:  totalPayroll([{salary:100}])    ->  100

// ----- 7. average salary -----
// Write `averageSalary(db)` -> mean salary, rounded with Math.round.
// your code here

// console.log(averageSalary(employees));
// TEST 1:  averageSalary(employees)                       ->  80533
// TEST 2:  averageSalary([{salary:100},{salary:200}])     ->  150
// TEST 3:  averageSalary([{salary:50}])                   ->  50

// ----- 8. filter boolean — remote workers -----
// Write `remoteWorkers(db)` -> employees where remote is true.
// your code here

// console.log(remoteWorkers(employees).length);
// TEST 1:  remoteWorkers(employees).length                            ->  8
// TEST 2:  remoteWorkers(employees).map(e => e.name).includes("Sara") ->  true
// TEST 3:  remoteWorkers(employees).map(e => e.name).includes("Ali")  ->  false

// ----- 9. sort — highest paid first -----
// Write `topPaid(db)` -> NEW array sorted by salary, highest first.
// Hint: [...db].sort((a,b) => b.salary - a.salary)
// your code here

// console.log(topPaid(employees)[0].name);
// TEST 1:  topPaid(employees)[0].name      ->  "Jon"
// TEST 2:  topPaid(employees)[0].salary    ->  130000
// TEST 3:  topPaid(employees)[14].name     ->  "Leo"

// ----- 10. chain — filter + sort + map -----
// Write `engineerNamesByPay(db)` -> engineers, sorted highest-paid first, names only.
// your code here

// console.log(engineerNamesByPay(employees));
// TEST 1:  engineerNamesByPay(employees)[0]       ->  "Jon"
// TEST 2:  engineerNamesByPay(employees).length   ->  4
// TEST 3:  engineerNamesByPay(employees)[3]       ->  "Sara"

// ----- 11. GROUP + TOTAL — object of sums (the hard one) -----
// Write `payrollByDept(db)` -> object mapping each dept to its TOTAL salary.
// Hint: result = {}; loop; result[e.dept] = (result[e.dept] || 0) + e.salary.
// your code here

// console.log(payrollByDept(employees));
// TEST 1:  payrollByDept(employees).engineering   ->  440000
// TEST 2:  payrollByDept(employees).support       ->  108000
// TEST 3:  payrollByDept(employees).sales         ->  187000
