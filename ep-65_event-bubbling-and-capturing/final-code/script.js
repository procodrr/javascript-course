const green = document.querySelector('.green')
const pink = document.querySelector('.pink')
const blue = document.querySelector('.blue')


window.addEventListener('click', (e) => {
    console.log('6. Window Event Listener');
}, {capture: false})

document.addEventListener('click', (e) => {
    console.log('5. Document Event Listener');
}, {capture: false})

document.body.addEventListener('click', (e) => {
    console.log('4. Body Event Listener');
}, {capture: false})

green.addEventListener('click', (e) => {
    console.log('3. Green Event Listener');
}, {capture: false})

pink.addEventListener('click', (e) => {
    console.log('2. Pink Event Listener');
}, {capture: false})

blue.addEventListener('click', (e) => {
    console.log('1. Blue Event Listener');
}, {capture: false})

// blue.addEventListener('click', (e) => {
//     console.log('1. Blue Event Listener');
// }, {once: true})
