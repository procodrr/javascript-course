class Person {
  live() {
    console.log('living');
  }
}

class User extends Person {
  constructor(firstName, lastName, age) {
    super()
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }

  getBirthYear() {
    return new Date().getFullYear() - this.age
  }

  work() {
    console.log('user is working');
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  set fullName(value) {
    const [firstName, lastName] = value.split(' ')
    this.firstName = firstName
    this.lastName = lastName
  }
}

// const user1 = new User('Aman', 'Mishra', 32)
// const user2 = new User('Anurag', 'Singh', 72)

class Student extends User {
  constructor(firstName, lastName, age, standard) {
    super(firstName, lastName, age)
    this.standard = standard
  }
  study() {
    console.log('studying');
  }
}

class Employee extends User {
  constructor(firstName, lastName, age, company) {
    super(firstName, lastName, age)
    this.company = company
  }
  work() {
    console.log('Working');
  }
}

const student1 = new Student('Aman', 'Mishra', 32, 'BCA')
const employee1 = new Employee('Anurag', 'Singh', 72, 'Google')
