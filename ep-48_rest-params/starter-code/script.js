const nums1 = [1, 2, 3, 4]

function add(arguments) {
    console.log(arguments);
    let sum = 0
    for(let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i]
    }
    return sum
}
