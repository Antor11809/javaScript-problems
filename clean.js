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

