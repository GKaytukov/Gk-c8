// 1. DO SOMETHING / NO PARAMETERS

function sayHello () {
    console.log ('Hello')
}

sayHello()
console.log('...do something else...')
sayHello()

// 2. DO SOMETHING / WITH PARAMETERS
function greetPerson(name) {
    console.log (`Hello ${name}. Welcome!`)
}

greetPerson('Gianna')
greetPerson('Brad')

// 3. RETURNS SOMETHING / NO PARAMETERS 

function addTwoPlusTwo() {
    return 2 + 2
}

console.log (addTwoPlusTwo())

const answer = addTwoPlusTwo()
console.log('Answer:',answer)

4

// 4. RETURNS SOMETHING / WITH PARAMETER (S)

function doubleMyNumber (number) {
    return number * 2 
}

console.log(doubleMyNumber(11))

const myNumber = 17

const result = doubleMyNumber(myNumber)

console.log('Result: ', result)