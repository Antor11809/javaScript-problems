// checking even or odd without function;
let num = 16;
if(num % 2 == 0 ){
    console.log(num, "Is a even number")
}
else {
    console.log("Odd number")
}
// checking even or odd with function;

let number = 55;
function evenOrOdd(number){
    if(number % 2 == 0 ){
    return "even";
}
else {
    return "Odd";
}
}




console.log(evenOrOdd(27));
console.log(evenOrOdd(26));
console.log(evenOrOdd(57));
console.log(evenOrOdd(655));
console.log(evenOrOdd(54));


const digit = 7;
let sum = 0;
for(let i = 1; i <= digit; i++){
    sum = sum + i;
    console.log(i);
}
console.log(sum);

function add(digit){
    let sum = 0;
    for(let i = 1; i <= digit; i++){
    sum = sum + i;
}
return sum;
}
console.log(add(7));
console.log(add(15));
console.log(add(70));

let numberr = 5;
// let result = 1;
// for(let i = 1; i <= 5; i++) {
// result = result * i;
// console.log(i, result);

// }
// console.log(result);

function factorial(number){
    let result = 1;
for(let i = 1; i <= number; i++) {
result = result * i;

}
return result;
}

console.log(factorial(10));
console.log(factorial(3));
console.log(factorial(2));
console.log(factorial(1));
let get = factorial(5);
console.log(get);

// for(let i = 1; i<=15; i++){
//     console.log( "Answer", i)
//     if(i % 3 == 0 && i % 5 === 0){
//         console.log("fizzbuzz");
//     }
//     else if(i % 3 == 0){
// console.log("fizz")
//     } else if(i % 5 ==0){
//  console.log("buzz")
//     } else{
//         console.log(i);
//     }
       
// }

function fizzbuzz(fz){
    
for(let i = 1; i<=fz; i++){
    console.log( "Answer", i)
    if(i % 3 == 0 && i % 5 === 0){
        console.log("fizzbuzz");
    }
    else if(i % 3 == 0){
console.log("fizz")
    } else if(i % 5 ==0){
 console.log("buzz")
    } else{
        console.log(i);
    }
       
}
}
(fizzbuzz(100));
let move = [4,4,6,7];
console.log(move.reverse());

let str = "Bangladesh";
let reverseWord = "" ;
for(let i = str.length -1; i >=0; i--){
    let letter = str[i];
    console.log(i, letter);
    reverseWord = reverseWord + letter;
}
console.log(reverseWord);


function reverse(word){
    let reverseWord = "" ;
    for(let i = word.length -1; i >=0; i--){
    let letter = word[i];
    console.log(i, letter);
    reverseWord = reverseWord + letter;
}
return reverseWord;
}
console.log(reverse("ABCDEFGH"));

console.log(reverse("HGFEDCBA"));

let vowels = "bangladesh"

for(let i = 0; i < vowels.length; i++){
let letter = vowels[i];
console.log(letter, i);
}
let numb = 55;
function evenORodd(numb){
    if(numb % 2 === 0){
        return "even";
    } else {
      return "odd";
    }
}
console.log(evenORodd(numb));
console.log(evenORodd(89));
console.log(evenORodd(90));
console.log(evenORodd(890));

let numbeR = 8;
let jog = 0;
function range(numbeR){
    for(let i = 0; i < numbeR; i++){
        console.log(i);
        jog = jog + i;
    }
    return jog;
}
console.log(range(8));
