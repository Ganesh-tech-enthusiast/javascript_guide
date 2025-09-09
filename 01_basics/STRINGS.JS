//Here we will learn all about strings and and its methods
//string is a sequence of characters stored like array elements every character of string has a index , first character starts from 0th index
//-------------------------------------------------------------------
/*example
 let str = Ganesh wakchaure
 indexing is as follows
 G --> 0
 a -->1
 n-->2
 e-->3
 s-->4
 h-->5
 whitespace -->6
 w-->7
 a-->8
 k-->9
 c-->10
 h-->11
 a-->12
 u-->13
 r-->14
 e-->15    thus the length of str is 16 not 15 because length is calculated by making starting index 1 not 0*/
 let str = "Ganesh wakchaure"
 console.log(`${str}, length is": ${str.length}`);
 
 //The charCodeAt() method of String values returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
console.log(`character code ${str.charCodeAt(7)} is equal to ${str.charAt(7)}`);

 /*********************************************
 📘 JavaScript String Operations
**********************************************/

/*-----------------------------------------------------
 ✅ 1. Creating Strings
-----------------------------------------------------*/
let str1 = "Hello";       // double quotes
let str2 = 'World';       // single quotes
let str3 = `Hi ${str1}`;  // template literals (supports variables & multi-line)

console.log(str1, str2, str3);

/*-----------------------------------------------------
 ✅ 2. String Properties
-----------------------------------------------------*/
console.log(str1.length); // 5 → number of characters

/*-----------------------------------------------------
 ✅ 3. Accessing Characters
-----------------------------------------------------*/
console.log(str1[0]);   // H
console.log(str1.charAt(1)); // e
console.log(str1[str1.length - 1]); // o (last character)

/*-----------------------------------------------------
 ✅ 4. Changing Case
-----------------------------------------------------*/
console.log(str1.toUpperCase()); // HELLO
console.log(str1.toLowerCase()); // hello

/*-----------------------------------------------------
 ✅ 5. Searching in Strings
-----------------------------------------------------*/
let text = "JavaScript is awesome!";
console.log(text.indexOf("Script"));   // 4
console.log(text.lastIndexOf("e"));    // 18
console.log(text.includes("awesome")); // true
console.log(text.startsWith("Java"));  // true
console.log(text.endsWith("!"));       // true
console.log(text.endsWith("h"));       // false

/*-----------------------------------------------------
 ✅ 6. Extracting Substrings
-----------------------------------------------------*/
let lang = "JavaScript";
console.log(lang.slice(0, 4));   // "Java" (from 0 to 3)
console.log(lang.substring(4, 10)); // "Script"
console.log(lang.substr(4, 6));  // "Script" (start, length)

/*-----------------------------------------------------
 ✅ 7. Replacing Text
-----------------------------------------------------*/
let msg = "I like JavaScript. JavaScript is powerful!";
console.log(msg.replace("JavaScript", "JS"));   // replaces first occurrence
console.log(msg.replaceAll("JavaScript", "JS")); // replaces all

/*-----------------------------------------------------
 ✅ 8. Trimming Spaces
-----------------------------------------------------*/
let spaced = "   hello world   ";
console.log(spaced.trim());      // "hello world"
console.log(spaced.trimStart()); // "hello world   "
console.log(spaced.trimEnd());   // "   hello world"

/*-----------------------------------------------------
 ✅ 9. Repeating & Padding
-----------------------------------------------------*/
let word = "Hi";
console.log(word.repeat(3));     // "HiHiHi"
console.log(word.padStart(5, "*")); // "***Hi"
console.log(word.padEnd(5, "!"));   // "Hi!!!"

/*-----------------------------------------------------
 ✅ 10. Splitting & Joining
-----------------------------------------------------*/
let csv = "red,green,blue";
let arr = csv.split(",");    // ["red", "green", "blue"]
console.log(arr);

let joined = arr.join(" - ");
console.log(joined);         // "red - green - blue"

/*-----------------------------------------------------
 ✅ 11. String Comparison
-----------------------------------------------------*/
console.log("a" < "b");   // true (compares Unicode values)
console.log("Apple" === "Apple"); // true
console.log("apple".localeCompare("banana")); // -1 (apple < banana)

/*-----------------------------------------------------
 ✅ 12. Template Literals
-----------------------------------------------------*/
let user = "Ganesh";
let age = 21;
let intro = `My name is ${user} and I am ${age} years old.`;
console.log(intro);

/*-----------------------------------------------------
 🔹 QUICK REVISION NOTES
-----------------------------------------------------*/
/*
CREATION:
- "Hello", 'World', `Template ${var}`

PROPERTIES:
- str.length

ACCESS:
- str[index], str.charAt(i)

CASE:
- toUpperCase(), toLowerCase()

SEARCH:
- indexOf(), lastIndexOf(), includes(), startsWith(), endsWith()

SUBSTRING:
- slice(start, end), substring(start, end), substr(start, length)

REPLACE:
- replace(old, new), replaceAll(old, new)

TRIM:
- trim(), trimStart(), trimEnd()

REPEAT & PAD:
- repeat(n), padStart(len, char), padEnd(len, char)

SPLIT & JOIN:
- split(separator) → array
- join(separator) → string

COMPARISON:
- <, >, === , localeCompare()

TEMPLATE LITERALS:
- Use backticks ``, supports variables & multi-line strings
*/
