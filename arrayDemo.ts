// Sample data
const numbers = [1, 2, 3, 4, 5];
const fruits = ["apple", "banana", "cherry", "date"];

// 1. forEach - Iterate over each element
numbers.forEach((num) => {
  console.log(`Number: ${num}`);
});

// 2. map - Create a new array with modified values
const squaredNumbers = numbers.map((num) => num * num);
console.log("Squared Numbers:", squaredNumbers);

// 3. filter - Create a new array with elements that pass the test
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);

// 4. find - Find the first element that matches a condition
const firstBigNumber = numbers.find((num) => num > 3);
console.log("First Number Greater than 3:", firstBigNumber);

// 5. findIndex - Find the index of the first element that matches a condition
const indexOfCherry = fruits.findIndex((fruit) => fruit === "cherry");
console.log('Index of "cherry":', indexOfCherry);

// 6. reduce - Accumulate a value by iterating through the array
const sum = numbers.reduce((total, num) => total + num, 0);
console.log("Sum of Numbers:", sum);

// 7. reduceRight - Accumulate values starting from the end
const reverseSum = numbers.reduceRight((total, num) => total - num, 10);
console.log("Reverse Sum:", reverseSum);

// 8. some - Check if at least one element satisfies a condition
const hasBigNumber = numbers.some((num) => num > 4);
console.log("Contains a Number Greater than 4:", hasBigNumber);

// 9. every - Check if all elements satisfy a condition
const allPositive = numbers.every((num) => num > 0);
console.log("Are All Numbers Positive:", allPositive);

// 10. includes - Check if an array includes a specific element
const includesBanana = fruits.includes("banana");
console.log('Includes "banana":', includesBanana);

// 11. concat - Combine two arrays into one
const allNumbers = numbers.concat([6, 7, 8]);
console.log("Concatenated Numbers:", allNumbers);

// // 12. flat - Flatten nested arrays
// const nested = [1, [2, [3, 4]]];
// const flatArray = nested.flat(2);
// console.log("Flattened Array:", flatArray);

// // 13. flatMap - Map and flatten in one step
// const flatMapped = numbers.flatMap((num) => [num, num * 2]);
// console.log("FlatMapped Array:", flatMapped);

// 14. fill - Fill array with a static value
const filled = new Array(5).fill(1);
console.log("Filled Array:", filled);

// 15. copyWithin - Copy part of an array within itself
const copied = [1, 2, 3, 4, 5];
copied.copyWithin(0, 3);
console.log("CopyWithin Result:", copied);

// 16. keys, values, entries - Iterators for keys, values, and key-value pairs
const keys = Array.from(numbers.keys());
console.log("Keys:", keys);

const values = Array.from(numbers.values());
console.log("Values:", values);

const entries = Array.from(numbers.entries());
console.log("Entries:", entries);

// 17. toString - Convert array to string
console.log("Array as String:", fruits.toString());

// 18. join - Join array elements with a delimiter
const joined = fruits.join(" - ");
console.log("Joined Fruits:", joined);

// 19. sort - Sort array elements
const sortedNumbers = [...numbers].sort((a, b) => b - a); // Descending
console.log("Sorted Numbers:", sortedNumbers);

// 20. reverse - Reverse array elements
const reversedNumbers = [...numbers].reverse();
console.log("Reversed Numbers:", reversedNumbers);

// 21. slice - Extract a portion of an array
const slicedFruits = fruits.slice(1, 3);
console.log("Sliced Fruits:", slicedFruits);

// 22. splice - Add/Remove elements
const removed = fruits.splice(1, 2, "blueberry", "kiwi");
console.log("Removed Fruits:", removed);
console.log("Updated Fruits:", fruits);

// 23. push, pop - Add/remove elements from the end
numbers.push(6);
console.log("After Push:", numbers);
numbers.pop();
console.log("After Pop:", numbers);

// 24. unshift, shift - Add/remove elements from the beginning
numbers.unshift(0);
console.log("After Unshift:", numbers);
numbers.shift();
console.log("After Shift:", numbers);

// 25. isArray - Check if a value is an array
console.log("Is Array:", Array.isArray(numbers));

// 26. from - Create an array from iterable
const chars = Array.from("hello");
console.log("Array from String:", chars);

// 27. of - Create an array from arguments
const arrayOfValues = Array.of(7, 8, 9);
console.log("Array of Values:", arrayOfValues);
