const h1 = document.querySelector('h1')
const card = document.querySelector('.card')
const container = document.querySelector('.container')

function sayHi() {
    console.log('Hiiiii');
}

function secondSayHi() {
    console.log('Second Hi');
}

// h1.onclick = sayHi
// h1.onclick = secondSayHi


// h1.addEventListener('click', sayHi)
// h1.addEventListener('click', secondSayHi)

let count = 1

card.addEventListener('click', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    // const newCard = card.cloneNode()
    // newCard.classList.remove('add-card')
    console.log(newCard)
    newCard.innerText = count++
    container.append(newCard)
})