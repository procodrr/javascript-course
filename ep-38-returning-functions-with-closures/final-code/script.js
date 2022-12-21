function outer() {
  const a = 4
  function parent() {
    const b = 6
    return function() {
      console.log(a + b)
    }
  }
  return parent()
}

const add1 = outer()

console.dir(add1)
