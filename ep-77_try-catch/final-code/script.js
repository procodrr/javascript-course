// const user = {
//   name: 'Anurag',
//   age: 34,
// }

// try {
//   console.log(user.address)
// } catch (err) {
//   console.dir(err.message)
// } finally {
//   console.log('hello world')
// }

// console.log(3 + 7)

async function makeAsyncRequest() {
  try {
    const url =
      'https://6wrlmkp9u2.execute-api.us-east-1.amazonaws.com/?sleep=2000'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
  } catch (err) {
    console.log(err)
  }
}

makeAsyncRequest()
