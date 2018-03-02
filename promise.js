let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('error after 2s!')
  }, 2000)
})

let doOne = (text) => {
  console.log(text)
  return 'do second thing'
}

let doTwo = (text) => {
  console.log(text)
}

let doSomething = new Promise((resolve, reject) => {
  resolve('we do something!')
})

doSomething.then(result => doOne(result)).then(secondResult => doTwo(secondResult))

promise.then(succesMsg => {
  console.log('Yahy!' + succesMsg)
})
