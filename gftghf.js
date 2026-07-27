// // let vowels = "bangladesh"
// // let ae = "aeiou"
// // let count = 0;
// // for(let i = 0; i < vowels.length; i++){
// // let letter = vowels[i];
// // console.log(letter, i);
// // if(ae.includes(letter)){
// //     console.log("vowel")
// //     count++
// // }
// // }
// // console.log("count>>>", count);

// function countVowels(vowels){
//     let ae = "aeiou"
//     let count = 0;
// for(let i = 0; i < vowels.length; i++){
// let letter = vowels[i];
// console.log(letter, i);
// if(ae.includes(letter)){
//     console.log("vowel")
//     count++
// }
// }
// return count;
// }
// console.log(countVowels("programming-heroine"));


let str = "dad";
let reverseWord = "" ;
for(let i = str.length -1; i >=0; i--){
    let letter = str[i];
    console.log(i, letter);
    reverseWord = reverseWord + letter;
}
console.log(reverseWord);

if(str === reverseWord){
    console.log("palindrome");
} else{
     console.log("not-palindrome");
}

// let arr = [4, 5, 7, 9, 6]
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
// console.log(arr[i]);
// sum += arr[i];
// }
// console.log(sum)

// let avg = sum / arr.length;
// console.log(avg);
