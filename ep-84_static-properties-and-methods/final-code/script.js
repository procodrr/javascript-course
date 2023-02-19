class CreateUser {
  constructor(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }

  static run = 'running'

  static {
    console.log(this);
    this.hi = 'hello'
    this.getFullName = function() {
      return this.firstName + ' ' + this.lastName
    }
  }

  getBirthYear() {
    return new Date().getFullYear() - this.age
  }
  
}

// const user1 = new CreateUser('Aman', 'Mishra', 32)
// const user2 = new CreateUser('Anurag', 'Singh', 72)

