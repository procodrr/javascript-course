const xhr = new XMLHttpRequest()
xhr.responseType = 'json'
xhr.addEventListener('load', () => {
  console.log(xhr);
})

xhr.open('GET', 'https://procodrr.vercel.app/?sleep=5000')
xhr.send()
