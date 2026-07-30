// Problem 1 — Match Winner
function matchWinner(teamAGoals, teamBGoals) {
if(typeof teamAGoals !== "number" || typeof teamBGoals !== "number"){
    return "Invalid";
}
 if(teamAGoals > teamBGoals){
    return "Team A Won";
 }
 else if (teamAGoals < teamBGoals){
        return "Team B Won";
    }
    else{
        return "Draw";
    }
}

// Problem 2 — Elevator Weight Safety Checker
function isElevatorSafe(weights) {
    if(!Array.isArray(weights)){
        return "Invalid";
    }
let totalWeight = 0;
for(let i = 0; i < weights.length; i++){
    totalWeight = totalWeight + weights[i];
}
 if (totalWeight <= 400){
        return true;
    } else {
        return false;
    }
}


// Problem 3 — AI Token Cost Calculator
function calculateAiCost(tokensUsed) {
if(typeof tokensUsed !== "number" || tokensUsed < 0){
    return "Invalid"
}
if(tokensUsed <= 500){
    return 0;
} else {
    let extraToken = tokensUsed - 500;
    let cut = Math.floor(extraToken / 100);
    let extraCost = cut*5;
    return extraCost;
}
}

// Problem 4 — Top Rated Restaurant Finder
function topRatedRestaurant(restaurants) {
   if(!Array.isArray(restaurants) || restaurants.length === 0 ){
   return "Invalid";
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

// Problem 5 —Debugging Challenge: API Response Time Monitor
function averageResponseTime(times) {
  if (Array.isArray(times) === false) {
        return "Invalid";
   }
   
   if (times.length === 0) {
        return "Invalid";
    }
   
 let total = 0;
    for (let i = 0; i <= times.length - 1; i++) {
        if(typeof times[i] !== "number"){
            return "Invalid"
        }
        total = total + times[i];
    }

  return total / times.length;
}


