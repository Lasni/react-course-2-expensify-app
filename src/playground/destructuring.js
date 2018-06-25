// object destructuring
// const person = {
//     name: 'Grega',
//     age: 29,
//     location: {
//         city: 'Ljubljana',
//         temp: 20
//     }
// }

// const { name = 'anon', age } = person
// console.log(`${name} is ${age}`)

// const { city, temp: temperature } = person.location
// console.log(`in ${city} it's ${temperature} degrees celsius`)

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'self-published' } = book.publisher
// console.log(publisherName) // Penguin, self-published



// array destructuring
const address = ['1299 S Juniper Street', 'Ljubljana', 'Slovenija', '1000']
const [, city, state = 'default state'] = address
console.log(`You are in ${city}, ${state}`)


const item = ['coffee (hot)', '$2', '$2.5', '$2.75']
const [hotCoffee, ,medium] = item

console.log(`A medium ${hotCoffee} costs ${medium}`)
