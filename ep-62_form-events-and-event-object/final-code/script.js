const usernameInput = document.querySelector('#username')
const paragraph = document.querySelector('p')
const form = document.querySelector('form')

// usernameInput.addEventListener('click', () => {
//     console.log('input clicked');
// })

// usernameInput.addEventListener('dblclick', () => {
//     console.log('input double clicked');
// })

// let inputValue


// usernameInput.addEventListener('input', (e) => {
//     console.log(e);
//     inputValue = e.target.value
//     paragraph.innerText = e.target.value
// })

// usernameInput.addEventListener('change', (e) => {
//     console.log(e);
//     inputValue = e.target.value
//     paragraph.innerText = e.target.value
// })

// usernameInput.addEventListener('focus', (e) => {
//     console.log(e.type);
//     inputValue = e.target.value
//     paragraph.innerText = e.target.value
// })

// usernameInput.addEventListener('blur', (e) => {
//     console.log(e.type);
//     inputValue = e.target.value
//     paragraph.innerText = e.target.value
// })

// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     const myFormData = new FormData(form)

//     for (const p of myFormData.entries()) {
//         console.log(p);
//     }
// })

form.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(e);
    // console.log('From Clicked');
})

// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     console.log('From Submitted');
// })