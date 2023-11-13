
console.log(`
Assignment

`)
// Number 1

/* NaN stands for "Not a Number". It's a special value that represents an invalid number, such as the result of dividing by zero.
 NaN is considered to be a "number" type, but it does not have any specific value.
 As a result, it's not possible to reliably test if a value is equal to NaN.
However, the "isNaN()" function can be used to check if a value is NaN or not.
  If the value is NaN, the "isNaN()" function will return true.
 Otherwise, it will return false.
 */

// Number 2

 let check = (word) =>{
  const revWord = word.split("").reverse().join("").toUpperCase()
  console.log(revWord)
 if(word.toUpperCase() === revWord){
      return true

  }else{  
      return false
  }
} 
console.log(check("madam"))

/* 

Number 3

function sum(a, b){
  if(b!== undefined){
    return a + b
  }
  else{
    return false
  }
}
console.log(sum(2, 3))
 */

// Number 4
/* 
 The code will output the following:
true
false
In the first console.log statement, false == '0' is true.
 This is because the loose equality operator (==) in JavaScript performs type coercion,
  converting the operands to a common type before comparison.
   In this case, the boolean value false is coerced to the number 0, and the string '0' is also coerced to the number 0.
   Since 0 is equal to 0, the comparison returns true.

In the second console.log statement, false === '0' is false.
 This is because the strict equality operator (===) in JavaScript does not perform type coercion.
  It checks for equality while also considering the types of the operands. 
  In this case, false is a boolean and '0' is a string, so they
   have different types and are not strictly equal. */

/* 

// Number5
/* 
//The first line of code will output 0.30000000000000004. This is because when adding two floating point numbers together,
   //JavaScript will perform a type of coercion known as "value" coercion.
  // In this case, the numbers 0.1 and 0.2 are coerced into floating point numbers with a greater degree of precision.
   // The second line of code will output false. This is because, in this case, the "===" operator is being used, which performs "strict" equality.
    // As a result, the two values are not considered to be equal, even though they are very close.
*/


// Number 6
/*
let num1 = prompt("Type in a Number")
 let num2 = prompt("Type in a Number")
 let num3 = prompt("Type in a Number")

 let product = num1 * num2 * num3
 if(product > 0){
   console.log("+")
 }
 else if(product < 0){
 console.log("-")
 }

 else{
   console.log("Invalid")
 }

 */
/* 
console.log(`

no 7`)
// Number 7
 for (let i = 0; i <= 15; i++) {
  if (i % 2 == 0) {
    console.log(i + " Is even");
  } else {
    console.log(i + " is odd");
  }
}
  */



/* 
console.log(`
Number 8

`);
// Number8
 for (let c = 0; c <= 100; c++) {
  if (c % 3 == 0) {
    console.log("Fizz");
  } else if (c % 5 == 0) {
    console.log("Buzz");
  } else if (c % 3 == 0 && c % 5 == 0) {
    console.log("Fizz Buzz");
  } else {
    console.log(c);
  }
} 
 */



/* 
console.log(`

Number 9

`);
// Number 9
 let sum = 0;
for(d = 0; d < 1000; d++){
  if(d % 3 === 0 || d % 5 === 0){
    sum += d
  }
} 
console.log(sum)

 */


/* 

//Number 10
const checkString = (string) =>{
    if(typeof string === "string"){
        console.log("this is a string")
    }else{
        console.log("not a string")
    }
  }
  
  checkString(100)
 */