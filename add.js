
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



