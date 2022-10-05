//Define the function
function isDrinkingAge(Age){
const drinkingAge = 21; 
const canDrink = age >= drinkingAge; 
return canDrink; 
}

//Create some examples
const peter = 17
const luke = 24
const james = 55

//Test our examples
console.log('peter', isDrinkingAge(peter))
console.log('luke', isDrinkingAge(luke))
console.log('james', isDrinkingAge(james))
