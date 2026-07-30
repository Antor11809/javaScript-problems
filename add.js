
/* এই ফাংশনের সব বাগ খুঁজে ঠিক করো — নাম পরিবর্তন করবে না */
function averageResponseTime(times) {
  if (Array.isArray(times) == false) {
        return "Invalid";
   }
   
   if (times.length === 0) {
        return "Invalid";
    }
   
 let total = 0;
    for (let i = 0; i < times.length; i++) {
        if(typeof times[i] !== "number"){
            return "invalid";
        }
        total = total + times[i];
    }
   
  return total / times.length;
}
console.log(averageResponseTime([50, 4556, 50, 50]))


function matchWinner(teamAGoals, teamBGoals) {
    if(typeof teamAGoals !== "number" || typeof teamBGoals !== "number"){
        return "Invalid"
    }
  if(teamAGoals > teamBGoals){
    return "Team A Won";
  } else if( teamBGoals > teamAGoals){
    return "Team B Won"
  } else {
    return "Draw"
  }
  }
  console.log(matchWinner(3, 3))

  function isElevatorSafe(weights) {
    if(!Array.isArray (weights)){
        return "Invalid"
    }
    let motWeight = 0;
    for(let i = 0; i < weights.length; i++){
        motWieght = motWeight + weights[i];
         if(typeof weights[i] !== "number"){
        return "bokach*da dili ta-ki"
    }
    }
  if (motWeight <= 400){
    return true;
  } else{
    return false;
  }
}
console.log(isElevatorSafe([100, 300,]))


function calculateAiCost(tokensUsed) {
    if (typeof tokensUsed !== "number" || tokensUsed < 0){
   return "Ki disos eita"
    }
 if (tokensUsed <= 500){
    return 0;
 } else{
    let extratoken = tokensUsed - 500;
    let vag = Math.floor(extratoken / 100);
    let rate = vag * 5;
     return rate;
 }
}
console.log(calculateAiCost(-4500))
console.log(calculateAiCost(4500))
console.log(calculateAiCost(500))


function topRatedRestaurant(restaurants) {
    if(!Array.isArray (restaurants) || restaurants.length === 0){
        return "You bloody bustard"
    }
let bestRestaurant = restaurants[0];
for(let i = 0; i < restaurants.length; i++){
let currentRestaurant = restaurants[i];
if(currentRestaurant.rating > bestRestaurant.rating){
    bestRestaurant = currentRestaurant;
}
}
return bestRestaurant.name.toUpperCase();
}
console.log(topRatedRestaurant([{name:"Chillox",rating:4.5},{name:"Sultan's Dine",rating:4.8}]

))
console.log(topRatedRestaurant([{name:"KFC",rating:4.2},{name:"Pizza Hut",rating:4.6}]))

console.log(topRatedRestaurant([]))

// largest number of an array

function largestNum(arr){
    if(largestNum !== "number" || largestNum.length === 0){
        return "eita ki dili re vai"
    }
    let larGest = arr[0];
    for(i = 0; i < arr.length; i++){
    let currentNum = arr[i];
    if(currentNum > larGest){
        larGest = currentNum;
    }
    }
    return larGest;
}
console.log(largestNum([1, 2, 3, 4, 5, 6, "70", 8, 9, 10]))
console.log(largestNum([1, 2, 3, 4, 5, 6, 70, 8, 9, 10]))


function smallNum(arry){
    if(!Array.isArray(arry) || arry.length === 0){
        return "eita ki dili re vai"
    }
    let smallest = arry[0];
    for(i = 0; i < arry.length; i++){
    let currentNum = arry[i];
    if(currentNum < smallest){
        smallest = currentNum;
    }
    }
    return smallest;
}
console.log(smallNum([50, 2, 3, 4, 6, 70, 8, 9, 10]))
console.log(smallNum([50, 2, 3, 4, "-0.2", 6, "70", 8, 9, 10]))


// get the evennumber from an array

function evenNum(diGit){
    if(!Array.isArray(diGit)){
        return "unbeliavable"
    }
    let evens = []
    for(let i = 0; i < diGit.length; i++){
        if(diGit[i] % 2 === 0){
            evens.push(diGit[i])
        }
    }
    return evens;
}
console.log(evenNum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
console.log(evenNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

function sumEvenNumbers(diGit) {
     let evens = evenNum(diGit);
    let sum = 0;
    for(i = 0; i < evens.length; i++){
    sum = sum + evens[i];
    }
    return sum;
}
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(sumEvenNumbers([2,4]));

function dd(numBer, value){
let valuee = 3;
let khali = [];
for(let i = 0; i < numBer.length; i++){
    if(numBer[i] > value){
    khali.push(numBer[i])
    }
}
return khali;
}
console.log(dd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));


function beshi(number, value){
    let valuue = 2;
    let store = [];
    for(i = 0; i < number.length; i++){
        if(number[i] > valuue){
            store.push(number[i])
        }
    }
return khali;
}
console.log(dd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));

function add(eksathe){
    let sum = 0;
    for(let i = 0; i < eksathe.length; i++){
        sum = sum + eksathe[i];
    }
    let average = sum / eksathe.length;
    return average;
}
console.log(add([200, 200, 100]))

function vowelCount(digEt){
    let count = 0;
    let vowel = "aeiou";
for(let i = 0; i < digEt.length; i++){
    const letter = digEt[i];
    if(vowel.includes(letter)){
        count++;
    }
}
return count;
}
console.log(vowelCount("Aikhane koita vowel ase bol"))

function VC(digit){
    let count = 0;
    let vowel = "aeiou"
    for(let i = 0; i < digit.length; i++){
        let letterr = digit[i]
        if(vowel.includes(letterr)){
            count++
        }
    }
    return count;
}
console.log(VC("how are you"))