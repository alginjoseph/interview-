// ============================================================
//         JavaScript Array Methods - Interview Examples
// ============================================================

const fruits = ["apple", "banana", "cherry", "date", "elderberry"];
const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const mixed = [1, "hello", true, null, undefined, { name: "Alice" }, [1, 2]];
const nested = [[1, 2], [3, 4], [5, [6, 7]]];
const users = [
  { id: 1, name: "Alice", age: 25, active: true },
  { id: 2, name: "Bob", age: 30, active: false },
  { id: 3, name: "Charlie", age: 22, active: true },
  { id: 4, name: "Diana", age: 28, active: true },
];

// ============================================================
// 1. push() — Adds one or more elements to the END of an array
// Returns: new length of the array
// ============================================================
const pushExample = [...fruits];
const newLength = pushExample.push("fig", "grape");
console.log("push():", pushExample);
// ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape']
console.log("New length:", newLength); // 7

// ============================================================
// 2. pop() — Removes the LAST element from an array
// Returns: the removed element
// ============================================================
const popExample = [...fruits];
const removed = popExample.pop();
console.log("pop():", popExample);    // ['apple', 'banana', 'cherry', 'date']
console.log("Removed:", removed);     // 'elderberry'

// ============================================================
// 3. shift() — Removes the FIRST element from an array
// Returns: the removed element
// ============================================================
const shiftExample = [...fruits];
const shiftedItem = shiftExample.shift();
console.log("shift():", shiftExample);    // ['banana', 'cherry', 'date', 'elderberry']
console.log("Shifted item:", shiftedItem); // 'apple'

// ============================================================
// 4. unshift() — Adds elements to the BEGINNING of an array
// Returns: new length of the array
// ============================================================
const unshiftExample = [...fruits];
unshiftExample.unshift("avocado", "blueberry");
console.log("unshift():", unshiftExample);
// ['avocado', 'blueberry', 'apple', 'banana', 'cherry', 'date', 'elderberry']

// ============================================================
// 5. map() — Creates a NEW array by transforming each element
// Does NOT mutate the original array
// ============================================================
const doubled = numbers.map((num) => num * 2);
console.log("map():", doubled); // [6, 2, 8, 2, 10, 18, 4, 12, 10, 6, 10]

const userNames = users.map((user) => user.name);
console.log("map() names:", userNames); // ['Alice', 'Bob', 'Charlie', 'Diana']

const userCards = users.map(({ id, name, age }) => ({ id, name, age }));
console.log("map() destructured:", userCards);

// ============================================================
// 6. filter() — Creates a NEW array with elements that PASS a test
// Does NOT mutate the original array
// ============================================================
const uniqueNums = [...new Set(numbers)];
const greaterThanFour = uniqueNums.filter((num) => num > 4);
console.log("filter():", greaterThanFour); // [5, 9, 6]

const activeUsers = users.filter((user) => user.active);
console.log("filter() active users:", activeUsers);

// ============================================================
// 7. reduce() — Reduces the array to a SINGLE value
// Signature: reduce(callback(accumulator, currentValue, index, array), initialValue)
// ============================================================
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("reduce() sum:", sum); // 44

const product = [1, 2, 3, 4, 5].reduce((acc, curr) => acc * curr, 1);
console.log("reduce() product:", product); // 120

// Flatten array using reduce
const flattened = [[1, 2], [3, 4], [5, 6]].reduce((acc, curr) => acc.concat(curr), []);
console.log("reduce() flatten:", flattened); // [1, 2, 3, 4, 5, 6]

// Count occurrences using reduce
const countOccurrences = numbers.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
}, {});
console.log("reduce() count:", countOccurrences); // { '1': 2, '3': 2, '5': 3, ... }

// Group objects by a property
const groupedByActive = users.reduce((acc, user) => {
  const key = user.active ? "active" : "inactive";
  acc[key] = acc[key] || [];
  acc[key].push(user);
  return acc;
}, {});
console.log("reduce() group by:", groupedByActive);

// ============================================================
// 8. forEach() — Executes a function for EACH element
// Returns: undefined (does NOT create a new array)
// ============================================================
console.log("forEach():");
fruits.forEach((fruit, index) => {
  console.log(`  [${index}] ${fruit}`);
});

