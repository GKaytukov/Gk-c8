// let's write a loop

for(let i =0; i < 10; i++) {
  console.log('Hello there!', i)
}

// let's loop through an array
const mentors = [
    'Peter',
    'Cassandra',
    'Bridgette',
    'Arthur',
    'Sebas',
    'Nerissa',
]
let firstName = '';

for(let i = 0; i < mentors.length; i++) {
    const firstname = mentors[i]
    console.log(`${firstName} is an awesome mentor!`)

}

