console.log('Program Started')

// debugger

// let i = 1
// while(i <= 100) {
//    console.log(i);
//    i++
// }

const friends = ['Akash', 'Rahul', 'Adarsh', 'Arif', 'Gaurav', 'Anurag', 'Rakesh']

let i = 0

while(i < friends.length) {
    console.log(`${i + 1}. ${friends[i]}`);
    friends[i] = friends[i] + ' Procodrr'
    i++
}

console.log('Program Ended')
