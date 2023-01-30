const image = document.querySelector('img')
const button = document.querySelector('button')

button.addEventListener('click', () => {
  const xhr = new XMLHttpRequest()

  console.log(xhr);

  // xhr.responseType = 'json'

  xhr.addEventListener('load', () => {
    // image.src = JSON.parse(xhr.response).message
    console.log(xhr);
  })

  xhr.open('GET', 'https://6wrlmkp9u2.execute-api.us-east-1.amazonaws.com/?sleep=5000')
  xhr.send()
})

// setTimeout(() => {
//   console.log('hiii');
// }, 4000)



// const blockingBtn = document.querySelector('.blocking-btn')

// blockingBtn.addEventListener('click', () => {
//   const startTime = Date.now()
//   let currentTime = startTime

//   while (startTime + 4000 > currentTime) {
//     currentTime = Date.now()
//   }
// })
