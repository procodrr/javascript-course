fetch('https://6wrlmkp9u2.execute-api.us-east-1.amazonaws.com/?sleep=2000')
.then(response => response.json())
.then(data => {
  console.log(data);
})