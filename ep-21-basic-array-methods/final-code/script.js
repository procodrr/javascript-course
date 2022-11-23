const evenNumbers = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24]
const animals = ['Dog', 'Cat', 'Rat', 'Lion', 'Elephant', 'Cow', 'Tiger']
const oddNumber = [1, 3, 5]

// evenNumbers.shift()
// evenNumbers.unshift(0)

const addedArray1 = evenNumbers.concat(animals)
const addedArray2 = animals.concat(evenNumbers, oddNumber)

const elementIndex = animals.indexOf('Cat')
const isIncluded = animals.includes('dog')

animals.slice(5)
animals.slice(2, 5)
