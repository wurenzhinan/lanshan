function throttle (fn, wait) {
  let timer
  return function () {
    let that = this
    let args = arguments
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(that, args)
        timer = null
      }, wait)
    }
  }
}
let num = 1
let click = document.querySelector("button")
let box = document.querySelector(".box")
box.innerHTML = 0
function count (obj) {
  console.log(obj)
  obj.innerHTML = num++
}
click.onclick = throttle(count.bind(this, box), 5000)