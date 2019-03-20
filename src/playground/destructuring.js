// Object Destructuring

// const person = {
//   name: undefined,
//   age: 23,
//   location: {
//     city: 'San Diego',
//     temp: 55
//   }
// }

// const { name: firstName = 'Anonymous', age } = person
// console.log(`${firstName} is ${age}`)

// const { city, temp: temperature } = person.location
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`)
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: undefined
//   }
// }

// const { name: publisherName = 'Self-Published'} = book.publisher
// console.log(publisherName)

// Array Destructuring

const address = ['667 Dark Avenue', 'San Diego', 'California', '12345']
const [, city, state = 'New York'] = address
console.log(`You are in ${state}`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']
const [name, , medium] = item
console.log(`A medium ${name} costs ${medium}`)