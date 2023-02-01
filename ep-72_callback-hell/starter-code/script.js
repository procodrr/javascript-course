const xhr = new XMLHttpRequest()
xhr.responseType = 'json'
xhr.addEventListener('load', () => {
  console.log(xhr);
})

xhr.open('GET', 'https://6wrlmkp9u2.execute-api.us-east-1.amazonaws.com/?sleep=4000')
xhr.send()
