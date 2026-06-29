/* ============================================================
   ARRAYS 1 — BASICS: THE CHEAT SHEET (teach this first)
   ------------------------------------------------------------
   Array = an ORDERED list. Each item has a position (index)
   starting at 0. Walk through these out loud, then do the 8.
   Run:  node 1-basics.js
   ============================================================ */

// CREATE — square brackets, items separated by commas
const fruits = ["apple", "banana", "cherry"];
//   index:        0         1         2

// READ — by index (starts at 0!)
// console.log(fruits[0]);            // "apple"
// console.log(fruits[2]);            // "cherry"
// console.log(fruits[99]);          // undefined  (no item there)

// LENGTH — how many items. Last index is always length - 1
// console.log(fruits.length);       // 3
// console.log(fruits[fruits.length - 1]); // "cherry"  (last item)

// UPDATE — assign to an index
fruits[1] = "blueberry";
// console.log(fruits);              // ["apple","blueberry","cherry"]

// ADD / REMOVE at the END  -> push / pop
fruits.push("date"); // add to end
fruits.pop(); // remove from end (and returns it)

// ADD / REMOVE at the START -> unshift / shift
fruits.unshift("kiwi"); // add to front
fruits.shift(); // remove from front (and returns it)

// IS IT IN THERE? -> includes / indexOf
// console.log(fruits.includes("cherry"));  // true / false
// console.log(fruits.indexOf("cherry"));   // position, or -1 if missing

/* ============================================================
   ARRAYS 1 — BUILD THE 8   (3 cases each — all must pass)
   ============================================================ */

// ----- 1. Get one item (WORKED EXAMPLE) -----
// Write `secondItem(arr)` that RETURNS the item at index 1.
function secondItem(arr) {
  return arr[1];
}
console.log(secondItem(["a", "b", "c"]));
console.log(secondItem([10, 20, 30]));
console.log(secondItem(["x", "y"]));

// TEST 1:  secondItem(["a","b","c"])   ->  "b"
// TEST 2:  secondItem([10, 20, 30])    ->  20
// TEST 3:  secondItem(["x", "y"])      ->  "y"

// ----- 2. How many items -----
// Write `howMany(arr)` that RETURNS the number of items.
// your code here
function howMany(arr) {
  return arr.length;
}
console.log(howMany([1, 2, 3, 4]));
console.log(howMany([]));
console.log(howMany(["only"]));

// console.log(howMany([1, 2, 3, 4]));
// TEST 1:  howMany([1,2,3,4])   ->  4
// TEST 2:  howMany([])          ->  0
// TEST 3:  howMany(["only"])    ->  1

// ----- 3. Last item -----
// Write `lastItem(arr)` that RETURNS the last item (any length).
// Hint: arr[arr.length - 1]
// your code here
function lastItem(arr) {
  return arr[arr.length - 1];
}
console.log(lastItem(["x", "y", "z"]));
console.log(lastItem([5]));
console.log(lastItem([1, 2, 3, 4]));

// console.log(lastItem(["x", "y", "z"]));
// TEST 1:  lastItem(["x","y","z"])   ->  "z"
// TEST 2:  lastItem([5])             ->  5
// TEST 3:  lastItem([1, 2, 3, 4])    ->  4

// ----- 4. Add to the end -----
// Write `addItem(arr, item)` that pushes item onto arr and RETURNS arr.
// your code here
function addItem(arr, item) {
  arr.push(item);
   return arr;
}
console.log(addItem([1, 2], 3));
console.log(addItem([], "hi").length);
console.log(addItem(["a"], "b"));


// console.log(addItem([1, 2], 3));
// TEST 1:  addItem([1,2], 3)         ->  [1,2,3]
// TEST 2:  addItem([], "hi").length  ->  1
// TEST 3:  addItem(["a"], "b")       ->  ["a","b"]

// ----- 5. Remove the last -----
// Write `removeLast(arr)` that pops the last item off and RETURNS arr.
// your code here
function removeLast(arr){
   arr.pop()
   return arr;
}
console.log(removeLast([1, 2, 3]));
console.log(removeLast([9]).length);
console.log(removeLast([5, 6, 7, 8]));

// console.log(removeLast([1, 2, 3]));
// TEST 1:  removeLast([1,2,3])         ->  [1,2]
// TEST 2:  removeLast([9]).length      ->  0
// TEST 3:  removeLast([5,6,7,8])       ->  [5,6,7]

// ----- 6. Add to the front -----
// Write `addFront(arr, item)` that unshifts item to the front and RETURNS arr.
// your code here
function addFront(arr, item){
   arr.unshift(item);
   return arr;
}
console.log(addFront([2, 3], 1));
console.log(addFront([], "a"));
console.log(addFront(["b"], "a"));
// console.log(addFront([2, 3], 1));
// TEST 1:  addFront([2,3], 1)   ->  [1,2,3]
// TEST 2:  addFront([], "a")    ->  ["a"]
// TEST 3:  addFront(["b"], "a") ->  ["a","b"]

// ----- 7. Is it in there? -----
// Write `hasItem(arr, item)` that RETURNS true/false if item is in arr.
// Hint: arr.includes(item)
// your code here
function hasItem(arr, item){
   if (arr.includes(item)){
      return true;
   } else {
      return false;
   }
}
console.log(hasItem(["cat", "dog"], "dog"));
console.log(hasItem(["cat", "dog"], "fish"));
console.log(hasItem([], "cat"));

// console.log(hasItem(["cat", "dog"], "dog"));
// TEST 1:  hasItem(["cat","dog"], "dog")   ->  true
// TEST 2:  hasItem(["cat","dog"], "fish")  ->  false
// TEST 3:  hasItem([], "cat")              ->  false

// ----- 8. Where is it? -----
// Write `positionOf(arr, item)` that RETURNS the index, or -1 if missing.
// Hint: arr.indexOf(item)
// your code here
function positionOf(arr, item){
   return arr.indexOf(item);
}
console.log(positionOf(["a", "b", "c"], "c"));
console.log(positionOf(["a", "b", "c"], "z"));
console.log(positionOf(["a", "b", "c"], "a"));

// console.log(positionOf(["a", "b", "c"], "c"));
// TEST 1:  positionOf(["a","b","c"], "c")   ->  2
// TEST 2:  positionOf(["a","b","c"], "z")   ->  -1
// TEST 3:  positionOf(["a","b","c"], "a")   ->  0
