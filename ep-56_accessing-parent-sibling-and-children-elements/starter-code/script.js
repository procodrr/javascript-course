const h1 = document.querySelector('h1')
const paragraph = document.querySelector('p')
const allLinks = document.querySelectorAll('a')

// console.log(paragraph.innerHTML);

// paragraph.innerHTML = '<h4>Hiii</h4>'

h1.style.color = 'hotpink'
h1.style.backgroundColor = 'skyblue'

// for (let i = 0; i < allLinks.length; i++) {
//   allLinks[i].style.color = 'teal'
// }


for (const link of allLinks) {
    // link.style.color = 'teal'
    // link.style.textDecorationLine = 'none'
    // link.style.fontWeight = '700'
    // link.style.fontFamily = 'cursive'
    // link.style.fontSize = '18px'

    // link.style.cssText = `
    //     color: teal;
    //     text-decoration-line: none;
    //     font-weight: 700;
    //     font-family: cursive;
    //     font-size: 18px;
    // `

    // link.className = 'green-link'
    // link.setAttribute('class', 'green-link')

    link.classList.add('green-link')
    link.classList.remove('my-link')
    // link.classList.toggle('my-link')
}