//String-search-methods

// | Method          | Returns     | Purpose              |
// | --------------- | ----------- | -------------------- |
// | `indexOf()`     | first index | find first           |
// | `lastIndexOf()` | last index  | find last            |
// | `search()`      | index       | regex search         |
// | `match()`       | array/null  | basic pattern match  |
// | `matchAll()`    | iterator    | detailed multi-match |
// | `includes()`    | true/false  | text present?        |
// | `startsWith()`  | true/false  | begins with?         |
// | `endsWith()`    | true/false  | ends with?           |


// 1.indexOf()
//  👉 How it works
//  Scans the string from left to right
//  Looks for the first match
//  Returns the index (0-based)
//  Returns -1 if not found

"hello".indexOf("l"); //l ✅ → returns 2



// 2. lastIndexOf()
// 👉 How it works
// Scans the string from right to left
// Still returns index from the left

"hello".lastIndexOf("l"); //l✅ → position 3



// 3. search()
// 👉 How it works
// Used mainly for regex
// Returns first match index
// Supports patterns like /\d/, /abc/

"hi123".search(/\d/);//The engine finds first digit → "1" at index 2

// 4. match()
// 👉 How it works
// If NO g flag → returns first match array
// If WITH g flag → returns all matches array

"abc123abc".match(/abc/g); //Engine finds → "abc" at 0 and 6 → returns:["abc", "abc"]

// 5. matchAll()
// 👉 How it works
// Returns an iterator (not array)
// Each match has groups + index
// Always requires g flag

[..."a1b2".matchAll(/\d/g)]; //"1" at index 1 , "2" at index 3 
// retun : [
//   ["1"], 
//   ["2"]
// ] matchAll gives detailed matches one-by-one, so we spread it into an array.

// 6. includes()
// 👉 How it works
// Returns true/false
// Simple substring check
// Code execution:
"javascript".includes("script"); // true

// explain:
// It just checks if the text exists inside the string.


// 7. startsWith()
// 👉 How it works
// Checks beginning of string
// Case-sensitive
// Code execution:
"frontend".startsWith("front"); // true

// You explain:
// It checks if the string begins with certain characters.


// //8. endsWith()
// 👉 How it works

// Checks end of string

// Code execution:
"photo.png".endsWith(".png"); // true

// You explain:
// It checks if the string ends with certain characters.










// Q1: "javascript".indexOf("a") → ?

// (Find first “a”)

// Q2: "banana".lastIndexOf("a") → ?

// (Find last “a”)

// Q3: "hello123".search(/\d/) → ?

// (Find first digit)

// Q4: "ab12cd34".match(/\d+/g) → ?

// (all number groups)

// Q5: [..."x1y2".matchAll(/\d/g)] → ?

// (all digits with details)

// Q6: "frontend".includes("end") → ?
// Q7: "developer".startsWith("dev") → ?
// Q8: "song.mp3".endsWith(".mp3") → ?
