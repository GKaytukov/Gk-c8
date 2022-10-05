const person = {
    name: "Gerly", 
    age: 35,
    address: "1 Apple Drive",
    address2: "1 Apple Drive",
    address3: "1 Apple Drive",
    address4: "1 Apple Drive"
}

// console.log("person is called: ",person.name)
// console.log("person is called: ",person["name"])
console.log("person is called: ",person["name"])

//console.log(`my name is ${person.name} and
//I'm this old: ${person.age}`)


//const name = person.name 
//const age = person.age

const {name,age} = person
console.log(`my name is ${name} and
I am this old: ${age}`)