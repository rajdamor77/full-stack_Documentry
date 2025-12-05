
//1. length (property) 🔹 Just reading length does not mutate

let arr = [10, 20, 30];
console.log(arr.length);   // 3

arr.length = 2;
console.log(arr);          // [10, 20]

arr.length = 5;
console.log(arr);          // [10, 20, <3 empty items>]


//2. toString() ,❕Converts array to comma-separated string.(❌ Does not change original array)

let arr = [1, 2, 3];
console.log(arr.toString());   // "1,2,3"



//3. at(index) , Returns element at given position.

let arr = [10, 20, 30, 40];

console.log(arr.at(1));   // 20  (index 1)
console.log(arr.at(-1));  // 40  (last element)
console.log(arr.at(-2));  // 30

//4.join(separator) , Joins all elements into one string.


let fruits = ["apple", "banana", "mango"];

console.log(fruits.join());        // "apple,banana,mango"
console.log(fruits.join(" - "));   // "apple - banana - mango"
console.log(fruits.join(""));      // "applebananamango"


//5. pop() , Removes the last element.

let arr = [10, 20, 30];

let last = arr.pop();

console.log(last);   // 30
console.log(arr);    // [10, 20]


//6.push(value1, value2, ...) , Adds elements at the end (Returns new length.)

let arr = [1, 2];

let newLength = arr.push(3, 4);

console.log(newLength); // 4
console.log(arr);       // [1, 2, 3, 4]

//7. shift() , Removes first element / Returns that element.

let arr = [10, 20, 30];

let first = arr.shift();

console.log(first);  // 10
console.log(arr);    // [20, 30]

//8. unshift(value1, value2, ...)
let arr = [10, 20];

let len = arr.unshift(5, 7);

console.log(len); // 4
console.log(arr); // [5, 7, 10, 20]

//9.Array.isArray(value) ,( Checks if value is an array or not,Returns true / false. )

console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray("hello"));   // false
console.log(Array.isArray({ a: 1 }));  // false

//10.delete arr[index]

let arr = [10, 20, 30];

delete arr[1];

console.log(arr);        // [10, <1 empty item>, 30]
console.log(arr.length); // 3

//11.concat() , Combines arrays and/or values.

let a = [1, 2];
let b = [3, 4];

let c = a.concat(b);
console.log(c);  // [1, 2, 3, 4]

let d = a.concat(b, [5, 6], 7);
console.log(d);  // [1, 2, 3, 4, 5, 6, 7]
//❌ Does not mutate original a or b.


//12.copyWithin(target, start, end?)
//Copies a slice of the array inside the same array,Overwrites values,end is not included (like slice).
//Syntax:arr.copyWithin(targetIndex, startIndex, endIndexNotIncluded);


let arr = [1, 2, 3, 4, 5];

// copy elements from index 2..4 (3,4) to starting at index 0
arr.copyWithin(0, 2, 4);

console.log(arr); // [3, 4, 3, 4, 5]

//13. flat(depth = 1)
//Flattens nested arrays,depth = how many levels to flatten,❌ Returns new array (no mutation).

let arr = [1, [2, 3], [4, [5, 6]]];

console.log(arr.flat());      
// [1, 2, 3, 4, [5, 6]]   (depth 1)

console.log(arr.flat(2));    
// [1, 2, 3, 4, 5, 6]

//14. slice(start, end?)
//Returns part of array (copy),end not included,Supports negative index,❌ Does not mutate (safe).
let arr = [10, 20, 30, 40, 50];

console.log(arr.slice(1, 4));   // [20, 30, 40]
console.log(arr.slice(2));      // [30, 40, 50]
console.log(arr.slice(-2));     // [40, 50]
console.log(arr);               // original same

//15. splice(start, deleteCount, ...itemsToAdd)
//Used to add / remove / replace elements,Mutates original array,Returns array of removed items.
let arr = [10, 20, 30, 40, 50];

// Remove elements
let removed = arr.splice(1, 2); // from index 1 remove 2 elements
console.log(removed); // [20, 30]
console.log(arr);     // [10, 40, 50]

// Add elements
arr.splice(1, 0, 25, 35); // at index 1, remove 0, add 25, 35
console.log(arr);  // [10, 25, 35, 40, 50]

// Replace elements
arr.splice(2, 1, 999); // index 2, remove 1, add 999
console.log(arr);  // [10, 25, 999, 40, 50]


//16. toSpliced(start, deleteCount, ...itemsToAdd) (new, ES2023)
//Same idea as splice, but DOES NOT mutate,Returns new array with changes,Original array remains same,❌ Does not mutate original.

let arr = [10, 20, 30, 40, 50];

// remove
let newArr1 = arr.toSpliced(1, 2);
console.log(newArr1); // [10, 40, 50]
console.log(arr);     // [10, 20, 30, 40, 50]

// add
let newArr2 = arr.toSpliced(1, 0, 15);
console.log(newArr2); // [10, 15, 20, 30, 40, 50]

// replace
let newArr3 = arr.toSpliced(2, 1, 999);
console.log(newArr3); // [10, 20, 999, 40, 50]


//HIGHLIGHT
//Does NOT change array: toString, at, join, Array.isArray, concat, flat, slice, toSpliced

//Changes array: length =, pop, push, shift, unshift, copyWithin, splice, delete (but leaves hole)