// ============================================================
// 9. find() — Returns the FIRST element that satisfies a condition
// Returns: the element, or undefined if not found
// ============================================================
const firstBig = numbers.find((num) => num > 5);
console.log("find():", firstBig); // 9

const foundUser = users.find((user) => user.id === 3);
console.log("find() user:", foundUser); // { id: 3, name: 'Charlie', ... }

// ============================================================
// 10. findIndex() — Returns the INDEX of the first matching element
// Returns: index or -1 if not found
// ============================================================
const idx = numbers.findIndex((num) => num > 5);
console.log("findIndex():", idx); // 5 (index of 9)

const userIdx = users.findIndex((user) => user.name === "Diana");
console.log("findIndex() user:", userIdx); // 3

// ============================================================
// 11. some() — Returns true if AT LEAST ONE element passes the test
// Short-circuits on first match
// ============================================================
const hasEven = numbers.some((num) => num % 2 === 0);
console.log("some() hasEven:", hasEven); // true

const hasInactiveUser = users.some((user) => !user.active);
console.log("some() hasInactive:", hasInactiveUser); // true

// ============================================================
// 12. every() — Returns true if ALL elements pass the test
// Short-circuits on first failure
// ============================================================
const allPositive = numbers.every((num) => num > 0);
console.log("every() allPositive:", allPositive); // true

const allActive = users.every((user) => user.active);
console.log("every() allActive:", allActive); // false

// ============================================================
// 13. includes() — Checks if an array CONTAINS a given value
// Uses strict equality (===)
// ============================================================
console.log("includes() 'banana':", fruits.includes("banana")); // true
console.log("includes() 'mango':", fruits.includes("mango"));   // false
console.log("includes() NaN:", [1, NaN, 3].includes(NaN));      // true (unlike indexOf)

// ============================================================
// 14. indexOf() — Returns the INDEX of the FIRST occurrence
// Returns: -1 if not found. Cannot find NaN
// ============================================================
console.log("indexOf() 'cherry':", fruits.indexOf("cherry")); // 2
console.log("indexOf() 5:", numbers.indexOf(5));              // 4
console.log("indexOf() NaN:", [1, NaN, 3].indexOf(NaN));      // -1

// ============================================================
// 15. lastIndexOf() — Returns the INDEX of the LAST occurrence
// ============================================================
console.log("lastIndexOf() 5:", numbers.lastIndexOf(5)); // 10

// ============================================================
// 16. slice() — Returns a SHALLOW COPY of a portion of an array
// Does NOT mutate the original. slice(start, end) — end is exclusive
// ============================================================
console.log("slice(1, 3):", fruits.slice(1, 3)); // ['banana', 'cherry']
console.log("slice(-2):", fruits.slice(-2));      // ['date', 'elderberry']
console.log("slice():", fruits.slice());          // full shallow copy

// ============================================================
// 17. splice() — Adds/removes/replaces elements IN-PLACE
// MUTATES the original. Returns removed elements.
// splice(start, deleteCount, ...itemsToAdd)
// ============================================================
const spliceArr = [...fruits];
const splicedOut = spliceArr.splice(1, 2, "blueberry", "cranberry");
console.log("splice() original:", spliceArr);   // ['apple', 'blueberry', 'cranberry', 'date', 'elderberry']
console.log("splice() removed:", splicedOut);   // ['banana', 'cherry']

