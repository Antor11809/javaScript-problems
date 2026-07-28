// Even or odd
let number = 55;
function evenOrOdd(number){
    if(number % 2 == 0 ){
    return "even";
}
else {
    return "Odd";
}
}
// range 

let numbeR = 8;
let jog = 0;
function range(numbeR){
    for(let i = 1; i < numbeR; i++){
        console.log(i);
        jog = jog + i;
    }
    return jog;
}
console.log(range(8));
console.log(range(10));
// factorial;
const digit = 5;
function factorial(digit){
    let sum = 1;
    for(let i = 1; i <= digit; i++){
        sum = sum * i;
    }
return sum;
}
factorial(digit);
console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(2));

// fizzbuzz
function fizbuzz(fz){
    for(let i = 1; i<=fz; i++){
        if(i % 3 === 0 && i % 5 === 0){
 console.log("fizzbuzz")
    } else if(i % 3 === 0){
        console.log("fizz")
    } else if(i % 5 === 0){
        console.log("Buzz")
    } else{
console.log(i)
    }
    }
        }
          fizbuzz(100);
          fizbuzz(10);
// Reverse a word!!!

let str = "ABCDEFGHIJ";
let reversee = " ";
function reverse(str){
    for(let i = str.length-1; i >= 0; i--){
    let letter = str[i]
    console.log("I print korle hoy>", i, str[i])
    reversee = reversee + letter;
}
return reversee;
}
console.log(reverse("ABCDE"));
console.log(str);
// checking if it is a vowel and counting it
function vowelCount(digEt){
    let count = 0;
    let vowel = "aeiou";
for(let i = 0; i < digEt.length; i++){
    const letter = digEt[i];
    console.log("output", i, letter)
    if(vowel.includes(letter)){
        console.log("vowel")
        count++;
    }
}
return count;
}
console.log(vowelCount("Aikhane koita vowel ase bol"))

// checking if it is a palindrome

function ispalindrome(stringg){
let reverseword = "";
for(let i = stringg.length-1; i >=0; i--){
    const letter = stringg[i];
    console.log(i,letter);
    reverseword = reverseword + letter;
}
console.log(reverseword);
if(stringg === reverseword){
    return true;
} else{
    return false;
}
}
console.log(ispalindrome("madam"));
console.log(ispalindrome("SCHOOL"));
// largest num of an array
let arre = [1000, 45, 67, 87, 34, 87, 35, 75500]
function largestnumofArray(array){
let largest = array[0];
for(let i = 0; i < array.length; i++){
    let currentelement = array[i]
  if(currentelement > largest){
    largest = currentelement;
  }
}
return largest;
}
console.log(largestnumofArray([34, 56, 78, 67,45, 1000]));
console.log(largestnumofArray(arre));
// samllest num of and array
let arr = [1000, 45, 67, 87, 3, 87, 35, 75500]
function smallestnumofArray(arry){
let smallest = arry[0];
for(let i = 0; i < arry.length; i++){
    let currentelement = arry[i]
  if(currentelement < smallest ){
    smallest = currentelement;
  }
}
return smallest ;
}
console.log(smallestnumofArray([34, 56, 78, 67,45, 1000]));
console.log(smallestnumofArray(arr));