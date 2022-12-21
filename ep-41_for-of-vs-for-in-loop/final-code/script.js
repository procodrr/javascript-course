const fruits = ['banana', 'apple', 'peach', 'mango', 'grapes']

// for(let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// console.log('*************************');

// for(const fruit of fruits) {
//     console.log(fruit);
// }

// const user = 'Anurag Singh'


// for(const letter of user) {
//     console.log(letter);
// }

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 50,
    eyeColor: 'blue',
    city: 'Bangalore',
}

// for(const key in person) {
//     console.log(key, ': ' ,person[key]);
// }

const personKeys = Object.keys(person)
const personValues = Object.values(person)
const personEntries = Object.entries(person)
// for (const key of personKeys) {
//     console.log(person[key]);
// }