// ============================================================
// 18. concat() — Merges two or more arrays into a NEW array
// Does NOT mutate the originals
// ============================================================
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];
console.log("concat():", arr1.concat(arr2, arr3)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Spread operator alternative (modern)
console.log("concat spread:", [...arr1, ...arr2, ...arr3]);

// ============================================================
// 19. join() — Joins all elements into a STRING
// Default separator is a comma
// ============================================================
console.log("join():", fruits.join(", "));  // 'apple, banana, cherry, date, elderberry'
console.log("join('-'):", fruits.join("-")); // 'apple-banana-cherry-date-elderberry'
console.log("join(''):", fruits.join(""));   // 'applebananadateelderberry'

// ============================================================
// 20. reverse() — Reverses an array IN-PLACE
// MUTATES the original
// ============================================================
const reverseArr = [1, 2, 3, 4, 5];
reverseArr.reverse();
console.log("reverse():", reverseArr); // [5, 4, 3, 2, 1]

// Non-mutating reverse (modern)
const original = [1, 2, 3, 4, 5];
const reversed = original.toReversed(); // ES2023
console.log("toReversed():", reversed); // [5, 4, 3, 2, 1]
console.log("original unchanged:", original); // [1, 2, 3, 4, 5]

// ============================================================
// 21. sort() — Sorts elements IN-PLACE
// Default: sorts as STRINGS (lexicographic). MUTATES the original.
// ============================================================
const sortArr = [10, 1, 21, 2, 100];
sortArr.sort(); // lexicographic — WRONG for numbers!
console.log("sort() default (wrong for numbers):", sortArr); // [1, 10, 100, 2, 21]

sortArr.sort((a, b) => a - b); // ascending
console.log("sort() ascending:", sortArr); // [1, 2, 10, 21, 100]

sortArr.sort((a, b) => b - a); // descending
console.log("sort() descending:", sortArr); // [100, 21, 10, 2, 1]

const sortedUsers = [...users].sort((a, b) => a.age - b.age);
console.log("sort() by age:", sortedUsers.map((u) => `${u.name}(${u.age})`));

// Non-mutating sort (modern)
const nums = [3, 1, 4, 1, 5];
const sortedNums = nums.toSorted((a, b) => a - b); // ES2023
console.log("toSorted():", sortedNums); // [1, 1, 3, 4, 5]
console.log("original unchanged:", nums); // [3, 1, 4, 1, 5]

// ============================================================
// 22. flat() — Flattens a nested array up to a given depth
// Default depth is 1
// ============================================================
console.log("flat() depth 1:", nested.flat());     // [1, 2, 3, 4, 5, [6, 7]]
console.log("flat() depth 2:", nested.flat(2));    // [1, 2, 3, 4, 5, 6, 7]
console.log("flat(Infinity):", nested.flat(Infinity)); // fully flattened

// ============================================================
// 23. flatMap() — map() + flat(1) combined
// More efficient than calling map().flat()
// ============================================================
const sentences = ["Hello World", "Foo Bar"];
const words = sentences.flatMap((s) => s.split(" "));
console.log("flatMap():", words); // ['Hello', 'World', 'Foo', 'Bar']

const doubled2 = [1, 2, 3].flatMap((x) => [x, x * 2]);
console.log("flatMap() doubled:", doubled2); // [1, 2, 2, 4, 3, 6]

// ============================================================
// 24. Array.from() — Creates an array from array-like or iterable objects
// ============================================================
console.log("Array.from() string:", Array.from("hello"));      // ['h', 'e', 'l', 'l', 'o']
console.log("Array.from() Set:", Array.from(new Set([1, 2, 2, 3]))); // [1, 2, 3]
console.log("Array.from() length:", Array.from({ length: 5 }, (_, i) => i + 1)); // [1, 2, 3, 4, 5]

// Remove duplicates (common interview pattern)
const withDups = [1, 2, 2, 3, 3, 4];
const unique = Array.from(new Set(withDups));
console.log("Remove duplicates:", unique); // [1, 2, 3, 4]

// ============================================================
// 25. Array.isArray() — Checks if a value is an ARRAY
// ============================================================
console.log("isArray([]):", Array.isArray([]));          // true
console.log("isArray({}):", Array.isArray({}));          // false
console.log("isArray('str'):", Array.isArray("str"));    // false
console.log("isArray(null):", Array.isArray(null));      // false

// ============================================================
// 26. Array.of() — Creates an array from the given arguments
// Unlike new Array(3) which creates [empty x 3], Array.of(3) creates [3]
// ============================================================
console.log("Array.of():", Array.of(1, 2, 3));  // [1, 2, 3]
console.log("Array.of(3):", Array.of(3));         // [3]  <- different from new Array(3)
console.log("new Array(3):", new Array(3));        // [empty x 3]

// ============================================================
// 27. fill() — Fills array elements with a STATIC value
// fill(value, start, end) — end is exclusive. MUTATES the original.
// ============================================================
const fillArr = [1, 2, 3, 4, 5];
fillArr.fill(0, 2, 4);
console.log("fill():", fillArr); // [1, 2, 0, 0, 5]

const zeros = new Array(5).fill(0);
console.log("fill() zeros:", zeros); // [0, 0, 0, 0, 0]

// ============================================================
// 28. copyWithin() — Copies part of an array to another position
// copyWithin(target, start, end). MUTATES the original.
// ============================================================
const cwArr = [1, 2, 3, 4, 5];
cwArr.copyWithin(0, 3); // copy from index 3 to index 0
console.log("copyWithin():", cwArr); // [4, 5, 3, 4, 5]

// ============================================================
// 29. entries(), keys(), values() — Iterator methods
// ============================================================
const iterArr = ["a", "b", "c"];
console.log("entries():", [...iterArr.entries()]); // [[0,'a'], [1,'b'], [2,'c']]
console.log("keys():", [...iterArr.keys()]);        // [0, 1, 2]
console.log("values():", [...iterArr.values()]);    // ['a', 'b', 'c']

// ============================================================
// 30. at() — Access elements with POSITIVE or NEGATIVE index
// Negative index counts from the end. ES2022
// ============================================================
console.log("at(0):", fruits.at(0));   // 'apple'
console.log("at(-1):", fruits.at(-1)); // 'elderberry' (last element)
console.log("at(-2):", fruits.at(-2)); // 'date'

// ============================================================
//             COMMON INTERVIEW PATTERNS
// ============================================================

// --- Pattern 1: Chaining methods ---
const result = users
  .filter((user) => user.active)
  .map((user) => user.name)
  .sort();
console.log("\nChaining:", result); // ['Alice', 'Charlie', 'Diana']

// --- Pattern 2: Remove duplicates ---
const dupArr = [1, 2, 3, 2, 1, 4];
console.log("Remove duplicates:", [...new Set(dupArr)]); // [1, 2, 3, 4]

// --- Pattern 3: Find max/min using reduce ---
const maxVal = numbers.reduce((max, n) => (n > max ? n : max), -Infinity);
const minVal = numbers.reduce((min, n) => (n < min ? n : min), Infinity);
console.log("Max:", maxVal); // 9
console.log("Min:", minVal); // 1

// Also works with Math.max/min spread:
console.log("Math.max spread:", Math.max(...numbers)); // 9
console.log("Math.min spread:", Math.min(...numbers)); // 1

// --- Pattern 4: Flatten deeply nested array ---
const deepNested = [1, [2, [3, [4, [5]]]]];
console.log("Deep flatten:", deepNested.flat(Infinity)); // [1, 2, 3, 4, 5]

// --- Pattern 5: Partition array into two groups ---
const partition = (arr, fn) =>
  arr.reduce(([pass, fail], item) => (fn(item) ? [[...pass, item], fail] : [pass, [...fail, item]]), [[], []]);

const [evens, odds] = partition(numbers, (n) => n % 2 === 0);
console.log("Evens:", evens); // [4, 2, 6]
console.log("Odds:", odds);   // [3, 1, 1, 5, 9, 5, 3, 5]

// --- Pattern 6: Zip two arrays together ---
const keys = ["a", "b", "c"];
const values = [1, 2, 3];
const zipped = keys.map((key, i) => [key, values[i]]);
console.log("Zip:", zipped); // [['a', 1], ['b', 2], ['c', 3]]

// To object:
const obj = Object.fromEntries(zipped);
console.log("Zip to object:", obj); // { a: 1, b: 2, c: 3 }

// --- Pattern 7: Chunk array into groups ---
const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

console.log("Chunk by 3:", chunk([1, 2, 3, 4, 5, 6, 7], 3)); // [[1,2,3],[4,5,6],[7]]

// --- Pattern 8: Intersection of two arrays ---
const setA = [1, 2, 3, 4, 5];
const setB = [3, 4, 5, 6, 7];
const intersection = setA.filter((x) => setB.includes(x));
console.log("Intersection:", intersection); // [3, 4, 5]

// --- Pattern 9: Difference of two arrays ---
const difference = setA.filter((x) => !setB.includes(x));
console.log("Difference A-B:", difference); // [1, 2]

// --- Pattern 10: Transpose a matrix ---
const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const transposed = matrix[0].map((_, colIdx) => matrix.map((row) => row[colIdx]));
console.log("Transposed:", transposed); // [[1,4,7],[2,5,8],[3,6,9]]
