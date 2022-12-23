const evenNumbers = [0, 2, 10, 4, 61, 8]


// const result = evenNumbers.some((num, i) => {
//     if(num % 2 === 1) {
//         console.log(i);
//     }
//     return num % 2 === 1
// })

const result = evenNumbers.every((num) => {
    debugger
    return num % 2 === 0
})