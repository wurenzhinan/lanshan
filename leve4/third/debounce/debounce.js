function debounce (fn, wait) {
  let timer
  return function () {
    let that = this
    let args = arguments
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(that, args)
    }, wait)
  }
}
const input = document.createElement("input")
const body = document.querySelector("body")
body.appendChild(input)
function write (obj) {
  console.log(obj.target.value)
}
input.oninput = debounce(write.bind(input), 5000)
function isThis () {
  console.log(this)
}
