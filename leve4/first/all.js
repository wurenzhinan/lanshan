function promiseAll (promiseArray) {
  return new Promise(function (resolve, reject) {
    if (!Array.isArray(promiseArray)) {
      throw new TypeError(`argument must be a array`)
    }

    let resolvedCounter = 0
    let promiseNum = promiseArray.length
    let resolvedResult = []

    for (let i = 0; i < promiseNum; i++) {
      Promise.resolve(promiseArray[i]).then(
        value => {
          resolvedCounter++
          resolvedResult[i] = value
          if (resolvedCounter == promiseNum) {
            return resolve(resolvedResult)
          }
        },
        reason => {
          return reject(error)
        }
      )
    }
  })
}
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000)
})
let p2 = Promise.resolve(2)
let p3 = Promise.resolve(3)
let result = promiseAll([p1, p2, p3])
console.log(result)