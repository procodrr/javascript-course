const nums1 = [1, 2, 3, 4]
const nums2 = [5, 6, 7, 8, 9]

const myName = 'Anurag'

const joinedArray = [...nums1, ...nums2, 10, 11, 12]

const user = {
    name: 'Anurag',
    age: 25,
}

// const updatedUser = {...user, city: 'Bangalore'}

function add() {
    console.log(arguments);
    let sum = 0
    for(let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i]
    }

    return sum
}
