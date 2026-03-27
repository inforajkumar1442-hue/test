// WAF to print Tables (10)
for (let i = 1; i <= 10; i++) { 
    console.log(`Multiplication Table of ${i}:`);
    for (let j = 1; j <= 10; j++) { 
        const result = i * j;
        console.log(`${i} x ${j} = ${result}`);
    }
    console.log('\n'); 
}

// WAF to check string is Palindrome or not ?
function isPalindrome(str) {

  const cleanStr = str.toLowerCase();
  const reversedStr = cleanStr.split('').reverse().join('');
  return cleanStr === reversedStr;
}
console.log(isPalindrome("peacock"));
console.log(isPalindrome("arcra"));
console.log(isPalindrome("radar"));  
console.log(isPalindrome("A man, a plan, a canal, Panama")); 
console.log(isPalindrome("hello"));   

// Reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello")); // Output: "olleh"   

// Uppercase or lowercase string
let text = "Hello, World!";
console.log(text.toUpperCase()); // "HELLO, WORLD!"
console.log(text.toLowerCase()); // "hello, world!"   

// [1,2,3,null,0,undifined,-10,10,20] remove falsy values ?


// Sum of 2 numbers
let a = 10;
let b = 20;
let c = a+b;
console.log("First number:",a)
console.log("Second number:",b)
console.log("Sum of Two numbers:",c);

// Swap a no: [2,3] [3,2]
function swap(a, b) {
    console.log("Before swapping: a =",a, "b =",b);
    [a, b] = [b, a];
    console.log("After swapping: a =", a, "b =", b);
}
swap(5, 10); 