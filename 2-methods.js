/* ============================================================
   ARRAYS 2 — METHODS: THE CHEAT SHEET (teach this first)
   ------------------------------------------------------------
   These REPLACE writing a loop by hand. Each method takes a
   FUNCTION and runs it on every item for you.
   Run:  node 2-methods.js
   ============================================================ */

const nums = [1, 2, 3, 4, 5, 6];

// map — TRANSFORM every item -> NEW array, same length
// console.log(nums.map((n) => n * 2));          // [2,4,6,8,10,12]

// filter — KEEP items that pass the test -> NEW array, shorter
// console.log(nums.filter((n) => n % 2 === 0)); // [2,4,6]

// find — FIRST item that passes (one item, not an array)
// console.log(nums.find((n) => n > 3));         // 4
// console.log(nums.find((n) => n > 99));        // undefined

// reduce — BOIL the whole array down to ONE value (sum, max...)
// acc = running result, n = current item, 0 = starting value
// console.log(nums.reduce((acc, n) => acc + n, 0));  // 21

// some / every — return true/false
// console.log(nums.some((n) => n > 5));         // true  (at least one)
// console.log(nums.every((n) => n > 0));        // true  (all of them)

// sort — order the array. For NUMBERS you MUST give (a,b)=>a-b
// console.log([3, 1, 2].sort((a, b) => a - b)); // [1,2,3]
// console.log([3, 1, 2].sort((a, b) => b - a)); // [3,2,1]

// CHAIN — filter then map, left to right
// console.log(nums.filter((n) => n % 2 === 0).map((n) => n * 10)); // [20,40,60]


/* ============================================================
   ARRAYS 2 — BUILD THE 8   (3 cases each — all must pass)
   ============================================================ */

// ----- 1. map (WORKED EXAMPLE) -----
// Write `withTax(prices)` that RETURNS a NEW array with each price * 1.1.
function withTax(prices) {
  return prices.map((p) => p * 1.1);
}
console.log(withTax([10, 20])); 
console.log(withTax([]));// [11, 22]
console.log(withTax([100]));

// TEST 1:  withTax([10,20])   ->  [11, 22]
// TEST 2:  withTax([])        ->  []
// TEST 3:  withTax([100])     ->  [110]

// ----- 2. filter -----
// Write `cheap(prices)` that RETURNS a NEW array of prices under 20.
// your code here
function cheap(prices){
  return prices.find((p) => p < 20);
}
console.log(cheap([10, 25, 5, 40, 15]));
console.log(cheap([100, 200]));
console.log(cheap([19, 20, 21]));


// console.log(cheap([10, 25, 5, 40, 15]));
// TEST 1:  cheap([10,25,5,40,15])   ->  [10,5,15]
// TEST 2:  cheap([100,200])         ->  []
// TEST 3:  cheap([19,20,21])        ->  [19]

// ----- 3. find -----
// Write `firstExpensive(prices)` that RETURNS the first price over 30.
// your code here
function firstExpensive(prices){
  return prices.find((p) => p > 30);
}
console.log(firstExpensive([10, 25, 5, 40, 15]));
console.log(firstExpensive([1, 2, 3]));
console.log(firstExpensive([50, 99]));
// console.log(firstExpensive([10, 25, 5, 40, 15]));
// TEST 1:  firstExpensive([10,25,5,40,15])   ->  40
// TEST 2:  firstExpensive([1,2,3])           ->  undefined
// TEST 3:  firstExpensive([50,99])           ->  50

// ----- 4. reduce (sum) -----
// Write `total(prices)` that RETURNS the sum using reduce.
// your code here
function total(prices){
  return prices.reduce((p, n) => p + n, 0);
}
console.log(total([10, 25, 5, 40, 15]));
console.log(total([]));
console.log(total([7]));
// console.log(total([10, 25, 5, 40, 15]));
// TEST 1:  total([10,25,5,40,15])   ->  95
// TEST 2:  total([])                ->  0
// TEST 3:  total([7])               ->  7

// ----- 5. some / every -----
// Write `anyFree(prices)` -> true if ANY price is 0.
// Write `allPositive(prices)` -> true if EVERY price is > 0.
// your code here
function anyFree(prices){
  return prices.some((p) => p === 0);
}
function allPositive(prices){
  return prices.every((p) => p > 0);
}
console.log(anyFree([10, 0, 5]));
console.log(allPositive([10, 0, 5]));
console.log(allPositive([10, 5]));
// console.log(anyFree([10, 0, 5]), allPositive([10, 0, 5]));
// TEST 1:  anyFree([10,0,5])       ->  true
// TEST 2:  allPositive([10,0,5])   ->  false
// TEST 3:  allPositive([10,5])     ->  true

// ----- 6. sort -----
// Write `lowToHigh(prices)` that RETURNS the prices sorted ascending.
// Hint: numbers need .sort((a,b) => a - b)
// your code here
function lowToHigh(prices){
  return prices.sort((a, b) => a-b);
}
console.log(lowToHigh([10, 25, 5, 40, 15]));
console.log(lowToHigh([3, 2, 1]));
console.log(lowToHigh([2]));


// console.log(lowToHigh([10, 25, 5, 40, 15]));
// TEST 1:  lowToHigh([10,25,5,40,15])   ->  [5,10,15,25,40]
// TEST 2:  lowToHigh([3,1,2])           ->  [1,2,3]
// TEST 3:  lowToHigh([2])               ->  [2]

// ----- 7. chain: filter then map -----
// Write `cheapDoubled(prices)` -> keep prices under 20, then double each.
// your code here
function cheapDoubled(prices){
  return prices.filter((p) => p < 20).map((p) => p * 2);
}
console.log(cheapDoubled([10, 25, 5, 40, 15]));
console.log(cheapDoubled([100]));
console.log(cheapDoubled([5, 5]));

// console.log(cheapDoubled([10, 25, 5, 40, 15]));
// TEST 1:  cheapDoubled([10,25,5,40,15])   ->  [20,10,30]
// TEST 2:  cheapDoubled([100])             ->  []
// TEST 3:  cheapDoubled([5,5])             ->  [10,10]

// ----- 8. methods on objects -----
// Write `inStockNames(items)` -> array of the .name of every item where .stock > 0.
// (filter by stock, then map to name — arrays + objects + methods together)
const inventory = [
  { name: "pen", stock: 5 },
  { name: "book", stock: 0 },
  { name: "bag", stock: 3 },
  { name: "cup", stock: 0 },
];
// your code here

function inStockNames(items){
  items.filter(item => item.stock > 0);
  return items.map(item => item.name);
}
console.log(inStockNames(inventory));
console.log(inStockNames([]));
console.log(inStockNames([{name: "x", stock: 1}]));

// console.log(inStockNames(inventory));
// TEST 1:  inStockNames(inventory)                        ->  ["pen","bag"]
// TEST 2:  inStockNames([])                               ->  []
// TEST 3:  inStockNames([{name:"x",stock:1}])             ->  ["x"]
