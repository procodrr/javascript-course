const message = 'Hello World!'
const faltuMessage = '     Hi, I am Anurag.     '
const finalMessage = faltuMessage.trim()
const finalMessageLowerCase = faltuMessage.trim().toLocaleLowerCase()
const replacedMessage = finalMessage.replace('Hi', 'Hello')

const lastFourDigits = '9996'
const maskedAccountNumber = lastFourDigits.padStart(16, '*')

const capitalMessage = message.toUpperCase()
const bankBalance = 9873

const concatenatedString = `Last four digit of my account number is`.concat(' ', lastFourDigits)
const templateString = `My account number is ${lastFourDigits}.`
const templateString2 = `I have ₹${bankBalance} in my account.`

const addedString = 'I have ₹' + bankBalance + ' in my account.'